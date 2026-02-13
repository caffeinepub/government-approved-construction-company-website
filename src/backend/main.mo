import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile management
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact form management
  public type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    subject : Text;
    message : Text;
  };

  var submissions : [ContactSubmission] = [];

  // Public endpoint - accessible to everyone including guests (anonymous principals)
  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    subject : Text,
    message : Text,
  ) : async () {
    // No authorization check - guests can submit contact forms
    if (name.isEmpty() or email.isEmpty() or subject.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields are required except phone");
    };

    let submission : ContactSubmission = {
      name;
      email;
      phone;
      subject;
      message;
    };

    submissions := submissions.concat([submission]);
  };

  // Admin-only endpoint
  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };
    submissions;
  };

  // Admin-only endpoint
  public query ({ caller }) func getSubmissionByIndex(index : Nat) : async ?ContactSubmission {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view submissions");
    };
    if (index >= submissions.size()) {
      return null;
    };
    ?submissions[index];
  };

  // Admin-only endpoint
  public shared ({ caller }) func deleteSubmission(index : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete submissions");
    };
    if (index >= submissions.size()) {
      return Runtime.trap("Submission index out of bounds");
    };
    submissions := Array.tabulate<ContactSubmission>(
      submissions.size() - 1,
      func(i) {
        if (i < index) { submissions[i] } else { submissions[i + 1] };
      },
    );
  };
};

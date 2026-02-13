import { useState } from 'react';
import PageSection from '../../components/layout/PageSection';
import AdminRouteGuard from '../../components/auth/AdminRouteGuard';
import LoginButton from '../../components/auth/LoginButton';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useGetAllSubmissions } from '../../hooks/useAdminInquiries';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Mail, Phone, User, MessageSquare, Calendar } from 'lucide-react';
import type { ContactSubmission } from '../../backend';

export default function AdminInquiriesPage() {
  useDocumentTitle('Admin - Inquiries - BuildRight Construction');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  return (
    <AdminRouteGuard>
      <div>
        <PageSection className="bg-muted/30">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Contact Inquiries</h1>
              <p className="text-muted-foreground">View and manage customer inquiries</p>
            </div>
            <LoginButton />
          </div>
        </PageSection>

        <PageSection>
          <InquiriesList
            selectedSubmission={selectedSubmission}
            onSelectSubmission={setSelectedSubmission}
          />
        </PageSection>
      </div>
    </AdminRouteGuard>
  );
}

interface InquiriesListProps {
  selectedSubmission: ContactSubmission | null;
  onSelectSubmission: (submission: ContactSubmission | null) => void;
}

function InquiriesList({ selectedSubmission, onSelectSubmission }: InquiriesListProps) {
  const { data: submissions, isLoading, isError } = useGetAllSubmissions();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading inquiries...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant="destructive">
        <AlertDescription>Failed to load inquiries. Please try again.</AlertDescription>
      </Alert>
    );
  }

  if (!submissions || submissions.length === 0) {
    return (
      <Alert>
        <AlertDescription>No inquiries yet. Check back later.</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* List */}
      <div className="lg:col-span-2 space-y-3">
        <h2 className="text-xl font-semibold mb-4">All Inquiries ({submissions.length})</h2>
        <div className="space-y-3">
          {submissions.map((submission, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all hover:shadow-construction ${
                selectedSubmission === submission ? 'ring-2 ring-secondary' : ''
              }`}
              onClick={() => onSelectSubmission(submission)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{submission.name}</CardTitle>
                  <Badge variant="secondary" className="shrink-0">
                    #{index + 1}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-1">{submission.subject}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span className="truncate">{submission.email}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detail */}
      <div className="lg:col-span-3">
        {selectedSubmission ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Inquiry Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span className="font-medium">Name</span>
                  </div>
                  <p className="text-sm">{selectedSubmission.name}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="font-medium">Email</span>
                  </div>
                  <p className="text-sm">{selectedSubmission.email}</p>
                </div>

                {selectedSubmission.phone && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span className="font-medium">Phone</span>
                    </div>
                    <p className="text-sm">{selectedSubmission.phone}</p>
                  </div>
                )}

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageSquare className="h-4 w-4" />
                    <span className="font-medium">Subject</span>
                  </div>
                  <p className="text-sm">{selectedSubmission.subject}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                  <MessageSquare className="h-4 w-4" />
                  <span>Message</span>
                </div>
                <div className="rounded-sm bg-muted/50 p-4">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{selectedSubmission.message}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              Select an inquiry to view details
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}


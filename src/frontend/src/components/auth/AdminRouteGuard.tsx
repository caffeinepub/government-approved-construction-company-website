import { ReactNode } from 'react';
import { useInternetIdentity } from '../../hooks/useInternetIdentity';
import { useGetCallerUserRole } from '../../hooks/useAdminInquiries';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert, Loader2 } from 'lucide-react';
import LoginButton from './LoginButton';
import { UserRole } from '../../backend';

interface AdminRouteGuardProps {
  children: ReactNode;
}

export default function AdminRouteGuard({ children }: AdminRouteGuardProps) {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: userRole, isLoading: roleLoading, isFetched } = useGetCallerUserRole();

  const isAuthenticated = !!identity;

  // Show loading state while initializing or checking role
  if (isInitializing || (isAuthenticated && roleLoading)) {
    return (
      <div className="container max-w-2xl py-16 flex items-center justify-center">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container max-w-2xl py-16">
        <Alert>
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>Authentication Required</AlertTitle>
          <AlertDescription className="mt-2 space-y-4">
            <p>You must be logged in to access the admin area.</p>
            <LoginButton />
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Authenticated but not admin
  if (isFetched && userRole !== UserRole.admin) {
    return (
      <div className="container max-w-2xl py-16">
        <Alert variant="destructive">
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>Access Denied</AlertTitle>
          <AlertDescription className="mt-2">
            <p>You do not have permission to access this area. Admin privileges are required.</p>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Authenticated and admin
  return <>{children}</>;
}


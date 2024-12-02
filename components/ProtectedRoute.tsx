'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/authentication/signin'); // Redirect to login page
    }
  }, [status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>; // Optional loading state
  }

  if (status === 'authenticated') {
    return <>{children}</>; // Render protected content
  }

  return null;
}

'use client';

import { AuthView } from '@neondatabase/auth/react';
import { useParams } from 'next/navigation';

export default function AuthPage() {
  const params = useParams();
  const pathname = params.path as 'sign-in' | 'sign-up' | 'forgot-password';

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-6">
        <AuthView pathname={pathname} />
      </div>
    </div>
  );
}

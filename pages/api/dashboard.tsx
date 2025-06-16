import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push('/');
    }
  }, [isSignedIn]);

  if (!isSignedIn) return null;

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome, {user?.firstName || 'Podcaster'}!</h1>
      <p>This is your dashboard. We'll list episodes, scripts, etc. here.</p>
    </main>
  );
}

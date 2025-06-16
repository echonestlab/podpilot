// components/Layout.tsx
import Link from 'next/link';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from '@clerk/nextjs';

export default function Layout({ children }) {
  return (
    <>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/pricing" style={{ marginRight: '1rem' }}>Pricing</Link>
        <SignedIn>
          <Link href="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button>Sign In</button>
          </SignInButton>
        </SignedOut>
      </nav>
      <div>{children}</div>
    </>
  );
}

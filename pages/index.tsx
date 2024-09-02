import { EmailNotificationsForm } from '@/components/email-notifications-form';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <EmailNotificationsForm />
    </main>
  );
}

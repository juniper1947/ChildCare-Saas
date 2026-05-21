import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Childcare Operations Cloud',
  description: 'Run your childcare center with less stress and more control.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

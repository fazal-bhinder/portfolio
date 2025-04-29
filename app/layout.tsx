import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/app/components/theme/theme-provider';
import { Navbar } from '@/app/components/navbar/navbar';
import { Footer } from '@/app/components/footer/footer';
import { Toaster } from '@/app/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'fazalsingh',
  description: 'Personal portfolio showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
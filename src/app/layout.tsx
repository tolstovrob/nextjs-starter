import type { Metadata } from 'next';
import { Rubik, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const rubikSans = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin', 'cyrillic'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Change me!',
  description: 'And this too...',
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode => (
  <html lang='en'>
    <body className={`${rubikSans.variable} ${jetbrainsMono.variable} antialiased`}>
      {children}
    </body>
  </html>
);

export default RootLayout;

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: 'Engineering Unit Converter | Precise Calculations for Engineers',
  description: 'Free online engineering unit converter with high precision calculations for length, mass, temperature, pressure, force, energy and more. Perfect for engineers, students and professionals.',
  keywords: 'engineering unit converter, unit conversion calculator, engineering calculator, metric conversion, engineering units, technical unit converter, precise unit conversion',
  openGraph: {
    title: 'Engineering Unit Converter | Precise Calculations for Engineers',
    description: 'Free online engineering unit converter with high precision calculations for all engineering disciplines',
    url: 'https://engineering-unit-converter.com',
    siteName: 'Engineering Unit Converter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Unit Converter | Precise Calculations for Engineers',
    description: 'Free online engineering unit converter with high precision calculations for all engineering disciplines',
  },
  alternates: {
    canonical: 'https://engineering-unit-converter.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured data for rich search results */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Engineering Unit Converter',
              description: 'Free online engineering unit converter with high precision calculations for length, mass, temperature, pressure, force, energy and more.',
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Any',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              featureList: [
                'High precision calculations',
                'Multiple engineering disciplines',
                'Comprehensive unit coverage',
                'User-friendly interface',
              ],
            }),
          }}
        />

      {/* Google Analytics */}
 <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q9VXWBZ8JR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q9VXWBZ8JR', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veloxpack.io'),
  title: {
    default: 'Veloxpack',
    template: '%s | Veloxpack',
  },
  description: 'Kubernetes-native media processing platform for scalable transcoding, packaging and delivery.',
  applicationName: 'Veloxpack',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://veloxpack.io',
    siteName: 'Veloxpack',
    title: 'Veloxpack',
    description: 'Kubernetes-native media processing platform for scalable transcoding, packaging and delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veloxpack',
    description: 'Kubernetes-native media processing platform for scalable transcoding, packaging and delivery.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Veloxpack',
              url: 'https://veloxpack.io',
              logo: 'https://veloxpack.io/icon.png',
              sameAs: [
                'https://github.com/veloxpack',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Veloxpack',
              url: 'https://veloxpack.io',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://veloxpack.io/api/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

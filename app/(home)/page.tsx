import HomePageClient from '@/components/home/HomePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veloxpack — Media Processing Platform',
  description:
    'Kubernetes-native solution for scalable media processing: transcode, package and deliver with enterprise reliability.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Veloxpack — Media Processing Platform',
    description:
      'Kubernetes-native solution for scalable media processing: transcode, package and deliver with enterprise reliability.',
    url: 'https://veloxpack.io/',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}

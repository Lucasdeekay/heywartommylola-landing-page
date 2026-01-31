import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import BulkProduction from '@/components/sections/BulkProduction';
import LocationsDelivery from '@/components/sections/LocationsDelivery';
import ContactOrder from '@/components/sections/ContactOrder';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Heywartommylola Liquid Products | Quality Liquid Soap & Household Products in Nigeria',
  description: 'Manufacturer of liquid soap, air freshener, hypo, Izal, shampoo, and hair cream. Bulk & souvenir production available. Nationwide delivery in Nigeria.',
  keywords: [
    'Liquid soap Nigeria',
    'Household cleaning products',
    'Bulk liquid soap supplier',
    'Souvenir liquid soap',
    'Cleaning products manufacturer Nigeria',
    'Air freshener Nigeria',
    'Hypo cleaning product',
    'Izal disinfectant',
    'Anti-dandruff shampoo Nigeria',
  ],
  openGraph: {
    title: 'Heywartommylola Liquid Products | Quality Liquid Soap & Household Products in Nigeria',
    description: 'Manufacturer of liquid soap, air freshener, hypo, Izal, shampoo, and hair cream. Bulk & souvenir production available. Nationwide delivery in Nigeria.',
    type: 'website',
    siteName: 'Heywartommylola Liquid Products',
    locale: 'en_NG',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Heywartommylola Liquid Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heywartommylola Liquid Products | Quality Liquid Soap & Household Products in Nigeria',
    description: 'Manufacturer of liquid soap, air freshener, hypo, Izal, shampoo, and hair cream. Bulk & souvenir production available. Nationwide delivery in Nigeria.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://heywartommylola.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-50">
      <Hero />
      <About />
      <Products />
      <BulkProduction />
      <LocationsDelivery />
      <ContactOrder />
      <Footer />
    </main>
  );
}

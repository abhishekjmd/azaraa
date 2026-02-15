import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ShopSection from '@/components/sections/ShopSection';

export default function ShopPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <ShopSection />
      <Footer />
    </main>
  );
}

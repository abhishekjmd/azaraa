import TopBanner from '@/components/layout/TopBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustMarkers from '@/components/sections/TrustMarkers';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import { CuratedFavorites } from '@/components/shared/ProductCard';
import NewEdits from '@/components/sections/NewEdits';
import Testimonials from '@/components/sections/Testimonials';
import ShopByCategory from '@/components/sections/ShopByCategory';
import CuratorSection from '@/components/sections/CuratorSection';
import InstagramGallery from '@/components/sections/InstagramGallery';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <TopBanner />
      <Header />
      <HeroSection />
      <TrustMarkers />
      <FeaturedCollections />
      <CuratedFavorites />
      <NewEdits />
      <Testimonials />
      <ShopByCategory />
      <CuratorSection />
      <InstagramGallery />
      <Footer />
    </main>
  );
}

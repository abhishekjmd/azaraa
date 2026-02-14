import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TrustMarkers from '@/components/sections/TrustMarkers';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import BestSellers from '@/components/sections/BestSellers';
import LatestArrivals from '@/components/sections/LatestArrivals';
import Testimonials from '@/components/sections/Testimonials';
import ShopByCategory from '@/components/sections/ShopByCategory';
import CuratorSection from '@/components/sections/CuratorSection';
import InstagramGallery from '@/components/sections/InstagramGallery';

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-[40px]">
      <Header />
      <HeroSection />
      <TrustMarkers />
      <FeaturedCollections />
      <BestSellers />
      <LatestArrivals />
      <Testimonials />
      <ShopByCategory />
      <CuratorSection />
      <InstagramGallery />
      <Footer />
    </main>
  );
}

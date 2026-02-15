import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TrustBadges from '@/components/TrustBadges'
import CartClient from '@/components/CartClient'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light  text-[#1b160d] ">
      <Header />
      <CartClient />
      <TrustBadges />
      <Footer />
    </div>
  )
}

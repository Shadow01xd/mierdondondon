import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedListings } from "@/components/featured-listings"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { BlogSection } from "@/components/blog-section"
import { Brands } from "@/components/brands"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Services />
      <FeaturedListings />
      {/*<Stats /> */}
      <WhyChooseUs />
      <Testimonials />
      <Brands />
      <ContactCTA />
      <Footer />
    </main>
  )
}


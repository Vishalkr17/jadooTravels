import Book from "@/components/Book";
import Category from "@/components/Category";
import Destination from "@/components/Destinations";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Subscribe from "@/components/Subscribe";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Category />
      <Destination />
      <Book />
      <Testimonials />
      <Partners />
      <Subscribe />
      <Footer />
    </main>
  );
}

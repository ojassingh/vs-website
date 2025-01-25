import Hero from "@/components/hero";
// import Logos from "@/components/logos";
import Team from "@/components/team";
import Navbar from "@/components/navbar";
import grain from "@/../public/grain.jpg";
import Services from "@/components/services";
// import LinearCards from "@/components/linear";
import Customers from "@/components/customers";
import Blog from "@/components/blog";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl">
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${grain.src})`,
        }}
      ></div>
      <Navbar />
      <Hero />
      <Services />
      {/* <LinearCards/> */}
      <Team />
      <Customers />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

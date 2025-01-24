import Hero from "@/components/hero";
// import Logos from "@/components/logos";
import Team from "@/components/team";
import Navbar from "@/components/navbar";
import grain from "@/../public/grain.jpg";
import Services from "@/components/services";
// import LinearCards from "@/components/linear";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
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
    </div>
  );
}

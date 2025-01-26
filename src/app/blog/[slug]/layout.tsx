import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <Navbar />
      <div className="mx-auto min-h-screen max-w-3xl pt-24 px-6 sm:px-0">{children}</div>
      <div className="mx-auto max-w-5xl">
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

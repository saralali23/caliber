import { Gallery } from "@/components/gallery";
import { Home } from "@/components/home";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-base-100 h-full w-full scroll-smooth">
        <Home />
        <div className="max-w-6xl mx-auto w-[90%]">
          <Services />
          <Gallery />
        </div>
      </main>
    </>
  );
}

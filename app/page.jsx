import { Reviews } from "@/components/Reviews";
import { Gallery } from "@/components/gallery";
import { Home } from "@/components/home";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full scroll-smooth">
        <Home />
        <div className="max-w-6xl mx-auto w-[90%]">
          <Services />
        </div>
        <div className="bg-base-200">
          <div className="max-w-6xl mx-auto w-[90%]">
            <Gallery />
          </div>
        </div>
        <div className="max-w-6xl mx-auto w-[90%]">
          <Reviews />
        </div>
      </main>
    </>
  );
}

import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Home } from "@/components/home";
import { Navbar } from "@/components/navbar";
import { Services } from "@/components/services";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="h-full w-full">
        <Home />
        <div className="max-w-6xl mx-auto w-[90%] scroll-end" id="services">
          <Services />
        </div>
        <div className="bg-base-200 scroll-end" id="gallery">
          <div className="max-w-6xl mx-auto w-[90%]">
            <Gallery />
          </div>
        </div>
        <div className="max-w-6xl mx-auto w-[90%] scroll-end" id="reviews">
          <Reviews />
        </div>
        <div className="bg-base-200 scroll-end" id="contact">
          <div className="max-w-6xl mx-auto w-[90%]">
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

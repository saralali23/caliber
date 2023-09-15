import { Home } from "@/components/home";
import { Navbar } from "@/components/navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-base-100 h-full w-full">
        <Home />
        <div className="max-w-6xl mx-auto w-[90%]"></div>
      </main>
    </>
  );
}

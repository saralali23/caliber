import { Home } from "@/components/home";
import { Navbar } from "@/components/navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-base-300 h-full w-full">
        <Home />
      </main>
    </>
  );
}

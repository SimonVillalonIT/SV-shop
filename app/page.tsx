import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";

export default function Home() {
  return (
    <main className="flex flex-col relative flex-1 min-h-screen px-16 pt-8 bg-background font-sans antialiased bg-no-repeat bg-cover bg-[url('/bg.svg')]">
      <Navbar />
      <Hero />
      <aside className="absolute bottom-8 flex flex-col justify-between h-72 font-light">
        <p style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}>
          Privacy Polices
        </p>
        <p style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}>
          Terms & Conditions
        </p>
      </aside>
    </main>
  );
}

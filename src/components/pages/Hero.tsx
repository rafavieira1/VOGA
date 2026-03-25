import heroImage from "@/assets/heroupscale.avif";

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden">
      <img
        src={heroImage}
        alt="VOGA"
        className="w-full h-full object-cover object-[48%_center] lg:object-center"
      />
    </section>
  );
}

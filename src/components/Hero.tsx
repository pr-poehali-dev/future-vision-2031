import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/cb5486ec-6f9a-4b60-a5f3-66297f6ecb71.jpg"
          alt="Северный пейзаж Кольского полуострова"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: "linear-gradient(to bottom, rgba(160, 30, 80, 0.25) 0%, rgba(30, 60, 140, 0.2) 40%, rgba(0,0,0,0.4) 100%)"}} />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Мурманская область</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          КОЛЬСКИЙ
          <br />
          ПОЛУОСТРОВ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Экскурсии и туры по самым диким и красивым местам русского Севера — от 1 дня до недели
        </p>
        <a
          href="#tours"
          className="inline-block mt-8 bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-medium hover:bg-neutral-200 transition-colors duration-300"
        >
          Выбрать тур
        </a>
      </div>
    </div>
  );
}
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
          src="https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/9a9de05d-9539-432c-a7e8-3192c25ebe3b.jpg"
          alt="Северный пейзаж Кольского полуострова"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <p className="text-sm uppercase tracking-widest mb-4 opacity-80">Мурманская область</p>
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 cursor-default select-none"
          whileHover={{
            letterSpacing: "0.08em",
            textShadow: "0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(180,210,255,0.4)",
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        >
          КОЛЬСКИЙ
          <br />
          ПОЛУОСТРОВ
        </motion.h1>
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
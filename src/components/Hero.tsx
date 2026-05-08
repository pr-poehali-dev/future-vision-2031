import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useState } from "react";

function MagneticLetter({ char }: { char: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useSpring(0, { stiffness: 200, damping: 15 });
  const y = useSpring(0, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const radius = 80;
    if (dist < radius) {
      const force = (1 - dist / radius) * 30;
      x.set((-dx / dist) * force);
      y.set((-dy / dist) * force);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.span
      ref={ref}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        textShadow: hovered
          ? "0 1px 0 rgba(255,255,255,0.5), 0 2px 0 rgba(200,220,255,0.3), 0 3px 0 rgba(150,190,255,0.2), 0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(160,200,255,0.4)"
          : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      {char}
    </motion.span>
  );
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  const line1 = "КОЛЬСКИЙ";
  const line2 = "ПОЛУОСТРОВ";

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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 cursor-default select-none leading-tight">
          <div>{line1.split("").map((char, i) => <MagneticLetter key={i} char={char} />)}</div>
          <div>{line2.split("").map((char, i) => <MagneticLetter key={i} char={char} />)}</div>
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
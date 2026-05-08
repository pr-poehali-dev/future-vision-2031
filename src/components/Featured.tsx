import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tours = [
  {
    label: "Териберка",
    description: "Край земли — дикое побережье Баренцева моря, заброшенный посёлок и китовые кости на берегу.",
    image: "https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/b7fa9a15-507f-423f-9019-1c8d41decfbd.jpg",
  },
  {
    label: "Хибины",
    description: "Горный массив в центре Кольского — треккинг, перевалы и панорамы, которые остаются с тобой навсегда.",
    image: "https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/980bf15c-b16d-4b46-886f-3e51382c5188.jpg",
  },
  {
    label: "Сейдозеро",
    description: "Священное озеро Ловозерских тундр — загадочные наскальные изображения и первозданная тишина.",
    image: "https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/dd41180f-7608-4d1f-9ec8-7acd5db5ac45.jpg",
  },
  {
    label: "Полуостров Рыбачий",
    description: "Самая северная точка материковой России — суровые скалы, арктические шторма и абсолютная свобода.",
    image: "https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/5e1b3d91-8294-4b6f-87d7-99b2467e0601.jpg",
  },
  {
    label: "Северное сияние",
    description: "Охота на полярное сияние в самых тёмных и безлюдных местах Мурманской области.",
    image: "https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/d2280b53-3606-4ef0-b899-89fd9b48030d.jpg",
  },
  {
    label: "Айсфлоатинг",
    description: "Дрейф на льдинах в гидрокостюме — незабываемый арктический экстрим прямо среди льдов.",
    image: "https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/f38371a1-6e2c-4692-a816-6957e0061c84.jpg",
  },
  {
    label: "Рыбалка",
    description: "Сёмга, форель, треска — рыбалка на диких реках и в Баренцевом море для настоящих рыбаков.",
    image: "https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/36a8c6ae-e2c6-4b98-bd7e-e3b78a508871.jpg",
  },
  {
    label: "Сейды и лабиринты",
    description: "Древние мегалиты, дольмены и каменные лабиринты — следы цивилизаций, живших здесь тысячи лет назад.",
    image: "https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/1cd5a952-3b3b40d9-a0e7-965a511beb2e.jpg",
  },
];

export default function Featured() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % tours.length);
        setVisible(true);
      }, 1200);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0" style={{background: "linear-gradient(to bottom right, #ffffff 0%, #404040 100%)"}} id="tours">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={tours[active].image}
            alt={tours[active].label}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Групповые и индивидуальные туры</h3>

        <motion.div
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
            {tours[active].description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tours.map((tour, i) => (
              <button
                key={tour.label}
                onClick={() => { setVisible(false); setTimeout(() => { setActive(i); setVisible(true); }, 1200); }}
                className={`px-3 py-1 text-xs uppercase tracking-wide border cursor-pointer transition-all duration-700 ease-in-out ${
                  active === i
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-neutral-700 border-neutral-300 hover:border-neutral-600"
                }`}
              >
                {tour.label}
              </button>
            ))}
          </div>
        </motion.div>

        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Все маршруты
        </button>
      </div>
    </div>
  );
}
export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/f27d1b28-413b-4023-9082-619013cf6dd9/files/a8b4d3f3-9d84-4f14-9fe7-fd2fb68c53de.jpg"
          alt="Туристы в Хибинах"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="tours">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Групповые и индивидуальные туры</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Териберка, Хибины, Сейдозеро, полуостров Рыбачий, Лиинахамари, охота на Северное сияние — каждый маршрут ведёт туда, куда редко ступает нога туриста.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {["1 день", "2–7 дней", "Рыбалка", "Дайвинг", "Айсфлоатинг", "Сейды и лабиринты"].map((tag) => (
            <span key={tag} className="border border-neutral-300 text-neutral-700 px-3 py-1 text-xs uppercase tracking-wide">{tag}</span>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Все маршруты
        </button>
      </div>
    </div>
  );
}
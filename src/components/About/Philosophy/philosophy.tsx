const Philosophy = () => {
  return (
    <section className="relative bg-black overflow-x-hidden">
      <div className="max-w-8xl mx-auto px-5 sm:px-6 py-16 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

          {/* LEFT — Heading */}
          <div className="flex lg:items-end">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.2] font-medium text-white max-w-full lg:max-w-[520px]">
              A disciplined approach to residential decision-making.
            </h2>
          </div>

          {/* RIGHT — Body */}
          <div>
            <p className="text-base sm:text-lg leading-[1.65] text-white/80 max-w-full lg:max-w-[560px]">
              We believe meaningful real estate decisions are built on understanding,
              not momentum. Our advisory process emphasizes long-term value, market
              fundamentals, and thoughtful timing to ensure decisions remain sound
              beyond the transaction itself.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;

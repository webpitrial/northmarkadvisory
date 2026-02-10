import { Icon } from "@iconify/react";

const Focus = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black">
      <div className="max-w-8xl mx-auto px-6 py-20">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* LEFT — Heading */}
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-medium leading-tight text-dark dark:text-white">
              What we focus on
            </h2>

            <p className="mt-4 text-base md:text-lg text-dark/70 dark:text-white/70 max-w-md">
              Our advisory work is centered around clarity, timing, and long-term
              residential value not volume or speculation.
            </p>
          </div>

          {/* RIGHT — Points */}
          <div className="md:col-span-7">
            <ul className="space-y-6">

              {/* Item */}
              <li className="flex items-start gap-4">
                <span className="mt-1 text-dark dark:text-white">
                  <Icon
                    icon="solar:check-circle-linear"
                    width={22}
                    height={22}
                  />
                </span>
                <p className="text-base md:text-lg text-dark/80 dark:text-white/80 leading-relaxed">
                  Residential market fundamentals, pricing discipline, and
                  location-specific insight.
                </p>
              </li>

              {/* Item */}
              <li className="flex items-start gap-4">
                <span className="mt-1 text-dark dark:text-white">
                  <Icon
                    icon="solar:check-circle-linear"
                    width={22}
                    height={22}
                  />
                </span>
                <p className="text-base md:text-lg text-dark/80 dark:text-white/80 leading-relaxed">
                  Buyer representation and acquisition strategy in competitive
                  Vancouver neighborhoods.
                </p>
              </li>

              {/* Item */}
              <li className="flex items-start gap-4">
                <span className="mt-1 text-dark dark:text-white">
                  <Icon
                    icon="solar:check-circle-linear"
                    width={22}
                    height={22}
                  />
                </span>
                <p className="text-base md:text-lg text-dark/80 dark:text-white/80 leading-relaxed">
                  Long-term suitability aligning property decisions with
                  lifestyle, liquidity, and future optionality.
                </p>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Focus;

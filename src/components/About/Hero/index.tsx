import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0B0F14]">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-16 lg:py-12 items-center">

          {/* TEXT */}
          <div>
            <p className="text-sm uppercase tracking-widest font-semibold text-[#3F4854] dark:text-white/60">
              About Northmark Advisory
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl lg:text-[52px] font-medium leading-[1.15] text-[#0E141B] dark:text-white max-w-xl">
              A considered approach to real estate investment
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-[1.6] text-[#3F4854] dark:text-white/70">
              Northmark Advisory is a Vancouver-based real estate advisory firm
              focused on guiding real estate investment decisions with clarity,
              discretion, and long-term perspective.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-start lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/10 dark:ring-white/10">
              <Image
                src="/images/hero/about-hero-rs.jpg"
                alt="Downtown Vancouver streetscape"
                fill
                className="object-cover saturate-[0.95] contrast-[1.03]"
                sizes="(min-width: 1024px) 460px, 100vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

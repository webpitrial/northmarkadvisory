import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#F6F7F8] dark:bg-[#0B0F14]">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.35),_transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-8">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl px-8 py-14 md:px-14 md:py-20 shadow-xl dark:shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT — COPY */}
            <div className="lg:col-span-7">
              <p className="text-sm uppercase tracking-widest font-semibold text-[#3F4854] dark:text-white/60">
                Start with clarity
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] font-medium text-[#0E141B] dark:text-white max-w-xl">
                Make your next real estate decision with confidence.
              </h2>

              <p className="mt-6 text-lg leading-[1.65] text-[#3F4854] dark:text-white/70 max-w-xl">
                Whether you’re evaluating a residential or investment opportunity,
                we bring structure, perspective, and long-term thinking to decisions
                that matter.
              </p>
            </div>

            {/* RIGHT — ACTION */}
            <div className="lg:col-span-5 flex lg:justify-end">
              <div className="flex flex-col gap-5 w-full max-w-sm">

                <Link
                  href="/contactus"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0E141B] dark:bg-white px-10 py-5 text-base font-semibold text-white dark:text-[#0E141B] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                >
                  Start a conversation
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <p className="text-sm text-[#3F4854]/70 dark:text-white/50 text-center lg:text-left">
                  Discreet, confidential, and obligation-free.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

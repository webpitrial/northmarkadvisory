import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react"
import { FooterLinks } from "@/app/api/footerlinks";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-dark">
      <div className="container mx-auto max-w-8xl pt-14 px-4 sm:px-6 lg:px-0">
        <div className="flex lg:items-center justify-between items-end lg:gap-11 pb-14 border-b border-white/10 lg:flex-nowrap flex-wrap gap-6">
          <p className="text-white text-sm lg:max-w-1/5">
            Occasional insights, select opportunities, and market clarity delivered discreetly.
          </p>        
          <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-3">
            <div className="flex gap-2 lg:order-1 order-2">
              <input type="email" placeholder="Enter Your Email" className="rounded-full py-4 px-6 bg-white/10 placeholder:text-white text-white focus-visible:outline-white-2" />
              <button className="bg-white text-base font-semibold py-4 px-8 rounded-full text-dark hover:bg-white/80 hover:text-dark/80 duration-300 hover:cursor-pointer">
                Subscribe
              </button>
            </div>
            <p className="text-white/40 text-sm lg:max-w-[45%] order-1 lg:order-2">
              By subscribing, you agree to receive our promotional emails. You can unsubscribe  at any time.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#">
              <Icon icon="ph:x-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="#">
              <Icon icon="ph:facebook-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
            <Link href="#">
              <Icon icon="ph:instagram-logo-bold" width={24} height={24} className="text-white hover:text-primary duration-300" />
            </Link>
          </div>
        </div>
        <div className="py-16 border-b border-white/10">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-6">
            <div className="md:col-span-7 col-span-12">
              <div className="mb-6">
                <Link href="/" aria-label="Go to homepage">
                  <Image
                    src="/images/header/logo.svg"
                    alt="Northmark Advisory"
                    width={180}
                    height={52}
                    className="opacity-90 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                  />
                </Link>
              </div>
              <h2 className="text-white leading-[1.2] text-40 font-medium mb-6 lg:max-w-3/4">
                Make your next real estate decision with confidence.
              </h2>
              <p className="mt-4 text-white/60 text-sm mb-10 max-w-[420px] leading-relaxed">
                A Vancouver-based real estate advisory focused on clarity, discretion, and long-term value.
              </p>
              <Link href="/contactus" className="bg-white text-base font-semibold py-4 px-8 rounded-full text-dark hover:bg-white/80 hover:text-dark/80 duration-300 hover:cursor-pointer">
                Get In Touch
              </Link>
            </div>
            <div className="md:col-span-3 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 sm:col-span-6 col-span-12">
              <div className="flex flex-col gap-4 w-fit">
                {FooterLinks.slice(4, 8).map((item, index) => (
                  <div key={index}>
                    <Link href={item.href} className="text-white/40 text-xm hover:text-white">
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap items-center py-6 gap-6">
          <p className="text-white/40 text-sm ">
            ©2026 Northmark Advisory - Designed & Developed by <Link href="https://webpaitech.com/" className="hover:text-primary" target="_blanck">Webpai Tech</Link>
          </p>
          <div className="flex gap-8 items-center">
            <Link href="/privacypolicy" className="text-white/40 hover:text-primary text-sm">
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
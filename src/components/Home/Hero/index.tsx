import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:lightskyblue to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-xm font-medium'>Vancouver, British Columbia</p>
            <h1 className='text-inherit text-6xl sm:text-5xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6'>
              Exceptional residences, guided by local expertise
            </h1>
            <p className='text-inherit text-xm font-normal -tracking-wider md:max-w-45p mt-4 mb-6'>Northmark Advisory provides discreet, data-driven guidance for buyers and sellers navigating Vancouver’s most sought-after residential neighborhoods.</p>
            <div className='flex flex-col xs:flex-row justify-center md:justify-start gap-4'>
              <Link href="/contactus" className='px-8 py-4 border border-white dark:border-dark bg-white dark:bg-dark text-dark dark:text-white duration-300 dark:hover:text-dark hover:bg-transparent hover:text-white text-base font-semibold rounded-full hover:cursor-pointer'>
                Get in touch
              </Link>
            </div>
          </div>
          <div className='hidden md:block absolute -top-10 -right-10'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='Luxury residential property image'
              width={950}
              height={848}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[200px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24'>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black'>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/location.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/location-dark.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Greater Vancouver Focus
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/briefcase.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/briefcase-dark.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Advisory-Led Approach
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/residential.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/residential-dark.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Residential Specialization
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/chart.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/chart-dark.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                $25M+ Property Advised
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

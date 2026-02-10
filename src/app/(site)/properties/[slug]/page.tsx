"use client"
import React from 'react';
import { propertyHomes } from '@/app/api/propertyhomes';
import { useParams } from "next/navigation";
import { Icon } from '@iconify/react';
import { testimonials } from '@/app/api/testimonial';
import Link from 'next/link';
import Image from 'next/image';

export default function Details() {
    const { slug } = useParams();

    const item = propertyHomes.find((item) => item.slug === slug);
    return (
        <section className="!pt-44 pb-20 relative" >
            <div className="container mx-auto max-w-8xl px-5 2xl:px-0">
                <div className="grid grid-cols-12 items-end gap-6">
                    <div className="lg:col-span-8 col-span-12">
                        <h1 className='lg:text-52 text-40 font-semibold text-dark dark:text-white'>{item?.name}</h1>
                        <div className="flex gap-2.5">
                            <Icon icon="ph:map-pin" width={24} height={24} className="text-dark/50 dark:text-white/50" />
                            <p className='text-dark/50 dark:text-white/50 text-xm'>{item?.location}</p>
                        </div>
                    </div>
                    <div className="lg:col-span-4 col-span-12">
                        <div className='flex'>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 pr-2 xs:pr-4 mobile:pr-8'>
                                <Icon icon={'solar:bed-linear'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.beds} Bedrooms
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 border-e border-black/10 dark:border-white/20 px-2 xs:px-4 mobile:px-8'>
                                <Icon icon={'solar:bath-linear'} width={20} height={20} />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.baths} Bathrooms
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 pl-2 xs:pl-4 mobile:pl-8'>
                                <Icon
                                    icon={'lineicons:arrow-all-direction'}
                                    width={20}
                                    height={20}
                                />
                                <p className='text-sm mobile:text-base font-normal text-black dark:text-white'>
                                    {item?.area}m<sup>2</sup>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-8 gap-8">
                    <div className="lg:col-span-8 col-span-12 row-span-2">
                        {item?.images && item?.images[0] && (
                            <div className="">
                                <Image
                                    src={item.images[0]?.src}
                                    alt="Main Property Image"
                                    width={900}
                                    height={500}
                                    className="rounded-2xl w-full h-540"
                                    unoptimized={true}
                                />
                            </div>
                        )}
                    </div>
                    <div className="lg:col-span-4 lg:block hidden">
                        {item?.images && item?.images[1] && (
                            <Image src={item.images[1]?.src} alt="Property Image 2" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[2] && (
                            <Image src={item.images[2]?.src} alt="Property Image 3" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                    <div className="lg:col-span-2 col-span-6">
                        {item?.images && item?.images[3] && (
                            <Image src={item.images[3]?.src} alt="Property Image 4" width={400} height={500} className="rounded-2xl w-full h-full" unoptimized={true} />
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-8 mt-10">
                    <div className="lg:col-span-8 col-span-12">
                        <h3 className='text-xl font-medium'>Listing details</h3>
                        <div className="py-8 my-8 border-y border-dark/10 dark:border-white/20 flex flex-col gap-8">
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/properties/offer.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/properties/offer-dark.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Distinctive Offering</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        Thoughtfully positioned within its local market, offering a balance of design, livability, and long-term appeal.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/properties/design.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/properties/design-dark.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Interior Experience</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        Designed with comfort, natural light, and functional layouts in mind to support everyday living and entertaining.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div>
                                    <Image src="/images/properties/roi.svg" width={400} height={500} alt="" className='w-8 h-8 dark:hidden' unoptimized={true} />
                                    <Image src="/images/properties/roi-dark.svg" width={400} height={500} alt="" className='w-8 h-8 dark:block hidden' unoptimized={true} />
                                </div>
                                <div>
                                    <h3 className='text-dark dark:text-white text-xm'>Long-Term Value</h3>
                                    <p className='text-base text-dark/50 dark:text-white/50'>
                                        Aligned with long-term residential demand and lifestyle suitability, supporting both personal use and value retention.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className='text-dark dark:text-white text-xm '>
                                Designed with intention, this home emphasizes balance, flow, and natural light throughout its living spaces. The layout prioritizes comfort and usability, supporting both everyday routines and social moments.
                            </p>
                            <p className='text-dark dark:text-white text-xm '>
                                Open-plan interiors create a natural connection between key living areas, while careful spatial planning allows the home to feel both open and composed. Finishes and materials are understated, allowing the architecture and light to define the experience.
                            </p>
                            <p className='text-dark dark:text-white text-xm '>
                               Private spaces offer a sense of retreat, complementing the home’s shared areas. Overall, the residence reflects a long-term approach to living adaptable, refined, and aligned with modern residential expectations.
                            </p>
                        </div>
                        <div className="py-8 mt-8 border-t border-dark/5 dark:border-white/15">
                            <h3 className='text-xl font-medium'>What this property offers</h3>
                            <div className="grid grid-cols-3 mt-5 gap-6">
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:aperture" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Smart Home Integration</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:chart-pie-slice" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Spacious Living Areas</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:television-simple" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Energy Efficiency</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:sun" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Natural Light</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:video-camera" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Security Systems</p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Icon icon="ph:cloud" width={24} height={24} className="text-dark dark:text-white" />
                                    <p className='text-base dark:text-white text-dark'>Outdoor Spaces</p>
                                </div>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d42900.79529571374!2d-123.1886641!3d49.2700446!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDE2JzM1LjMiTiAxMjPCsDA3JzQ3LjIiVw!5e1!3m2!1sen!2sin!4v1768570157419!5m2!1sen!2sin"
                            width="1114" height="400" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-2xl w-full">
                        </iframe>
                    </div>
                    <div className="lg:col-span-4 col-span-12 text-center">
                        <div className="bg-dark/5 p-8 rounded-2xl relative z-10 overflow-hidden">
                            <h4 className='text-dark text-3xl font-medium dark:text-white'>
                                $ {item?.rate}
                            </h4>
                            <p className='text-sm text-dark/50 dark:text-white'>Discounted Price</p>
                            <Link href="#" className='py-4 px-8 bg-dark text-white rounded-full w-full block text-center hover:bg-dark/75 duration-300 text-base mt-8 hover:cursor-pointer'>
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

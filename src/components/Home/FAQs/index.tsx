import { Icon } from '@iconify/react';
import Image from 'next/image';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ: React.FC = () => {
    return (
        <section id='faqs'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className="grid lg:grid-cols-2 gap-10 ">
                    <div className='lg:mx-0 mx-auto'>
                        <Image
                            src="/images/faqs/faq-image.png"
                            alt='image'
                            width={680}
                            height={644}
                            className='lg:w-full'
                            unoptimized={true}
                        />
                    </div>
                    <div className='lg:px-12'>
                        <h2 className='lg:text-52 text-40 leading-[1.2] font-medium text-dark dark:text-white'>
                            FAQ's
                        </h2>
                        <div className="my-8">
                            <Accordion type="single" defaultValue="item-1" collapsible className="w-full flex flex-col gap-6">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. How is Northmark Advisory different from a traditional brokerage?</AccordionTrigger>
                                    <AccordionContent>
                                        Northmark Advisory operates with an advisory-first mindset. We prioritize clarity, timing, and long-term suitability over transaction volume, helping clients make decisions that remain sound well beyond closing.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. How involved are you throughout the process?</AccordionTrigger>
                                    <AccordionContent>
                                        We remain closely involved from initial assessment through final decision-making. Our role is to provide structure, insight, and objective perspective ensuring decisions are made with confidence, not pressure.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Do you work with first-time buyers?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. We work with both first-time buyers and experienced investors. Our process adapts to each client&apos;s level of experience while maintaining the same disciplined, thoughtful approach.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. What does Northmark Advisory specialize in?</AccordionTrigger>
                                    <AccordionContent>
                                        We advise on residential and investment real estate decisions with a focus on long-term value, market fundamentals, and thoughtful timing. Our role is to bring clarity where the market often creates noise.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>5. How do you assess a property&apos;s long-term suitability?</AccordionTrigger>
                                    <AccordionContent>
                                        We evaluate livability, liquidity, location fundamentals, and future optionality not just surface-level appeal.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default FAQ;
    
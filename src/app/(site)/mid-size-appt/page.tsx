import HeroSub from "@/components/shared/HeroSub";
import MidSizeAppt from "@/components/Properties/Residential";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | Northmark Advisory",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Mid-sized Appartments"
                description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
                badge="Properties"
            />
            <MidSizeAppt />
        </>
    );
};

export default page;
import HeroSub from "@/components/shared/HeroSub";
import LuxuryAppt from "@/components/Properties/LuxuryAppt";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | Northmark Advisory",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Luxury Appartments"
                description="Experience elegance and comfort with our exclusive luxury appartment listings."
                badge="Properties"
            />
            <LuxuryAppt />
        </>
    );
};

export default page;
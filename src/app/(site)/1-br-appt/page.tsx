import HeroSub from "@/components/shared/HeroSub";
import SmallAppt from "@/components/Properties/1-br-appt";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Property List | Northmark Advisory",
};

const page = () => {
    return (
        <>
            <HeroSub
                title="Small Apartments."
                description="Experience elegance and comfort with our exclusive luxury  villas, designed for sophisticated living."
                badge="Properties"
            />
            <SmallAppt />
        </>
    );
};

export default page;
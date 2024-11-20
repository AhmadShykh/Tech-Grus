import React, { useState } from 'react';

import {PricingCard} from "../Components/PricingCard";
import {RoundedButton} from "../Components/RoundedButton";

export const PricingCards = () => {

    // State to track the active section (0 for first, 1 for second, 2 for third)
    const [activeSection, setActiveSection] = useState(0);

    // Array of section data (for simplicity, using just a length of 3 sections)
    const sections = [
        <div className="justify-start items-center gap-[54px] inline-flex">
            <PricingCard />
            <PricingCard />
            <PricingCard isHighlighted={true} height="700px" />
        </div>,
        <div className="justify-start items-center gap-[54px] inline-flex">
            <PricingCard />
            <PricingCard isHighlighted={true} height="700px"/>
            <PricingCard  />
        </div>,
        <div className="justify-start items-center gap-[54px] inline-flex">
            <PricingCard isHighlighted={true} height="700px"/>
            <PricingCard />
            <PricingCard  />
        </div>
    ];

    return (
        <>
            <div className="my-20 w-full relative justify-center flex-col items-center flex">
                <div className="w-full flex justify-center items-center relative">

                    <div
                        className="p-[3px] justify-center w-[22.03%] rounded-2xl flex flex-wrap items-center gap-[5px] inline-flex">
                        <RoundedButton width="auto" text="Website"  isSelected={activeSection === 0 }  onClick={() => setActiveSection(0)}/>
                        <RoundedButton width="auto" text="Mobile App"  isSelected={activeSection === 1 }
                                       onClick={() => setActiveSection(1)}/>
                        <RoundedButton text="Website & Mobile App"  isSelected={activeSection === 2 }  width="100%"
                                       onClick={() => setActiveSection(2)}/>
                    </div>
                    <div
                        className="absolute right-6 -bottom-2 flex-col justify-start items-start gap-[5px] flex">
                        <div
                            className="  items-center gap-[11px] inline-flex">
                            <h2 className="text-white text-xl font-bold font-inter">One Time Payment
                            </h2>
                            <div className="">
                                <div
                                    className="w-[61.60px] h-[30.80px]  bg-[#3773bb]/25 rounded-[68.20px] justify-end items-center  flex">
                                    <div className="w-[26.40px] h-[26.40px] relative bg-white rounded-[49.50px]"/>
                                </div>
                            </div>
                        </div>
                        <div className="text-white/50 text-base font-normal font-['Anek Gurmukhi'] leading-none">Contact
                            us
                            for other<br/>payment plans/segmentation.
                        </div>
                    </div>
                </div>
                <div className="mt-10 carousel-sections-container">
                    <div
                        className="carousel-sections"
                        style={{
                            transform: `translateX(-${activeSection * 100}%)`, // This controls the slide movement
                            transition: 'transform 0.3s ease-in-out', // Smooth transition for sliding
                        }}
                    >
                        {sections.map((section, index) => (
                            <div key={index} className="carousel-section">
                                {section}
                            </div>
                        ))}
                    </div>
                </div>
                {/*<div className="mt-20 justify-start items-center gap-[54px] inline-flex">*/}
                {/*    <div className="justify-start items-center gap-[54px] inline-flex">*/}
                {/*        <PricingCard/>*/}
                {/*        <PricingCard/>*/}
                {/*        <PricingCard isHighlighted={true} height="700px"/>*/}
                {/*    </div>*/}

                {/*</div>*/}
                <div className="w-[54%] mt-5">
                    <div className="flex flex-col items-center gap-6">
                        {/* Icon Container */}
                        <div className="flex gap-6">
                            {[
                                {size: "44px x 44px", url: "/images/FigmaLogo.svg"},
                                {size: "44px x 44px", url: "/images/ClickupLogo.svg"},
                                {size: "44px x 34px", url: "/images/GoogleDriveLogo.svg"},
                                {size: "44px x 44px", url: "/images/WhatsappLogo.svg"},
                            ].map(({size, url}, index) => {
                                const [width, height] = size.split(" x ");
                                return (
                                    <div
                                        key={index}
                                        className="w-15 p-2.5 h-15 bg-white/10 rounded-full flex justify-center items-center"
                                    >
                                        <img
                                            src={url}
                                            alt={`Icon ${index + 1}`}
                                            className="relative"
                                            style={{width, height}}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Text Section */}
                        <div className="text-center text-lg font-anek-gurmukhi text-white">
                            <p>
                                For a more customized solution and pricing,{" "}
                                <span className="font-semibold">contact us</span>.<br/> You can pay your OTP (One Time
                                Payment)
                                invoices in{" "}
                                <span className="underline">up to 4 quarters</span> depending on your preference.
                            </p>
                            <p className="text-white/50 mt-5">
                                * For projects (less than 900 USD), at least 50% of the invoice should be paid before
                                project initialization, while 900 USD+ shall be initialized after at least 25% of the
                                invoice.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="px-[50px] mt-6 py-3 inline-flex bg-white/5 rounded-xl ">
                    <div className="text-white  text-[22px] font-normal font-anek-gurmukhi">Explore On Going
                        Improvement Plans
                    </div>
                    <img src="/images/arrow-down.svg"
                         className="ml-3.5 w-[25px] h-[25px] pt-0.5 flex-col justify-center items-center gap-2.5 inline-flex"/>
                </div>

            </div>
        </>
    )
}

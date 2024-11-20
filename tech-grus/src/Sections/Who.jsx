import React from 'react';
import {SectionName} from "../Components/SectionName";
import {JoinedButtons} from "../Components/JoinedButtons";

const Who = () => {
    return (
        <section className="w-full flex justify-center mt-28 mb-20 items-center relative">
            <div className="w-[89%] justify-between items-center inline-flex ">
                <div className="flex-col justify-start items-center gap-[30px] inline-flex">
                    <SectionName text="Who" color="#1a1c2b" fontSize="210" height="164"/>
                    <div className="px-10 text-white/70 text-[22px] font-light font-anek-gurmukhi">
                        <p>At techgrus we aim to make and create websites and apps that actually make a difference because this is sample text. We are in your mind.</p>
                    </div>
                    <JoinedButtons scndBtnTxt="About Us"/>
                </div>
                <div className="flex-col pl-16 gap-y-8 inline-flex font-anek-gurmukhi">
                    <div >
                        <p className="text-white text-2xl">
                            We offer design and
                            <span className="bold-span-text"> development </span>
                            services that enable
                            <span className="bold-span-text"> Restaurants </span>
                            to attract new customers and grow at an incredible pace.
                        </p>
                    </div>
                    <div >
                        <p className="text-white text-2xl">

                            Why choose and
                            <span className="bold-span-text"> TechGrus </span>
                            over that enable
                            <span  className="bold-span-text"> other </span>
                            to attract new customers and grow at an incredible pace.

                        </p>

                    </div>
                </div>
            </div>



        </section>
    );
};

export default Who;

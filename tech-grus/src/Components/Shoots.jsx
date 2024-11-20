import {SectionName} from "./SectionName";
import React from "react";
import {Button} from "./Button";

export const Shoots = () => {
    return (
        <>
            <div

                className="w-full items-center  overflow-clip relative h-[470px] p-10 pb-[50px] rounded-[12.80px] shadow  flex-col inline-flex">
                <img
                    alt="default text"
                    style={{maxWidth: `150%`, height: 'auto'}}
                    className=" -top-40 left-0 absolute shadow"
                    src="/images/image-4.png"
                    />
                <div className="w-[410px] h-full z-10 items-center flex flex-col text-center content-center justify-between ">

                    <div className="flex-col gap-[12px] flex">
                        <SectionName text="Shoots" color="white" fontSize="64" height="74"/>
                        <div className="leading-[26.4px] text-white/70 text-[22px] font-normal font-anek-gurmukhi">
                            <p>
                                At techgrus we aim to make and create websites and apps that actually make a difference
                                because this is sample text. We are in your mind.
                            </p>
                        </div>
                        <div
                            className="w-[414px] flex flex-wrap overflow-hidden justify-center items-center gap-1.5">
                            <Button text={"Coffee"}/>
                            <Button text={"Apparel"}/>
                            <Button text={"Food & Restaurant"}/>
                            <Button text={"Brand Presence"}/>
                            <Button text={"Product Shoots"}/>

                        </div>
                    </div>

                    <div className="flex-col  gap-[15px] mt-6 flex">
                        <div
                            className="px-5 py-2 bg-[#020519] rounded-[999px] shadow border border-white/60 ">
                            <a href="#"
                                className="text-white text-[15px] font-semibold font-inter leading-snug">
                                Click
                                to Explore Plans
                            </a>
                        </div>

                        <div className="gap-2 inline-flex justify-center ">
                            <p className="text-white/70 text-[22px] font-normal font-anek-gurmukhi">
                                View Our Design Portfolio
                            </p>
                            <img alt="default text" src="/images/right-arrow.svg" className="mb-2 w-5 h-auto text-white"/>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

import React from "react";
import {SectionName} from "./SectionName";


export const FieldCard = ({title,description,imgName,btn,width, top, left}) => {
    return (
        <>
            <div

                className="md:w-[100%] lg:w-[562px] w-[562px]  overflow-clip relative h-[470px] p-10 pb-[50px] rounded-[12.80px] shadow  flex-col inline-flex">
                <img
                    style={{ maxWidth: `${width}%`, height: 'auto', top: `${top}px` , left: `${left}px`}}
                    className="  absolute shadow"
                     src={`/images/${imgName}.png`}/>
                <div className=" h-full z-10 items-center flex flex-col justify-between ">

                    <div className="flex-col gap-[25px] flex">
                        <SectionName text={title} color="white" fontSize="64" height="74"/>
                        <div className="leading-[26.4px] text-white/70 text-[22px] font-normal font-anek-gurmukhi">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex-col items-start gap-[15px] mt-auto flex">
                        <div
                            className="px-5 py-2 bg-[#020519] rounded-[999px] shadow border border-white/60 ">
                            <p
                                className="text-white text-[15px] font-semibold font-inter leading-snug">
                                Click
                                to Explore Plans
                            </p>
                        </div>

                        {btn && (

                            <div className="gap-2 inline-flex items-center ">
                                <p className="text-white/70 text-[22px] font-normal font-anek-gurmukhi">
                                    View Our Design Portfolio
                                </p>
                                <img src="/images/right-arrow.svg" className="mb-2 w-5 h-auto text-white"/>
                            </div>
                        )

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

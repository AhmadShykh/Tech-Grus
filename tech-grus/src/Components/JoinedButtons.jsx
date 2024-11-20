import React from "react";

export const JoinedButtons = ({scndBtnTxt}) => {
    return (
        <>
            <div className="inline-flex">
                <div
                    className="px-5 py-2 bg-white rounded-[999px] shadow border border-white/60 ">
                    <a className=" text-black text-[15px] font-semibold font-inter ">Read
                        More
                    </a>
                </div>
                <div
                    className="-ml-5 px-5 py-2 bg-[#020519] rounded-[999px] shadow border border-white/60 ">
                    <a className=" text-white text-[15px] font-semibold font-inter ">{scndBtnTxt}
                    </a>
                </div>
            </div>
        </>
    )
}

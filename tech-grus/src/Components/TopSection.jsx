import React from 'react';

const TopSection = () => {
    return (

        <section className="w-[1440px] h-[720px] relative">
            <img className="w-[1440px] h-[720px] left-0 top-0 absolute shadow"
                 src="/images/image-1.png"/>
            <div
                className="left-[238px] top-[262px] absolute text-center text-white text-[92px] font-normal font-['FRIZON'] leading-[92px]">Get
                your own<br/>digital existence
            </div>
            <div
                className="w-[414px] h-[81px] left-[513px] top-[489px] absolute justify-center items-center gap-[7px] inline-flex">
                <div
                    className="px-5 py-2 bg-white/0 rounded-[999px] shadow border border-white/60 backdrop-blur-[13px] justify-center items-center flex">
                    <div
                        className="text-center text-white text-sm font-semibold font-['Inter'] leading-[21px]">Designing
                    </div>
                </div>
                <div
                    className="px-5 py-2 bg-white/0 rounded-[999px] shadow border border-white/60 backdrop-blur-[13px] justify-center items-center flex">
                    <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-[21px]">Web
                        Development
                    </div>
                </div>
                <div
                    className="px-5 py-2 bg-white/0 rounded-[999px] shadow border border-white/60 backdrop-blur-[13px] justify-center items-center flex">
                    <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-[21px]">Brand
                        Presence
                    </div>
                </div>
                <div
                    className="px-5 py-2 bg-white/0 rounded-[999px] shadow border border-white/60 backdrop-blur-[13px] justify-center items-center flex">
                    <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-[21px]">App
                        Development
                    </div>
                </div>
                <div
                    className="px-5 py-2 bg-white/0 rounded-[999px] shadow border border-white/60 backdrop-blur-[13px] justify-center items-center flex">
                    <div className="text-center text-white text-sm font-semibold font-['Inter'] leading-[21px]">Product
                        Shoots
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSection;

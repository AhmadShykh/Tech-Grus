import React from 'react';
import '../assets/styles/top-section.css'
import {Button} from "../Components/Button";

const TopSection = () => {
    return (

        <section className="w-full relative">
            <div className="w-full flex flex-col relative image-container">
                <img alt="default text" className="w-full h-full left-0 top-0 absolute shadow"
                     src="/images/image-1.png"/>
                <div className="mt-20 content-center flex-grow z-10 flex flex-col justify-center items-center">

                    <div
                        className="left-[238px] top-[262px] justify-center items-center text-center text-white text-[92px] font-normal font-['FRIZON'] leading-[92px]">Get
                        your own<br/>digital existence
                    </div>
                    <div
                        className="w-[414px] mt-12 flex flex-wrap overflow-hidden justify-center items-center gap-1.5">
                        <Button text={"Web Development"}/>
                        <Button text={"App Development"}/>
                        <Button text={"Designing"}/>
                        <Button text={"Brand Presence"}/>
                        <Button text={"Product Shoots"}/>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default TopSection;

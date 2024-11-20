import {SectionName} from "./SectionName";
import {JoinedButtons} from "./JoinedButtons";

export const FourLetterSection = ({name}) => {
    return (
        <>
            <section className="w-full flex justify-center mt-28 mb-20 items-center relative">

                <div className="w-[89%] flex flex-col relative">
                    <div className="relative flex relative items-center">

                        <SectionName text={name} fontSize="210" height="220" color="#1a1c2b"/>
                        <div
                            className="  text-white/70 ml-24 mr-[3.625rem] text-[22px] font-normal font-anek-gurmukhi">At
                            techgrus we aim to make and create websites and apps that actually make a difference because this is
                            sample text. We are in your mind.
                        </div>

                    </div>
                    <div className="relative items-center flex relative">
                        <div className="w-1/2 flex flex-col gap-y-10 justify-center items-center gap-1.5">

                            <div className="w-[85%]">
                                <p className="text-white text-2xl">
                                    We offer design and
                                    <span
                                        className="bold-span-text"> development </span>
                                    services that enable
                                    <span
                                        className="bold-span-text"> Resturants </span>
                                    to attract new customers and grow at an incredible pace.

                                </p>
                            </div>
                            <JoinedButtons scndBtnTxt="Resturants"/>
                        </div>
                        <div className="w-1/2 flex flex-col gap-y-10 justify-center items-center gap-1.5">

                            <div className="w-[85%]">
                                <p className="text-white text-2xl">
                                    We offer design and
                                    <span
                                        className="bold-span-text"> development </span>
                                    services that enable
                                    <span
                                        className="bold-span-text"> Resturants </span>
                                    to attract new customers and grow at an incredible pace.

                                </p>
                            </div>
                            <JoinedButtons scndBtnTxt="Websites"/>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

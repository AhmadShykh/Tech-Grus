
import '../assets/styles/pricingcard.css'


export const PricingCard = ({isHighlighted = false,height = 'auto'}) => {
    return (
        <>
            <div
                className={`${ isHighlighted ? 'card-gradient' : ''}   px-[22px] py-[50px] rounded-[17.60px] border border-white/25 justify-start items-center gap-2.5 flex`} style={{height:height}}>
                <div className="w-[332.20px] flex-col justify-start items-start gap-[22px] inline-flex">
                    <div className="flex-col justify-start items-start gap-[19.80px] flex">
                        <div
                            className="flex-col justify-start w-full items-start gap-[19.80px] flex">
                            <div className="w-full text-white font-anek-gurmukhi justify-between items-center inline-flex">
                                <h3 className=" text-[22px] font-bold ">Bronze</h3>
                                <p
                                    className=" text-white/50 text-base font-light ">View
                                    Maintenance Plans
                                </p>
                            </div>
                            <div className="justify-center items-end font-bold inline-flex">
                                <h1 className="text-white text-[52.80px]  font-inter">235</h1>
                                <h4 className="text-white text-lg font-inter">(GBP)</h4>
                            </div>
                        </div>
                        <p
                            className="w-4/5 text-white/50 text-base font-normal font-['Anek Gurmukhi'] leading-normal">This
                            basic plan is a starting stone for businesses that have limited budgets.
                        </p>
                        <div
                            className="self-stretch px-[88px] py-[11px] bg-white/10 rounded-md shadow">
                            <h4
                                className="text-center text-white text-lg font-medium font-inter ">Discuss
                                This Plan
                            </h4>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[15px] flex">
                        <div className="items-center gap-[13.20px] inline-flex">
                            <h5 className=" text-white text-base font-bold font-anek-gurmukhi">Plan
                                Includes:
                            </h5>
                        </div>
                        <ul className="flex flex-col justify-start items-start gap-[9.90px]">
                            {[
                                "1 Pages",
                                "Online Ordering",
                                "Loyalty System",
                                "Web View App",
                                "Basic Design",
                                "Basic Contact/Input Forms",
                                "Google Web Traffic Analysis",
                            ].map((text, index) => (
                                <li key={index} className="self-stretch flex items-center gap-[13.20px]">
                                    <div className="w-[14.30px] h-[14.30px] bg-[#222222] rounded-full"></div>
                                    <span
                                        className="text-white text-base font-normal font-['Anek Gurmukhi']">{text}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export const Button = ({text}) => {
    return (
        <>
            <div
                className="px-5 py-2 bg-white/0 rounded-[999px] shadow border border-white/60 backdrop-blur-[13px] ">
                <a href="#top" className="text-center text-white text-sm font-semibold font-inter ">
                    {text}
                </a>
            </div>
        </>
    )
}

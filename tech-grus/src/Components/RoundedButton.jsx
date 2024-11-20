import React from "react";

export const RoundedButton = ({text,width,onClick, isSelected }) => {


    const bgClr = isSelected ? "white" : "rgba(255, 255, 255, 0.05)"; // White background when selected, transparent otherwise
    const clr = isSelected ? "black" : "white"; // Black text when selected, white otherwise


    return (
        <>
            <button onClick={onClick} className="px-[30px] py-[15px] rounded-2xl" style={{backgroundColor: bgClr , width:width , color:clr}}>
                <p
                    className="text-center  text-2xl font-medium font-anek-gurmukhi">{text}
                </p>
            </button>

        </>
    )
}

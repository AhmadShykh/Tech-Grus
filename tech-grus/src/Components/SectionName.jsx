import React from "react";

export const SectionName = ({text,fontSize,color,height}) => {
    return (
        <>
            <div
                className="text-center font-bold font-['Nulshock'] flex justify-center items-center"
                style=
                {{
                    fontSize: `${fontSize}px`,
                    color: color,
                    height: `${height}px`,

                }}>
                <span>{text}</span>
            </div>
        </>
    )
}

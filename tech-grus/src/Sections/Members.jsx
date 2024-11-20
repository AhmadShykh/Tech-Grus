const teamMembers = [
    { name: "Nooh Ali", role: "CEO & Business Developer", imgSrc: "/images/Team-Image-nooh.png" },
    { name: "Saleha Ali", role: "SEO Content Writer", imgSrc: "/images/Team-Image-saleha.png" },
    { name: "Hashaam Zahid", role: "CTO", imgSrc: "/images/Team-Image-hashaam.png" },
    { name: "Ahmad", role: "Developer", imgSrc: "/images/Team-Image-ahmad.png" },
    { name: "Mahnoor", role: "Graphic Designer", imgSrc: "/images/Team-Image-mahnoor.png" },
    { name: "Haris", role: "Graphic Designer", imgSrc: "/images/Team-Image-haris.png" },
    { name: "Omer", role: "Video Editor", imgSrc: "/images/Team-Image-omer.png" },
    { name: "Idrees Ali", role: "Financial Trader", imgSrc: "/images/Team-Image-idress.png" },
];
//
// const imageData = [
//     { width: 300, height: 300, left: 1034, top: 214, src: "/images/Ellipse-Image-21.png" },
//     { width: 352, height: 352, left: 427, top: 167, src: "/images/Ellipse-Image-20.png" },
//     { width: 243, height: 243, left: 803, top: 18, src: "/images/Ellipse-Image-19.png" },
//     { width: 200, height: 200, left: 0, top: 281, src: "/images/Ellipse-Image-18.png" },
//     { width: 221.5, height: 221.5, left: 203, top: 238.75, src: "/images/Ellipse-Image-17.png" },
//     { width: 164, height: 164, left: 635, top: 23, src: "/images/Ellipse-Image-16.png" },
//     { width: 131.57, height: 131.57, left: 781, top: 247.43, src: "/images/Ellipse-Image-15.png" },
//     { width: 192.44, height: 192.44, left: 1051, top: 17, src: "/images/Ellipse-Image-14.png" },
//     { width: 256, height: 256, left: 1337, top: 282, src: "/images/Ellipse-Image-6-1.png" },
//     { width: 284, height: 284, left: 1251, top: 0, src: "/images/Ellipse-Image-12.png" },
//     { width: 200.44, height: 200.44, left: 285, top: 39, src: "/images/Ellipse-Image-11.png" },
//     { width: 145, height: 145, left: 485, top: 21, src: "/images/Ellipse-Image-10.png" },
//     { width: 149, height: 149, left: 891, top: 361.5, src: "/images/Ellipse-Image-9.png" },
//     { width: 96, height: 96, left: 928, top: 260, src: "/images/Ellipse-Image-8.png" },
//     { width: 65, height: 65, left: 1018, top: 202, src: "/images/Ellipse-Image-6-1.png" },
//     { width: 77, height: 77, left: 743, top: 180, src: "/images/Ellipse-Image-6.png" },
//     { width: 77, height: 77, left: 380, top: 429, src: "/images/Ellipse-Image-6-1.png" },
//     { width: 77, height: 77, left: 176, top: 429, src: "/images/Ellipse-Image-6-1.png" },
//     { width: 125, height: 125, left: 762.5, top: 380.5, src: "/images/Ellipse-Image-6-1.png" },
//     { width: 220, height: 220, left: 61, top: 65, src: "/images/Ellipse-Image-1.png" }
// ];


export const Members = () => {
    return (
        <section className="mb-20 mt-28">
            <div className="relative w-full ">
                {/*<div className="absolute w-[1593px] h-[538px]">*/}
                {/*    {imageData.map((image, index) => (*/}
                {/*        <img*/}
                {/*            key={index}*/}
                {/*            style={{*/}
                {/*                width: image.width,*/}
                {/*                height: image.height,*/}
                {/*                left: image.left,*/}
                {/*                top: image.top,*/}
                {/*                position: 'absolute',*/}
                {/*                borderRadius: '50%' // to ensure the circle shape*/}
                {/*            }}*/}
                {/*            src={image.src}*/}
                {/*            alt={`image-${index}`}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}
                <img className="w-full h-auto" src="/images/Round Images.png" />
            </div>
            <div className="mt-16 w-full h-auto flex flex-wrap justify-center gap-6 px-4 sm:px-6 md:px-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="w-full sm:w-[274px] flex-col justify-center items-center gap-6 flex">
                        <img className="w-[200px] h-[200px] rounded-full" src={member.imgSrc} alt={member.name}/>
                        <div className="text-center">
                            <div
                                className="text-white text-[28px] font-normal font-coolvetica capitalize">{member.name}</div>
                            <div className="text-white text-[20px] font-normal font-coolvetica">{member.role}</div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

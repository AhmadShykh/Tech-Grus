import {FieldCard} from "../Components/FieldCard";
import {Shoots} from "../Components/Shoots";

export const Fields = () => {
    return (
        <>
            <section className="mt-28 mb-20">
                <div className="w-[78%] mx-auto">
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        <FieldCard imgName="image-2" title="Web"
                                   description="At techgrus we aim to make and create websites and apps that actually make a difference because this is sample text. We are in your mind."
                                   btn={true} width="150" left="-144" top="0"/>
                        <FieldCard imgName="image-3" title="App"
                                   description="At techgrus we aim to make and create websites and apps that actually make a difference because this is sample text. We are in your mind."
                                   btn={false} width="100" left="0" top="0"/>
                        <Shoots/>
                    </div>
                </div>
            </section>
        </>
    )
}

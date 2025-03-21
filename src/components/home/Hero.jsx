import React from "react";
import { Button } from "../form";

const Hero = () => {
    return (
        <div className="text-white">
            <div className="mx-auto px-4 sm:px-10 md:px-8 lg:px-16">
                <div className="flex items-center justify-center mt-[5em]">
                    <div className="hero-content text-center py-[64px]">
                        <h1 className="text-[1.5em] lg:text-[2.5em] text-center leading-none font-bold"> Revolutionizing <span className="text-primary">Academic Credentials</span> <br /> with Blockchain Technology. </h1>
                        <p className="my-3 max-w-xl mx-auto text-center text-sm lg:text-lg"> Unichain ensures instant, secure academic credential verification using Starknet and Zero-Knowledge Proofs. </p>
                        <div className="hero-cta">
                            <div className="flex items-center justify-center gap-4 mt-4 max-w-[480px] mx-auto">
                               <Button 
                                    title="For universityies"
                                    variant="primary"
                                    className="rounded-[133.333px] py-[16px]"
                               />

                               <Button 
                                    title="For employers"
                                    variant="white"
                                    className="rounded-[133.333px] py-[16px]"
                               />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
import React, { useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [open, setOpen] = useState(false);


    return (
        <nav className="navbar text-white">
            <div className="container w-full mx-auto px-4 sm:px-10 md:px-8 lg:px-16 pt-5">
                <div className="w-full flex items-center justify-between border border-stroke py-[12px] px-[16px] rounded-[20px]">
                    <div className="nav-logo">
                        <img src="/img/logo.svg" alt="Unichain" className="object-cover h-[36px]" />
                    </div>

                    <ul className="nav-links flex items-center justify-center gap-8 w-[56%] mdbelow:hidden">
                        <Navlink url="/" title="Use cases" />
                        <Navlink url="/" title="Demo" />
                        <Navlink url="/" title="Developers" />
                        <Navlink url="/" title="Our solutions" />
                    </ul>

                    <div className="nav-auth-links flex items-center justify-end gap-4 mdbelow:hidden">
                        <a href="/" className="bg-primary text-black py-[8px] px-[24px] rounded-[8px] text-sm"> Sign in </a>
                        <a href="/" className="bg-white text-black px-[24px] py-[8px] rounded-[8px] text-sm"> Verify A Degree </a>
                    </div>

                    <div className="toggle md:hidden">
                        <div className="cursor-pointer">
                            { !open ? (
                                <IoIosMenu className="text-white text-[1.5em]" onClick={() => setOpen(true)} />
                            ) : (
                                <MdClose className="text-white text-[1.5em]" onClick={() => setOpen(false)} />
                            )}
                        </div>
                    </div>
                </div>

                { open && (
                    <div className="border border-stroke py-[12px] px-[16px] rounded-[20px] md:hidden mt-[12px]">
                        <div className="py-4 px-4">
                            <ul className="nav-links flex flex-col gap-2">
                                <Navlink url="/" title="Use cases" />
                                <Navlink url="/" title="Demo" />
                                <Navlink url="/" title="Developers" />
                                <Navlink url="/" title="Our solutions" />
                            </ul>

                            <div className="nav-auth-links flex items-center justify-start gap-4 mt-[16px]">
                                <a href="/" className="bg-primary text-black py-[8px] px-[24px] rounded-[8px] text-sm"> Sign in </a>
                                <a href="/" className="bg-white text-black px-[24px] py-[8px] rounded-[8px] text-sm"> Verify A Degree </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

const Navlink = ({ url, title }) => {
    return (
        <li className="nav-link text-sm">
            <a href={url}> {title} </a>
        </li>
    )
}

export default Navbar
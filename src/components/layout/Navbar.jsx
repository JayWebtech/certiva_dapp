import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar text-white">
            <div className="container w-full mx-auto">
                <div className="w-full flex items-center justify-between border border-stroke py-[12px] px-[16px] rounded-[20px]">
                    <div className="nav-logo w-[22%]">
                        <h4 className="font-[600] text-lg"> uni<span className="text-primary">chain</span></h4>
                    </div>

                    <ul className="nav-links flex items-center justify-center gap-8 w-[56%">
                        <Navlink url="/" title="Use cases" />
                        <Navlink url="/" title="Demo" />
                        <Navlink url="/" title="Developers" />
                        <Navlink url="/" title="Our solutions" />
                    </ul>

                    <div className="nav-auth-links flex items-center justify-end gap-4 w-[22%]">
                        <a href="/" className="bg-primary text-black py-[8px] px-[24px] rounded-[8px] text-sm"> Sign in </a>
                        <a href="/" className="bg-white text-black px-[24px] py-[8px] rounded-[8px] text-sm"> Verify A Degree </a>
                    </div>
                </div>
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
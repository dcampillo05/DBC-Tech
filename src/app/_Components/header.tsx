"use client";

import { Avatar } from "flowbite-react";
import React, { useEffect, useState } from "react";



const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900)
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetID: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetID)
    }

    return (
        <div className=" shadow-sm shadow-gray-700">
            <div className="flex justify-between items-center px-4">
                <a href="/"><img src="/logo.png" alt="" width={60} height={60} /></a>

                <nav className="">
                    <ul className="flex">
                        <li className="ml-4"><a className="text-white transition-colors duration-300 hover:text-purple-500" href="">Monitor</a></li>
                        <li className="ml-4"><a className="text-white transition-colors duration-300 hover:text-purple-500" href="">Gadgets</a></li>
                        <li className="ml-4"><a className="text-white transition-colors duration-300 hover:text-purple-500" href="">Desktop</a></li>
                        <li className="ml-4"><a className="text-white transition-colors duration-300 hover:text-purple-500" href="">Hardware</a></li>
                    </ul>
                </nav>

                <div className="flex">
                    <div>
                        <input placeholder="Procurar..." type="text" className="rounded-xl outline-none text-purple-600" style={{ backgroundImage: 'url("/search.png")', backgroundPosition: '  right 10px center', backgroundSize: '20px 20px', backgroundRepeat: 'no-repeat', }} />
                    </div>

                    <div className="pl-3">
                        <button><Avatar img={"/user.png"} rounded size={30} className="pt-2" /></button>
                    </div>

                    <div className="pl-3">
                        <button><Avatar img={"/like.png"} rounded size={30} className="pt-2" /></button>
                    </div>

                    <div className="pl-3">
                        <button><Avatar img={"/shopping-cart.png"} rounded size={30} className="pt-2" /></button>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Header;
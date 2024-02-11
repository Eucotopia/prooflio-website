'use client'
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import {useState} from "react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "@/app/components/MenuOverlay";

const navLinks = [
    {
        title: 'About',
        path: "#about"
    },
    {
        title: 'Contact',
        path: "#contact"
    },
    {
        title: "Projects",
        path: "#projects"
    }
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <>
            <nav className={'fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'}>
                <div
                    className={"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"}>
                    <Link href={'/'} className={'md:text-5xl text-white text-2xl'}>LOGO</Link>
                    <div className={"menu hidden md:block md:w-auto"} id={'navbar'}>
                        <ul className={'flex md:flex-row p-4 md:p-0 md:space-x-8'}>
                            {
                                navLinks.map((item, index) => (
                                    <li key={index}>
                                        <NavLink href={item.path} title={item.title}/>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        {
                            !navbarOpen ? (
                                <button
                                    onClick={() => setNavbarOpen(true)}
                                    className={'flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'}>
                                    <Bars3Icon className={'h-5 w-5'}/></button>
                            ) : (
                                <button
                                    onClick={() => setNavbarOpen(false)}
                                    className={'flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'}>
                                    <XMarkIcon className={'h-5 w-5'}/>
                                </button>
                            )

                        }
                    </div>
                </div>
                {
                    navbarOpen && (
                        <MenuOverlay links={navLinks}/>
                    )
                }
            </nav>
        </>
    )
}
export default Navbar
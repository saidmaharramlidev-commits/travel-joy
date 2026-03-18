"use client"
import Logo from "@/public/Logo.png"
import { setNavbarStatus } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";


function Navbar() {

    const dispatch = useDispatch()
    const { navbarStatus } = useSelector((state: RootState) => state.counter)

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Tours", href: "/tours" },
        { name: "Contact", href: "/contact" },
    ];

    const pathname = usePathname()
    const router = useRouter()





    return (
        <div id="mainNavbar">
            <div id="navbarLogo-wrapper" onClick={() => router.push('/')}>
                <Image id="navbar-logo" src={Logo} alt="Logo" />

            </div>

            <div id="endpoints-navbar" className={navbarStatus ? "active" : ''}>
                {links.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`endpoint ${pathname === link.href ? 'activeLink' : ''}`}
                    >
                        {link.name}
                    </Link>
                ))}

                <Link href={'https://wa.me/994501234567'} className="endpointCta">
                    Contact us

                </Link>

            </div>

            <Link href={'https://wa.me/994501234567'} id="navbar-cta">
                Contact us

            </Link>

            <div id="navbar-menu" onClick={() => dispatch(setNavbarStatus())}>
                <IoMenu id="navbar-menu-icon" />
            </div>

        </div>
    )
}

export default Navbar
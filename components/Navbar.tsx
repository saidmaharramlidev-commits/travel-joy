"use client"
import Logo from "@/public/Logo.png"
import { setNavbarStatus } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";
import Image from "next/image"
import Link from "next/link"
import { IoMenu } from "react-icons/io5";
import { useDispatch, UseDispatch, useSelector } from "react-redux";


function Navbar() {

    const dispatch = useDispatch()
    const { navbarStatus } = useSelector((state: RootState) => state.counter)




    return (
        <div id="mainNavbar">
            <div id="navbarLogo-wrapper">
                <Image id="navbar-logo" src={Logo} alt="Logo" />

            </div>

            <div id="endpoints-navbar" className={navbarStatus ? "active" : ''}>
                <Link className="endpoint" href={"#"}>Home</Link>
                <Link className="endpoint" href={"#"}>About</Link>
                <Link className="endpoint" href={"#"}>Services</Link>
                <Link className="endpoint" href={"#"}>Tours</Link>
                <Link className="endpoint" href={"#"}>Contact</Link>

            </div>

            <div id="navbar-cta">
                Contact us

            </div>

            <div id="navbar-menu" onClick={() => dispatch(setNavbarStatus())}>
                <IoMenu id="navbar-menu-icon" />
            </div>

        </div>
    )
}

export default Navbar
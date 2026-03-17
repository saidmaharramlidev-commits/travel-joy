'use client'



import Image from "next/image"
import pic from "@/public/footerPic.png"
import Link from "next/link"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <div id="mainFooter">
            <div id="footer-content-wrapper">
                <div id="topFooter">
                    <div id="logo-wrapper-footer">
                        <Image id="logo-footer" src={pic} alt="Logo" />
                        <p><strong>Travel-Joy</strong> – is a professional and dynamic travel company that has gained the reputation of hundreds of customers in its 2 years of operation.</p>
                    </div>



                    <div className="endpoints">
                        <h1>Endpoints</h1>
                        <Link href={"/"} className="endpointLink">Home</Link>
                        <Link href={"/about"} className="endpointLink">About</Link>
                        <Link href={"/services"} className="endpointLink">Services</Link>
                        <Link href={"/tours"} className="endpointLink">Tours</Link>
                        <Link href={"/contact"} className="endpointLink">Contact</Link>


                    </div>


                    <div className="contact-things">
                        <h1>Contact</h1>
                        <p><EmailIcon />example@gmail.com</p>
                        <p><PhoneIcon />+1234567890</p>
                        <p><LocationOnIcon />Somewhere in the world</p>


                    </div>






                </div>
                <div id="bottomFooter">
                    <span>© 2026 Travel-Joy. All rights are protected.</span>
                    <div className="social-media-wrapper">
                        <Link href={'https://www.instagram.com'} className="social-media"><FaInstagram className="icons-footer" /></Link>
                        <Link href={'https://www.whatsapp.com'} className="social-media"><FaWhatsapp className="icons-footer" /></Link>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Footer
import Footer from "@/components/Footer"
import HeroOfDetails from "@/components/HeroOfDetails"
import Navbar from "@/components/Navbar"
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function page() {
    return (
        <div id="mainContactPage">
            <Navbar />
            <HeroOfDetails header="Contact" />



            <div id="container-contact">

                <div id="location-map-wrapper">
                    <iframe

                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        id="location-map"
                        src="https://www.google.com/maps?q=40.4093,49.8671&z=13&output=embed"
                    ></iframe>

                </div>

                <div id="right-contact-wrapper">

                    <h1>Contact us</h1>
                    <p>Do you have any questions? Do you want to plan a trip? Stay in touch with us!</p>


                    <div id="infos-contact-wrapper">
                        <div className="infos">
                            <h4>Email</h4>
                            <p>example@gmail.com</p>
                        </div>
                        <div className="infos">
                            <h4>Phone</h4>
                            <p>+1234567890</p>
                        </div>
                        <div className="infos">
                            <h4>Location</h4>
                            <p>Baku,Azerbaijan</p>
                        </div>
                        <div className="infos">
                            <h4>Social Media</h4>

                            <div className="social-media-wrapper-contact">
                                <Link href={'https://www.instagram.com'} className="social-media-contact center"><FaInstagram className="icons-footer-contact" /></Link>
                                <Link href={'https://www.whatsapp.com'} className="social-media-contact center"><FaWhatsapp className="icons-footer-contact" /></Link>
                            </div>

                        </div>

                    </div>

                </div>


            </div>

            <Footer />


        </div>
    )
}

export default page
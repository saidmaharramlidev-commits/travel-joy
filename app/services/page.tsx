import HeroOfDetails from "@/components/HeroOfDetails"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import pic from "@/public/aboutPic.jpg"
import { FaCheck } from "react-icons/fa";
import pic2 from "@/public/packagesBg.jpg"
import Footer from "@/components/Footer";
import Link from "next/link";



function page() {
    return (
        <div id="mainServicesPage">
            <Navbar />
            <HeroOfDetails header="Services" />

            <div id="servicesPage-container">
                <div className="firstServices-wrapper">

                    <div className="firstLeft-wrapper">
                        <div className="service-servicePage">
                            <span><FaCheck /></span>
                            <h2>Aviatickets</h2>
                            <p>Sales of airline tickets to all destinations in the world at affordable prices.</p>
                        </div>
                        <div className="service-servicePage">
                            <span><FaCheck /></span>
                            <h2>Foreign Tours</h2>
                            <p>Unforgettable trips to Turkey, Europe, Dubai, Maldives, Thailand and many other countries.</p>
                        </div>
                        <div className="service-servicePage">
                            <span><FaCheck /></span>
                            <h2>Visa Support</h2>
                            <p>Professional certificate support for Schengen, Turkey, America, England and other visas.</p>
                        </div>
                        <Link href={'https://wa.me/994501234567'} className="cta-servicesPage center">
                            Reserve Now

                        </Link>

                    </div>

                    <div className="rightServicesDiv">
                        <Image className="picOfServicesPage" src={pic} alt="Picture" />
                    </div>

                </div>

                <div className="firstServices-wrapper">

                    <div className="rightServicesDiv">
                        <Image className="picOfServicesPage" src={pic2} alt="Picture" />
                    </div>

                    <div className="firstLeft-wrapper">
                        <div className="service-servicePage">
                            <span><FaCheck /></span>
                            <h2>Insurance</h2>
                            <p>Safe and comfortable travel with travel insurance.</p>
                        </div>
                        <div className="service-servicePage">
                            <span><FaCheck /></span>
                            <h2>Group Tours</h2>
                            <p>Special group packages for traveling with friends or family.</p>
                        </div>
                        <div className="service-servicePage">
                            <span><FaCheck /></span>
                            <h2>Transport Service</h2>
                            <p>Airport – hotel – city transfer services.</p>
                        </div>

                        <div className="service-servicePage">
                            <span><FaCheck /></span>
                            <h2>Expeditions</h2>
                            <p>Busy expeditions and precautionary tours for companies.</p>
                        </div>
                        <Link href={'https://wa.me/994501234567'} className="cta-servicesPage center">
                            Reserve Now

                        </Link>

                    </div>



                </div>

            </div>

            <Footer />

        </div>
    )
}

export default page
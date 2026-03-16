import Image from "next/image"
import pic from "@/public/servicesImg2.jpg"
import { AiOutlineInsurance } from "react-icons/ai";
import { RiVisaFill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
import { FaCity } from "react-icons/fa6";



function HomeServices() {
    return (
        <div id="mainHomeServices">
            <h4 id="nameOfServices">( Services )</h4>
            <p id="textOfServices">Make every journey unforgetable</p>


            <div id="services-img-wrapper">
                <Image id="imgOfServices" src={pic} alt="Picture" />

            </div>


            <div id="services-wrapper">
                <div className="service">
                    <h1><span className="center"><IoTicketSharp className="icon-service" /></span>Aviatickets</h1>
                    <p>Sales of airline tickets to all destinations in the world at affordable prices.</p>
                </div>
                <div className="service">
                    <h1><span className="center"><FaCity className="icon-service" /></span>Foreign Tours</h1>
                    <p>Unforgettable trips to Turkey, Europe, Dubai, Maldives, Thailand and many other countries</p>
                </div>
                <div className="service">
                    <h1><span className="center"><RiVisaFill className="icon-service" /></span>Visa Support</h1>
                    <p>Professional certificate support for Schengen, Turkey, America, England and other visas.</p>
                </div>
                <div className="service">
                    <h1><span className="center"><AiOutlineInsurance className="icon-service" /></span>Insurance</h1>
                    <p>Safe and comfortable travel with travel insurance</p>
                </div>

            </div>

            <div id="service-cta" className="center">All services

            </div>

        </div>
    )
}

export default HomeServices
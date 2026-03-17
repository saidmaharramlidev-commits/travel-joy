import Footer from "@/components/Footer"
import HeroOfDetails from "@/components/HeroOfDetails"
import Navbar from "@/components/Navbar"
import pic1 from '@/public/aboutPagePic1.jpg'
import pic2 from '@/public/aboutPagePic2.webp'
import Image from "next/image"

function page() {
    return (
        <div id="mainAboutPage">
            <Navbar />
            <HeroOfDetails header="About" />


            <div id="aboutPage-wrapper">
                <div id="leftAboutPageDiv">
                    <h1>The adventure begins with Travel-joy</h1>
                    <p><strong>Travel-joy</strong> is a professional and dynamic travel company that has earned the trust of hundreds of customers over the past 5 years. Our main goal is to add unforgettable memories and valuable experiences to the lives of our customers. Throughout our activities, we adhere to the principles of quality service, transparent pricing policy and individual approach. We plan each trip in accordance with the client's wishes and budget, and offer the most suitable routes and offers.As Voyalux Travel, we offer a wide range of reliable services in the field of ticket sales, organization of external tours, visa support, group tours, insurance, transfer and corporate services. Our experienced team in the field of tourism provides support for your comfort at every stage of the trip - from planning to return. Safety, comfort and a high level of service are our main priorities for both individual and group travel. We guide our customers in a safe and comfortable manner and take them to travel safely and comfortably.</p>
                </div>
                <div className="rightAboutPageDiv">
                    <Image className="picOfAboutPage" src={pic1} alt="Picture" />
                    <Image className="picOfAboutPage" src={pic2} alt="Picture" />
                </div>

            </div>

            <Footer />


        </div>
    )
}

export default page
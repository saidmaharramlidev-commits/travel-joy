import Image from "next/image"
import pic from "@/public/aboutPic.jpg"

function HomeAbout() {
    return (
        <div id="mainHomeAbout">
            <h4 id="headerOfAbout">( About us )</h4>

            <div id="about-wrapper">
                <div id="leftAboutDiv">
                    <h1>The adventure begins with Travel-joy</h1>
                    <p><strong>Travel-joy</strong> is a professional and dynamic travel company that has earned the trust of hundreds of customers over the past 5 years. Our main goal is to add unforgettable memories and valuable experiences to the lives of our customers. Throughout our activities, we adhere to the principles of quality service, transparent pricing policy and individual approach. We plan each trip in accordance with the client's wishes and budget, and offer the most suitable routes and offers.</p>
                </div>
                <div id="rightAboutDiv">
                    <Image id="picOfAbout" src={pic} alt="Picture" />
                </div>

            </div>

        </div>
    )
}

export default HomeAbout
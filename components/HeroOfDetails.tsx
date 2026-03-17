import Image from "next/image"
import pic from "@/public/detailsHeroPIcture.jpeg"
import { FaEarthAmericas } from "react-icons/fa6";

function HeroOfDetails({ header }: {
    header: string
}) {
    return (
        <div id="mainDetailsHero">
            <Image id="pictureOfDetailsHero" src={pic} alt="HeroPicture" />

            <div id="detailsText-wrapper" className="center">
                <FaEarthAmericas />
                <p>{header}</p>

            </div>





        </div>
    )
}

export default HeroOfDetails
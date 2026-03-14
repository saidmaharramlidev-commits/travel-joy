import Image from "next/image"

import indonesia from "@/public/Indonesia.webp"
import spain from "@/public/spain2.webp"
import paris from "@/public/paris2.webp"
import germany from "@/public/germany.jpeg"
import newYork from "@/public/newyork.webp"




function HomeLocation() {
    return (
        <div id="mainLocation">
            <h4>( Location )</h4>
            <h1 id="headerOfLocation">The best locations</h1>
            <div id="places-wrapper">
                <div className="location">
                    <h1 className="nameOfLocation">Bali,Indonesia</h1>
                    <Image className="locationImg" alt="Location" src={indonesia} /></div>
                <div className="location">
                    <h1 className="nameOfLocation">Madrid,Spain</h1>
                    <Image className="locationImg" alt="Location" src={spain} /></div>
                <div className="location">
                    <h1 className="nameOfLocation">Paris,France</h1>
                    <Image className="locationImg" alt="Location" src={paris} /></div>
                <div className="location">
                    <h1 className="nameOfLocation">Berlin,Germany</h1>
                    <Image className="locationImg" alt="Location" src={germany} /></div>
                <div className="location">
                    <h1 className="nameOfLocation">New york,USA</h1>
                    <Image className="locationImg" alt="Location" src={newYork} /></div>

            </div>

        </div>
    )
}

export default HomeLocation
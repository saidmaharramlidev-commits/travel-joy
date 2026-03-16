import Image from "next/image"
import bg from '@/public/packagesBg.jpg'

import package1 from "@/public/familyPackage.jpg"
import package2 from "@/public/honeymoonPackage.jpg"
import package3 from "@/public/adventurePack.jpg"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function HomePackages() {
    return (
        <div id="mainHomePackages">
            <Image id="bgOfPackages" src={bg} alt="backgroundPicture" />

            <div id="insideOfPackages-wrapper">
                <h4 id="headerOfPackages">( Tours )</h4>
                <h1 id="popularPackagesWord">Popular Packages</h1>

                <div id="packages-wrapper">
                    <div className="package">
                        <div className="imgOfPackage-wrapper">
                            <Image className="picOfPackage" alt="Image" src={package1} />
                            <div className="labelOfPackage">Family</div>

                        </div>

                        <div className="info-wrapper">
                            <div className="rowsOfInfos topInfo">
                                <h3>Family Tours</h3>
                                <span>Bali,Indonesia</span>
                            </div>
                            <div className="rowsOfInfos bottomInfo">
                                <span>7 days</span>
                                <span>4.9</span>
                            </div>

                        </div>

                        <div className="cta-wrapper">
                            <h2>$2000</h2>

                            <div className="arrow-wrapper">
                                <ArrowOutwardIcon className="arrow" />

                            </div>

                        </div>



                    </div>
                    <div className="package">
                        <div className="imgOfPackage-wrapper">
                            <Image className="picOfPackage" alt="Image" src={package2} />
                            <div className="labelOfPackage">Honeymoon</div>

                        </div>

                        <div className="info-wrapper">
                            <div className="rowsOfInfos topInfo">
                                <h3>Honeymoon Packages</h3>
                                <span>Maldives</span>
                            </div>
                            <div className="rowsOfInfos bottomInfo">
                                <span>7 days</span>
                                <span>4.9</span>
                            </div>

                        </div>


                        <div className="cta-wrapper">
                            <h2>$2000</h2>

                            <div className="arrow-wrapper">
                                <ArrowOutwardIcon className="arrow" />

                            </div>

                        </div>
                    </div>
                    <div className="package">
                        <div className="imgOfPackage-wrapper">
                            <Image className="picOfPackage" alt="Image" src={package3} />
                            <div className="labelOfPackage">Adventure</div>

                        </div>

                        <div className="info-wrapper">
                            <div className="rowsOfInfos topInfo">
                                <h3>Adventure Tours</h3>
                                <span>France</span>
                            </div>
                            <div className="rowsOfInfos bottomInfo">
                                <span>7 days</span>
                                <span>4.9</span>
                            </div>

                        </div>


                        <div className="cta-wrapper">
                            <h2>$2000</h2>

                            <div className="arrow-wrapper">
                                <ArrowOutwardIcon className="arrow" />

                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default HomePackages
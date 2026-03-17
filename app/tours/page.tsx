import Footer from "@/components/Footer"
import HeroOfDetails from "@/components/HeroOfDetails"
import Navbar from "@/components/Navbar"

function page() {
    return (
        <div>
            <Navbar />
            <HeroOfDetails header="Tours" />
            <Footer />

        </div>
    )
}

export default page
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import SupportPage from "./SupportPage";
import Support from "../components/Support";

const Home = () => {
    return (
        <div>
            <Hero />
            <Menu />
            <Gallery />
            <Testimonials />
            <ContactUs />
            {/* <SupportPage /> */}
            {/* <Support /> */}
        </div>
    )
}

export default Home

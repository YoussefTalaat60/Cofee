import { imgHero } from "../assets";

const Hero = () => {
    return (
        <div className="bg-[#3F181C] pt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  place-items-center gap-[40px]">

                {/* Start div 1 */}
                <div className="text-white tracking-[0.8px] max-w-lg ">
                    <h1 className="font-bold text-4xl tracking-[0.9px] mb-[20px] text-[#fdba74]">Best Coffee</h1>
                    <h2 className="text-4xl mb-[20px] font-bold">
                        Make Your Day better with
                        <br />
                        Our Special Coffee
                    </h2>
                    <p className="mb-[20px] text-lg">
                        Welcome to our coffee shop, where we serve the best coffee in town. Our coffee paradise is a cozy
                    </p>
                    <div className=" text-white flex gap-4">
                        <button className="px-6 py-3 bg-[#F97316] rounded-full font-medium hover:bg-transparent transition-all duration-200 ">Order Now</button>
                        <button className="px-6 py-3 border-2 border-white border-solid  rounded-full transition-all duration-200">Contact Us</button>

                    </div>
                </div>
                {/* End div 1 */}

                {/* Start div 2 */}
                <div className="flex justify-center">
                    <img src={imgHero} />
                </div>
                {/* End div 2 */}
            </div>
        </div>
    )
}
export default Hero;

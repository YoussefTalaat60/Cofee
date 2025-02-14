import Text from "../Utility/Text";
import { img1, img2, img3, img4, img5, imgHero } from "../assets";
import { Zoom } from "react-awesome-reveal";

const Menu = () => {
    const Data = [
        {
            id: 1,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img1,
        },
        {
            id: 2,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img2,
        },
        {
            id: 3,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img3,
        },
        {
            id: 4,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img4,
        },
        {
            id: 5,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: imgHero,
        },
        {
            id: 6,
            title: "Hot Beverages",
            desc: "Esse, numquam laudantium. Exercitationem molestias ipsum aut libero ipsam eos deleniti pariatur quia, eius sapiente minima voluptatibus laborum debitis qui?",
            img: img5,
        },
    ];
    return (
        <div className="bg-[#252525] py-12">
            <Text title="Our Menu" />

            {/* القائمة */}

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10">
                <Zoom delay={200} duration={1000} triggerOnce={true} fraction={0.5} >
                    {


                        Data.map((item) => (
                            <div
                                key={item.id}
                                className="bg-[#1e1d1d] h-full p-5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
                            >
                                <img
                                    className="w-[200px] rounded-md mb-4"
                                    src={item.img}
                                    alt={item.title}
                                />
                                <h2 className="text-xl text-white font-semibold mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-md text-gray-300">{item.desc}</p>
                            </div>

                        ))
                    }
                </Zoom>
            </div>

        </div>
    );
};

export default Menu;

import Text from "../Utility/Text";
import { Zoom } from "react-awesome-reveal";
import {
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
} from "../assets";
const Gallery = () => {
    const Images = [
        { id: 1, img: gallery1 },
        { id: 2, img: gallery2 },
        { id: 3, img: gallery3 },
        { id: 4, img: gallery4 },
        { id: 5, img: gallery5 },
        { id: 6, img: gallery6 },
    ];
    return (
        <div className="bg-[#3F181C] text-white py-12">
            <Text title="Gallery" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8">
                <Zoom>
                    {
                        Images.map((image) => (
                            <div key={image.id} className="overflow-hidden shadow-lg rounded-md h-full">
                                <img src={image.img} alt="Gallery" className="w-full h-full min-h-[100hv] object-cover hover:scale-105 transition-all duration-200 " />
                            </div>
                        ))}
                </Zoom>
            </div>

        </div>
    );
};
export default Gallery;

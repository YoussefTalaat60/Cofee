import Text from "../Utility/Text";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
// import required modules
import { Autoplay } from 'swiper/modules';

// import required Images User
import { user1, user2, user3, user4, user5 } from "../assets";

const Testimonials = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="bg-[#252525] py-10">
            <Text title="Testimonials" />
            <div className='container mx-auto'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    {/* الشرائح */}
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4 text-white">
                            <img className="w-20 h-20 rounded-full" src={user1} alt="User 1" />
                            <p className="text-lg">Amazing service and top-notch coffee!</p>
                            <h3 className="font-bold">- Rana </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4 text-white">
                            <img className="w-20 h-20 rounded-full" src={user2} alt="User 2" />
                            <p className="text-lg">A perfect start to my day, every day.</p>
                            <h3 className="font-bold">- Youssef</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4 text-white">
                            <img className="w-20 h-20 rounded-full" src={user3} alt="User 3" />
                            <p className="text-lg">Best coffee shop in town!</p>
                            <h3 className="font-bold">- Sayed</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4 text-white">
                            <img className="w-20 h-20 rounded-full" src={user4} alt="User 4" />
                            <p className="text-lg">Friendly staff and great ambiance.</p>
                            <h3 className="font-bold">- karma</h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-4 text-white">
                            <img className="w-20 h-20 rounded-full" src={user5} alt="User 5" />
                            <p className="text-lg">Love their specialty drinks!</p>
                            <h3 className="font-bold">- Mohamed</h3>
                        </div>
                    </SwiperSlide>

                    {/* دايره العد*/}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}
export default Testimonials;
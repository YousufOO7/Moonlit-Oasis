import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import images
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/mountain.webp";
import image3 from "../../../assets/premium.jpeg";

const Promotion = () => {
  return (
    <div className="mb-10 mt-5">
      {/* Header */}
      <div className="mb-10 dark:text-white">
        <motion.h1
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 5, delay: 1, ease: "easeInOut", repeat: Infinity }}
          className="text-2xl lg:text-5xl font-bold text-center"
        >
          Latest{" "}
          <motion.span
            animate={{ color: ["#f3411b", "#f3731b", "#f3981b"] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
          >
            Discount{" "}
          </motion.span>
          For You
        </motion.h1>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={image1} alt="Beachfront Room Promotion" className="w-full h-[300px] object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-xl lg:text-3xl font-semibold">Beachfront Room - 70% Off</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image2} alt="Mountain View Room Promotion" className="w-full h-[300px] object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-xl lg:text-3xl font-semibold">Mountain View Room - 70% Off</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image3} alt="Premium Suite Promotion" className="w-full h-[300px] object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
              <h2 className="text-xl lg:text-3xl font-semibold">Premium Suite - 70% Off</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Promotion;

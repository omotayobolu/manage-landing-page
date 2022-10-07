import TestimonialsData from "../data/TestimonialsData";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const Testimonies = () => {
  return (
    <section className="w-full pt-8">
      <div>
        <h2 className="relative text-3xl md:text-4xl text-center">
          What they've said
        </h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          pagination={{
            clickable: true,
            el: ".my-custom-pagination-div",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          className="flex flex-row my-12 w-full lg:mx-0 mx-[5%]"
        >
          {TestimonialsData.map((item) => (
            <SwiperSlide
              className="relative mt-12 h-[200px] max-h-full z-10 bg-veryLightGray text-center py-6 px-10"
              key={item.id}
            >
              <div className="absolute z-20 left-[45%] top-[-20%] w-16">
                {item.avatar}
              </div>
              <h5 className="py-4">{item.name}</h5>
              <p className="text-sm">{item.testimony}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-custom-pagination-div relative flex justify-center items-center mt-[-1rem]"></div>
      <div className="text-center mt-4">
        <button>Get Started</button>
      </div>
      <div className="bg-brightRed mt-[7rem]">
        <div className="lg:mx-[10%] mx-[5%] py-16 h-full flex lg:flex-row flex-col lg:text-left text-center justify-between">
          <h2 className="text-white text-4xl lg:font-bold font-medium lg:w-[50%] w-full">
            Simplify how your team works today.
          </h2>
          <div>
            <button className=" bg-white text-brightRed mt-4 lg:mx-0 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;

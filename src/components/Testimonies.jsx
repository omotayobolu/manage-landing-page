import TestimonialsData from "../data/TestimonialsData";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Testimonies = () => {
  return (
    <section className="w-full pt-8">
      <div>
        <h2 className="relative text-3xl md:text-4xl text-center">
          What they've said
        </h2>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            gap: "1rem",
            breakpoints: {
              992: {
                perPage: 2,
                pagination: true,
              },
              768: {
                perPage: 1,
                pagination: true,
              },
            },
          }}
          className="flex my-12 w-full lg:mx-0 mx-[5%]"
        >
          {TestimonialsData.map((item) => (
            <SplideSlide
              className="relative mt-12  z-10 bg-veryLightGray text-center p-6"
              key={item.id}
            >
              <div className="absolute z-20 left-[45%] top-[-20%] w-16">
                {item.avatar}
              </div>
              <h5 className="py-4">{item.name}</h5>
              <p className="text-sm">{item.testimony}</p>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="text-center">
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

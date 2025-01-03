"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const items = [
  {
    imageUrl: "certificate.jpg",
    link: "https://example.com/1",
  },
  {
    imageUrl: "certificate.jpg",
    link: "https://example.com/2",
  },
  {
    imageUrl: "certificate.jpg",
    link: "https://example.com/3",
  },
  {
    imageUrl: "certificate.jpg",
    link: "https://example.com/4",
  },
  {
    imageUrl: "certificate.jpg",
    link: "https://example.com/5",
  },
];

export default function Certificates() {

  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      distance: "50px", // Distance the element moves
      duration: 800, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function
      opacity: 0, // Start with 0 opacity
      scale: 0.9, // Start with 90% scale
      reset: false, // Animation replay on scroll
      interval: 100, // Delay between animations for multiple elements
      origin: "bottom",
    });
  }, []);

  return (
    <section
      className="bg-primary text-white py-20 px-10 md:px-32"
      id="Certificates"
    >
      <div className="max-w-4xl ">
        <h2 className="text-3xl font-bold mb-10 reveal">Certificates</h2>
      </div>
      <div className="reveal">
        <Swiper
          spaceBetween={15} // Space between slides
          slidesPerView={1} // Minimum 3 items on screen
          loop={false} // Optional: enables looping of slides
          pagination={false} // Disable pagination
          navigation={false} // Disable navigation buttons
          breakpoints={{
            640: {
              slidesPerView: 1, // Small screens (>= 640px): 1 item
            },
            768: {
              slidesPerView: 2, // Medium screens (>= 768px): 2 items
            },
            1024: {
              slidesPerView: 3, // Large screens (>= 1024px): 3 items
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.imageUrl} alt={`Image ${index + 1}`} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

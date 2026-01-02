'use client'
import React, { useEffect, useState } from "react";
import WordPullUp from "../ui/word-pull-up";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";

function Hero() {
  const [show,setShow] = useState(true)
const SLIDES = [
  {title:"Lead with vision, serve with purpose.",image:"logo-pattern.png"},
  {title:"Leadership must transcend borders.",image:"logo-pattern2.png"},
  {title:"Developing leadership from values.",image:"logo-pattern3.png"},
  {title:"Equal opportunity grounded in merit.",image:"logo-pattern4.png"},
]
useEffect(() => {
  setTimeout(() => {
    setShow(true);
  }, 500); 
}, []);

const [screenRatio, setScreenRatio] = useState('web');

useEffect(() => {
  const updateScreenRatio = () => {
    setScreenRatio(window.innerWidth <= 640 ? 'phone' : 'web');
  };

  updateScreenRatio();
  window.addEventListener('resize', updateScreenRatio);

  return () => {
    window.removeEventListener('resize', updateScreenRatio);
  };
}, []);
const pagination = {
  clickable: true,
  renderBullet: function (index:number, className:string) {
    return '<span className="' + className + '">' + (index + 1) + '</span>';
  },
};
  return (
    <div className="overflow-hidden h-[650px]">
 
<Swiper
  className="w-full custom-swiper"
  id="swiper"
  modules={[Autoplay,Pagination,Navigation]}
  onInit={(swiper) => {
    setShow(true);
  }}
  onSlideChange={() => {
    setShow(false);
  }}
  onSlideChangeTransitionEnd={() => {
    setShow(true);
  }}
  // pagination={true} navigation={true}
  breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }}
  loop={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
>
  {SLIDES.map((slide: any, i: number) => (
    <SwiperSlide key={i}>
      <div
        className={`w-[100%] h-[650px] z-[1] bg-gradient-to-br bg-green relative flex items-center justify-between px-[10%]`}
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
          <WordPullUp words={slide.title} className="text-6xl w-full md:w-2/4 text-green-light group leading-[55px] md:text-8xl md:leading-[95px] md:text-left font-normal" show={show ? 'show' : "hidden"} />
      </div>
          <img src={`/images/${slide.image}`} className="absolute z-[1] hidden md:block right-0 top-0 h-[800px] blur-sm" />
    </SwiperSlide>
  ))}
</Swiper>

{/*  <div className="w-[70%] max-w-[1200px] mx-auto h-full text-[110px] leading-[90px] text-white justify-center flex flex-col items-start">
      <WordPullUp
      className="md:w-[60%] Grotesque-font font-medium text-left tracking-[-0.02em] text-7xl leading-[60px] md:text-[130px] md:leading-[100px]"
      words="Stories  that  shape  lives"
    />
        <p className="text-base text-lime-100 md:w-[55%] mt-10">Welcome to Sukoon Edu Village, nestled in the heart of Andhaka Village. A sanctuary of harmony and
learning, we nurture young minds through education and the universal language of love.</p>
      </div>
      <img src="/image/Logo strock.png" alt="" className="absolute -bottom-52 right-[15%] h-[350px] md:h-[500px]"/> */}
    </div>
  );
}

export default Hero;

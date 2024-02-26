import Image from "next/image";
import Head from "next/head";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import React from 'react';
import { useDarkMode } from '@/app/components/darkModeProvider.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slide_image1 from "../../public/image0.png";
import slide_image2 from "../../public/image1.jpeg";
import slide_image3 from "../../public/image3.jpeg";
import slide_image4 from "../../public/image4.jpeg";
import slide_image5 from "../../public/image5.jpeg";

import { BrowserRouter } from "react-router-dom";

export default function Home() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleDarkMode = () => {
    toggleDarkMode();
    //bathing them together
  }
  return (
    <div>
      <Head>
        <title>Ben Zhou Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
    
      <div className={`${darkMode && " dark"}`}>
      {/* <main className=" transition-all duration-500 dark:bg-slate-950 "> applied some transition to every object */}
      <main className={`transition-all duration-500 dark:bg-zinc-900 `}> {/*applied some transition to every object */}

          {/* <div className={`m-0 p-0 rounded-b-lg ${darkMode? "dark:bg-cool-gray" : "dark:bg-white" } transition-colors duration-500`}>
            <Navbar className={`dark: text-gray-100`} toggleDarkMode={handleDarkMode}/>
          </div> */}
        <div id="scrollwrapper">
        <section  className="px-10">
          
          <div className="text-center p-10">
            <h2 className="text-7xl py-10 pt-20 font-urbanist font-semibold dark:text-light-beige">Ben Zhou</h2>
            <h3 className="text-2xl py-2 dark:text-gray-100">Developer and Designer.</h3>
            <p className="text-medium py-5 leading-8 dark:text-gray-100">Avid Soccer fan, hobbyist and designer. Find me anywhere below!</p>
            {/*for future refererence leading is text space: leading-xxx*/}
          </div>
          <div className="text-5xl justify-center flex gap-16 py-3  ">
            <a href="https://www.linkedin.com/in/ben-zhou-995b42244/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className={`transition-colors duration:500 ${darkMode ? "dark:text-gray-100" : "text-gray-600"}`}/></a>
            <a href="https://www.instagram.com/itsbenz10/" target="_blank" rel="noopener noreferrer"><AiFillInstagram className={`transition-colors duration:500 ${darkMode ? "dark:text-gray-100" : "text-gray-600"}`}/></a>
            <a href="https://github.com/itsbenz10" target="_blank" rel="noopener noreferrer"><AiFillGithub className={`transition-colors duration:500 ${darkMode ? "dark:text-gray-100" : "text-gray-600"}`}/></a>
          </div>

          <div className={` mt-40 pt-10 transition-colors duration:500 ${darkMode ? "dark:border-gray-100" : "border-black"}`}>
            <div id="mouse-scroll">
              <div className="mouse border-2 border-solid border-zinc-900 dark:border-gray-100">
                <div className="mouse-in dark:bg-gray-100 bg-zinc-900"></div>
              </div>
              <div >
                  <span className="down-arrow-1 border-r-2 border-r-solid dark:border-r-gray-100 border-r-zinc-900 border-b-2 border-b-solid border-b-zinc-900 dark:border-b-gray-100"></span>
                  <span className="down-arrow-2 border-r-2 border-r-solid dark:border-r-gray-100 border-r-zinc-900 border-b-2 border-b-solid border-b-zinc-900 dark:border-b-gray-100"></span>
                  <span className="down-arrow-3 border-r-2 border-r-solid dark:border-r-gray-100 border-r-zinc-900 border-b-2 border-b-solid border-b-zinc-900 dark:border-b-gray-100"></span>
              </div>
            </div>
          </div>
        </section>
        <section className="px-10 ">
          <div id="container" className="p-10 mx-auto my-auto justify-center">
            <h2 className={` p-10 text-center text-2xl transition-colors duration:500 ${darkMode ? "dark:text-gray-100" : "text-black"}`}>Here are some of my latest pictures</h2>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              spaceBetween={5}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier:2.5,
              }}
              
            >
              <SwiperSlide>
                <Image src={slide_image1} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={slide_image2} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={slide_image3} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={slide_image4} alt="slide_image" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={slide_image5} alt="slide_image" />
              </SwiperSlide>

            </Swiper>
          </div>
        </section>
        </div>
      </main>
      <footer className={`transition-all duration-500 ${darkMode ? 'dark:bg-dark-blue' : 'dark:bg-slate-950'}`}></footer>
    </div>
    </div>
  );
}

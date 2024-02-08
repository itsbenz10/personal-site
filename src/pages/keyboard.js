// import "@/styles/globals.css";
// import Image from "next/image";
// import Head from "next/head";
// import React from 'react';
// // import {DarkToggle} from "@/app/components/darkMode.js"
// import { useDarkMode } from '@/app/components/darkModeProvider.js';
// import { Azeret_Mono } from 'next/font/google';
// import Keyboard3D from '@/app/components/Keyboard3D';


// export default function keyboard(){
//     const { darkMode, toggleDarkMode } = useDarkMode();
//     return(
//         <div>
//         <Head>
//             <title>Ben Zhou Portofolio</title>
//             <link rel="preconnect" href="https://fonts.googleapis.com"></link>
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
//             <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
//         </Head>
//         <div className={`${darkMode && " dark"}`}>
//             <main className=" dark:bg-dark-blue ">
//                 <section  className="px-10">
//                     <Keyboard3D/>
//                 </section>
//             </main>
//         </div> 
//         </div>
//     )
// }

// KeyboardPage.js
// KeyboardPage.js
// KeyboardPage.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useDarkMode } from '@/app/components/darkModeProvider.js';
import Keyboard3D from '@/app/components/Keyboard3D.js';
import { Canvas } from '@react-three/fiber';

const KeyboardPage = () => {
  const { darkMode } = useDarkMode();
  
  return (
    <div>
      <Head>
        <title>Ben Zhou Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={`${darkMode && " dark"}`}>
        <main className="dark:bg-dark-blue">
          <section className="px-10 h-96">
            {/* Render the 3D keyboard component */}
            <Canvas camera={{ fov: 35, zoom: 1, near: 1, far: 1000 }}>
              <Keyboard3D />
            </Canvas>
          </section>
        </main>
      </div>
      {/* Link back to other pages */}
      <Link href="/">Go to Home Page</Link>
    </div>
  );
};

export default KeyboardPage;
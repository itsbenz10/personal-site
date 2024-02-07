import "@/styles/globals.css";
import Image from "next/image";
import Head from "next/head";
import React from 'react';
// import {DarkToggle} from "@/app/components/darkMode.js"
import { useDarkMode } from '@/app/components/darkModeProvider.js';
import { Azeret_Mono } from 'next/font/google';
import Keyboard3D from '@/app/components/Keyboard3D';


export default function keyboard(){
    const { darkMode, toggleDarkMode } = useDarkMode();
    return(
        <div>
        <Head>
            <title>Ben Zhou Portofolio</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        </Head>
        <div className={`${darkMode && " dark"}`}>
            <main className=" dark:bg-dark-blue ">
                <section  className="px-10">
                    <Keyboard3D/>
                </section>
            </main>
        </div> 
        </div>
    )
}
// darkMode.js
// "use client";
//import { useState } from 'react';
import { useDarkMode  } from "./darkModeProvider.js"

// export default function DarkToggle() {
//     const [darkMode, toggleDarkMode] = useDarkMode();

//     // const toggleDarkMode = () => {
//     //     setDarkMode(!darkMode);
//         //const toggle = document.getElementById("toggle");
//         //toggle.classList.toggle('active');
//     // };
//     return (
//         <div id="toggle" className="">
//             <button id="indicator" onClick={toggleDarkMode}></button>
//         </div>
//     );
// }

// darkMode.js
// darkMode.js

export default function DarkToggle() {
    const {toggleDarkMode } = useDarkMode();

    return (
        <div id="toggle" className="">
            <button id="indicator" onClick={toggleDarkMode}></button>
        </div>
    );
}


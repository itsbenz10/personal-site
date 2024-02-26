// Navbar.js
import DarkToggle from "./darkMode.js";
import { useDarkMode } from '@/app/components/darkModeProvider.js';
import "@/styles/globals.css";
import Link from "next/link"

// export function Navbar() {
//     return (
//         <nav className="py-10 mb-12 flex justify-between">
//             <h1 className="text-mb font-vogue">Ben Zhou</h1>
//             <ul className="flex items-center">
//                 <li></li>
//                 <li>
//                     <DarkToggle />
//                 </li>
//   {/* to make a gradient, use bg-gradient-to-direction(r, l, etc) then from-color to-color*/}
//                 <li><a href="../public/keyboard.js" className="text-black px-4 py-2 rounded-md ml-8">Keyboard</a></li>
//                 <li>Socials</li>
//             </ul>
//         </nav>
//     )
// };

// Navbar.js
const Navbar = () =>{
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    // <nav className="py-12 px-10 mb-12 flex justify-between items-center ">
    <div className={`${darkMode && " dark"}`}>
    <nav className={` m-0 round-b-lg transition-colors duration-500 ${darkMode ? "dark:bg-zinc-900" : "dark:bg-white" } py-12 px-10 flex justify-between items-center font-onest font-semibold`}>
      {/* <h1 className=" font-onest">Portofolio</h1> */}
      <a href="/"><h1 className={` ${darkMode ? 'dark:text-light-beige' : 'dark:text-dark-blue'} transition-colors duration-500`}>Portfolio</h1></a>

      <ul className="flex items-center gap-x-12">
      <li>
      <Link className={`transition-colors duration-500 ${darkMode ? 'dark:text-gray-100' : 'dark:text-gray-500'}`} href="/keyboard">Keyboard</Link>
      </li>
      <li>
        <a href="https://drive.google.com/file/d/1H-BdTbKOiVX-e3Qaqp8NOkL-89itofYP/view?usp=sharing" target="_blank" className={`transition-colors duration-500 ${darkMode ? 'dark:text-gray-100' : 'dark:text-gray-500'}`}>Resume</a>
      </li>
      <li>
          <DarkToggle />
        </li>

      </ul>
    </nav>
  </div>
  );
}
export default Navbar
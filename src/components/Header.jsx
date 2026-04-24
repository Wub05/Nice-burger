// export default function Header() {
//   return (
//     <>
//       <header
//         id="global-header"
//         className="code-section sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 lg:h-20">
//             {/* <!-- Logo --> */}
//             <a href="/" className="flex items-center" data-logo="">
//               <img
//                 src="https://assets.ls-assets.com/uploads/ee9de30d-b78d-494b-8d41-a4ed2ba6bf71/b10b487e-0d57-47ac-818e-15cb99866661.png?w=768"
//                 alt="Nice Burger Logo"
//                 className="h-10 lg:h-12 w-auto"
//               />
//             </a>

//             {/* <!-- Desktop Navigation --> */}
//             <nav className="hidden lg:flex items-center gap-8">
//               <a
//                 href="/menu"
//                 className="text-dark_text hover:text-primary-color font-medium transition-colors duration-200"
//               >
//                 Menu
//               </a>
//               <a
//                 href="/about"
//                 className="text-dark_text  hover:text-primary-color font-medium transition-colors duration-200"
//               >
//                 About Us
//               </a>
//               <a
//                 href="/gallery"
//                 className="text-dark_text hover:text-primary-color font-medium transition-colors duration-200"
//               >
//                 Gallery
//               </a>
//               <a
//                 href="/location"
//                 className="text-dark_text hover:text-primary-color font-medium transition-colors duration-200"
//               >
//                 Location
//               </a>
//             </nav>

//             {/* <!-- TikTok Button - Desktop --> */}
//             <div className="hidden lg:flex items-center gap-4">
//               <a
//                 href="#"
//                 className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#25F4EE] via-[#fe2c55] to-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
//                 aria-label="Follow us on TikTok"
//               >
//                 <svg
//                   className="w-6 h-6 text-white"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path>
//                 </svg>
//                 {/* <!-- Glow effect on hover --> */}
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#25F4EE] via-[#fe2c55] to-black opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300"></div>
//               </a>
//             </div>

//             {/* <!-- Mobile Menu Toggle --> */}
//             <button
//               data-landingsite-mobile-menu-toggle=""
//               className="lg:hidden p-2 text-dark_text hover:text-primary-color transition-colors"
//               aria-label="Toggle menu"
//             >
//               <i className="fa-solid fa-bars text-xl" aria-hidden="true"></i>
//             </button>
//           </div>
//         </div>

//         {/* <!-- Mobile Navigation --> */}
//         <div
//           data-landingsite-mobile-menu=""
//           className="hidden lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
//         >
//           <nav className="flex flex-col py-4 px-4">
//             <a
//               href="/menu"
//               className="py-3 px-4 text-dark_text hover:text-primary-color hover:bg-[var(--light-background-color)] font-medium rounded-lg transition-all"
//             >
//               Menu
//             </a>
//             <a
//               href="/about"
//               className="py-3 px-4 text-dark_text hover:text-primary-color hover:bg-[var(--light-background-color)] font-medium rounded-lg transition-all"
//             >
//               About Us
//             </a>
//             <a
//               href="/gallery"
//               className="py-3 px-4 text-dark_text hover:text-primary-color hover:bg-[var(--light-background-color)] font-medium rounded-lg transition-all"
//             >
//               Gallery
//             </a>
//             <a
//               href="/location"
//               className="py-3 px-4 text-dark_text hover:text-primary-color hover:bg-[var(--light-background-color)] font-medium rounded-lg transition-all"
//             >
//               Location
//             </a>
//             <a
//               href="/order"
//               className="py-3 px-4 text-dark_text hover:text-primary-color hover:bg-[var(--light-background-color)] font-medium rounded-lg transition-all"
//             >
//               Takeaway
//             </a>
//             <div className="flex items-center gap-4 mt-4 px-4">
//               <a
//                 href="#"
//                 className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#25F4EE] via-[#fe2c55] to-black"
//                 aria-label="TikTok"
//               >
//                 <svg
//                   className="w-5 h-5 text-white"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path>
//                 </svg>
//               </a>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      id="global-header"
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="https://assets.ls-assets.com/uploads/ee9de30d-b78d-494b-8d41-a4ed2ba6bf71/b10b487e-0d57-47ac-818e-15cb99866661.png?w=768"
              alt="Nice Burger Logo"
              className="h-10 lg:h-12 w-auto"
            />
          </a>

          {/* TikTok mobile */}
          <div className="flex items-center gap-4 mt-4 px-4 mb-2">
            <a
              href="https://www.tiktok.com/@niceburgerrobe"
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden w-8 h-8 flex items-center justify-center rounded-full bg-[#fe2c55] hover:scale-110 transition"
              aria-label="TikTok"
            >
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#menu"
              className="text-dark_text hover:text-primary-color font-medium transition"
            >
              Menu
            </a>
            <a
              href="#story"
              className="text-dark_text hover:text-primary-color font-medium transition"
            >
              Story
            </a>
            <a
              href="#services"
              className="text-dark_text hover:text-primary-color font-medium transition"
            >
              Services
            </a>
          </nav>

          {/* DESKTOP SOCIAL */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.tiktok.com/@niceburgerrobe"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center  rounded-full bg-[#fe2c55] hover:scale-110 transition"
              aria-label="TikTok"
            >
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-dark_text"
            aria-label="Toggle menu"
          >
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden bg-white border-t border-gray-100 transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-4 px-4">
          <a href="#menu" className="py-3 px-4 hover:bg-gray-50 rounded-lg">
            Menu
          </a>
          <a href="#story" className="py-3 px-4 hover:bg-gray-50 rounded-lg">
            Story
          </a>
          <a href="#service" className="py-3 px-4 hover:bg-gray-50 rounded-lg">
            Services
          </a>
        </nav>
      </div>
    </header>
  );
}

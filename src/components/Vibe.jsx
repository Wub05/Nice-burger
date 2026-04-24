import React from "react";

export default function Vibe() {
  return (
    <>
      <section
        className="code-section relative overflow-hidden"
        data-vibe-section=""
        id="vibe"
      >
        {/* <!-- Background with Parallax Layer --> */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark_bg via-[#1a1a1a] to-dark_bg"></div>

        {/* <!-- Animated Ambient Particles --> */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          data-particles=""
        >
          <div
            className="particle absolute w-1 h-1 bg-primary-color rounded-full animate-float-slow 
            opacity-30 [left:10%][top:20%]"
          ></div>
          <div className="particle absolute w-2 h-2 bg-accent rounded-full animate-float-medium opacity-20 [left:25%] [top:40%]"></div>
          <div className="particle absolute w-1.5 h-1.5 bg-accent2 rounded-full animate-float-fast opacity-25 [left:40%] [top:15%]"></div>
          <div className="particle absolute w-2.5 h-2.5 bg-white rounded-full animate-float-slow opacity-10 [left:70%] [top:60%]"></div>
          <div className="particle absolute w-1 h-1 bg-primary-color rounded-full animate-float-medium opacity-35 [left:70%] [top:30%w]"></div>
          <div className="particle absolute w-2 h-2 bg-accent3 rounded-full animate-float-fast opacity-20 [left:85%] [top:50%]"></div>
          <div className="particle absolute w-1.5 h-1.5 bg-accent rounded-full animate-float-slow opacity-25 [left:15%] [top:75%]"></div>
          <div className="particle absolute w-2 h-2 bg-white rounded-full animate-float-medium opacity-15 [left:60%] [80%]"></div>
        </div>

        {/* <!-- Decorative Light Beams --> */}
        <div className="absolute top-0 left-1/4 w-96 h-[600px] bg-primary-color opacity-5 blur-[100px] -rotate-12 transform -translate-x-1/2"></div>
        <div className="absolute top-0 right-1/4 w-96 h-[600px] bg-accent opacity-5 blur-[100px] rotate-12 transform translate-x-1/2"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          {/* <!-- Section Header with Glow Effect --> */}
          <div className="text-center mb-16  translate-y-8 transition-all duration-700 ease-out delay-0">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-color"></div>
              <i
                className="fa-solid fa-music text-primary-color text-xl animate-pulse"
                aria-hidden="true"
              ></i>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary-color"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Feel the
              <span className="text-primary-color relative inline-block">
                Vibe
                <span className="absolute -inset-2 bg-primary-color opacity-20 blur-xl rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-body">
              Step into Nice Burger and let the atmosphere sweep you away
            </p>
          </div>

          {/* <!-- Immersive Experience Grid --> */}
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {/* <!-- Main Visual - Large Feature --> */}
            <div className="lg:col-span-2 relative group  translate-y-8 transition-all duration-700 ease-out delay-100">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2206834241.jpg?w=1200"
                  alt="Nice Burger restaurant atmosphere"
                  className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* <!-- Play Button Overlay --> */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 hover:bg-primary-color hover:border-primary-color transition-all duration-300 transform hover:scale-110 group-hover:animate-pulse"
                    data-play-btn=""
                  >
                    <i
                      className="fa-solid fa-play text-white text-2xl ml-1"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>

                {/* <!-- Caption --> */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block bg-primary-color text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    360° Experience
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-heading">
                    Inside Our Restaurant
                  </h3>
                  <p className="text-gray-300">
                    Take a virtual tour of our cozy, modern dining space
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Side Features --> */}
            <div className="space-y-6">
              {/* <!-- Warm Lighting Card --> */}
              <div className="relative group cursor-pointer  translate-y-8 transition-all duration-700 ease-out delay-200">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://assets.ls-assets.com/provider/istock/2183250511.jpg?w=768"
                    alt="Warm restaurant lighting"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-accent2 mb-1">
                      <i
                        className="fa-solid fa-lightbulb"
                        aria-hidden="true"
                      ></i>
                      <span className="text-sm font-medium">Ambient</span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-heading">
                      Warm &amp; Inviting
                    </h4>
                  </div>
                </div>
              </div>

              {/* <!-- Music Card --> */}
              <div
                className="relative group cursor-pointer  translate-y-8 transition-all duration-700 ease-out delay-300"
                d
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="https://assets.ls-assets.com/provider/istock/2210769546.jpg?w=768"
                    alt="Great music vibe"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-accent mb-1">
                      <i className="fa-solid fa-music" aria-hidden="true"></i>
                      <span className="text-sm font-medium">Chill</span>
                    </div>
                    <h4 className="text-lg font-bold text-white font-heading">
                      Good Vibes Only
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Interactive Atmosphere Elements --> */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-vibe-features=""
          >
            {/* <!-- Feel the Energy --> */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-primary-color/20 hover:border-primary-color/30 transition-all  group cursor-pointer  translate-y-8 duration-700 ease-out delay-400">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-color/30 transition-colors">
                <i
                  className="fa-solid fa-bolt text-primary-color text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h4 className="text-white font-bold mb-2 font-heading">
                Feel the Energy
              </h4>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">
                Vibrant, lively atmosphere that makes every bite better
              </p>
            </div>

            {/* <!-- Cozy Corners --> */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-accent/20 hover:border-accent/30 transition-all group cursor-pointer  translate-y-8 duration-700 ease-out delay-500">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <i
                  className="fa-solid fa-couch text-accent text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h4 className="text-white font-bold mb-2 font-heading">
                Cozy Corners
              </h4>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">
                Private spots for intimate conversations
              </p>
            </div>

            {/* <!-- Social Hub --> */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-accent2/20 hover:border-accent2/30 transition-all group cursor-pointer  translate-y-8 duration-700 ease-out delay-600">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent2/30 transition-colors">
                <i
                  className="fa-solid fa-users text-accent2 text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h4 className="text-white font-bold mb-2 font-heading">
                Social Hub
              </h4>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">
                Perfect for meetups and celebrations
              </p>
            </div>

            {/* <!-- Relax & Unwind --> */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-accent3/20 hover:border-accent3/30 transition-all  group cursor-pointer  translate-y-8 duration-700 ease-out delay-700">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent3/30 transition-colors">
                <i
                  className="fa-solid fa-spa text-accent3 text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h4 className="text-white font-bold mb-2 font-heading">
                Relax &amp; Unwind
              </h4>
              <p className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">
                Chill vibes for solo dining or reading
              </p>
            </div>
          </div>

          {/* <!-- Sound Wave Visualization --> */}
          <div className="mt-16 text-center  translate-y-8 transition-all duration-700 ease-out delay-800">
            <p className="text-gray-500 mb-6 text-sm uppercase tracking-wider">
              Immerse yourself in the ambiance
            </p>
            <div className="flex items-center justify-center gap-1">
              <div className="w-1 h-8 bg-primary-color rounded-full animate-sound-bar"></div>
              <div
                className="w-1 h-12 bg-primary-color rounded-full animate-sound-bar delay-100"
                s
              ></div>
              <div
                className="w-1 h-6 bg-primary-color rounded-full animate-sound-bar delay-200"
                s
              ></div>
              <div className="w-1 h-16 bg-primary-color rounded-full animate-sound-bar delay-300"></div>
              <div
                className="w-1 h-10 bg-primary-color rounded-full animate-sound-bar delay-400"
                s
              ></div>
              <div className="w-1 h-14 bg-accent rounded-full animate-sound-bar delay-500"></div>
              <div className="w-1 h-8 bg-primary-color rounded-full animate-sound-bar delay-600"></div>
              <div className="w-1 h-18 bg-accent rounded-full animate-sound-bar delay-700"></div>
              <div className="w-1 h-12 bg-primary-color rounded-full animate-sound-bar delay-800"></div>
              <div className="w-1 h-6 bg-primary-color rounded-full animate-sound-bar delay-900"></div>
              <div className="w-1 h-10 bg-primary-color rounded-full animate-sound-bar delay-1000"></div>
              <div
                className="w-1 h-14 bg-accent2 rounded-full animate-sound-bar delay-1100"
                s
              ></div>
              <div className="w-1 h-8 bg-primary-color rounded-full animate-sound-bar delay-1200"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

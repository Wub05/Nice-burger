import React from "react";

export default function Homepage() {
  return (
    <>
      <section
        className="code-section relative min-h-screen flex items-center justify-center overflow-hidden"
        id="s4ty1c8"
      >
        {/* <!-- Hero Background with Stunning Burger Image --> */}
        <div className="absolute inset-0">
          {/* <!-- Main Hero Image - Mouthwatering Burger --> */}
          <img
            src="https://assets.ls-assets.com/provider/istock/2195535747.jpg?w=1920"
            alt="Mouthwatering cheeseburger with melted cheese and crispy bacon"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* <!-- Light Gradient Overlay for Text Readability --> */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>

          {/* <!-- Warm Tint Overlay for Appetizing Feel --> */}
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/5 via-transparent to-orange-900/10"></div>
        </div>

        {/* <!-- Floating Particles Decoration --> */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="animate-particle-float absolute w-3 h-3 bg-accent rounded-full left-[10%] top-[20%] delay-0"></div>
          <div className="animate-particle-float absolute w-2 h-2 bg-accent2 rounded-full left-[20%] top-[60%] delay-500"></div>
          <div className="animate-particle-float absolute w-4 h-4 bg-primary-color rounded-full left-[35%] top-[30%] delay-1000"></div>
          <div className="animate-particle-float absolute w-2 h-2 bg-accent rounded-full left-[50%] top-[70%] delay-1500"></div>
          <div className="animate-particle-float absolute w-3 h-3 bg-white rounded-full left-[65%] top-[25%] delay-2000"></div>
          <div className="animate-particle-float absolute w-2 h-2 bg-primary-color rounded-full left-[75%} top-[55%] delay-2500 "></div>
          <div className="animate-particle-float absolute w-4 h-4 bg-accent3 rounded-full left-[85%] top-[40%] delay-3000"></div>
          <div className="animate-particle-float absolute w-2 h-2 bg-white rounded-full left-[90%] top-[75%] delay-3500"></div>
        </div>

        {/* <!-- Content --> */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* <!-- Rating Badge --> */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in ">
              <div className="flex text-accent2">
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
              </div>
              <span className="text-white font-medium">
                5.0 Rating – Loved by Locals
              </span>
            </div>

            {/* <!-- Main Headline --> */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 font-heading">
              Taste the Best
              <br />
              <span className="text-primary-color">Burger</span> in Bale Robe
            </h1>

            {/* <!-- Subheadline --> */}
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg font-body">
              Big flavor. Fresh ingredients. Unforgettable bites.
              <br className="hidden sm:block" />
              Your new favorite burger experience awaits.
            </p>

            {/* <!-- CTA Buttons --> */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-color text-white font-bold btn-rounded hover:bg-[#da5828] transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/40 text-lg "
              >
                <i className="fa-solid fa-utensils mr-2" aria-hidden="true"></i>
                View Menu
              </a>
              <a
                href="/order"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold btn-rounded  hover:bg-white hover:text-[var(--dark-text-color)] transition-all duration-300 transform hover:scale-105 text-lg "
              >
                <i
                  className="fa-solid fa-bag-shopping mr-2"
                  aria-hidden="true"
                ></i>
                Takeaway
              </a>
            </div>

            {/* <!-- Quick Info --> */}
            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/20 lg:mb-4">
              <div className="flex items-center gap-2 text-white/90">
                <i
                  className="fa-solid fa-location-dot text-primary-color"
                  aria-hidden="true"
                ></i>
                <span className="text-sm">Bale Robe, Galma Abba Geda Hall</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <i
                  className="fa-solid fa-clock text-primary-color"
                  aria-hidden="true"
                ></i>
                <span className="text-sm">Open Daily</span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Bottom Wave --> */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto xlg:mt-2"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}

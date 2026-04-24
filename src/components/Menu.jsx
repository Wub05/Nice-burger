import React from "react";

export default function Menu() {
  return (
    <>
      <section
        className="code-section relative overflow-hidden"
        data-menu-section=""
        id="menu"
      >
        {/* <!-- Background with Gradient --> */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[var(--light-background-color)] to-[var(--medium-background-color)]"></div>

        {/* <!-- Decorative Elements --> */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--primary-color)] rounded-full opacity-5 blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--accent-color)] rounded-full opacity-5 blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* <!-- Section Header with Animated Elements --> */}
          <div className="text-center mb-12 lg:mb-16 light_color translate-y-8 transition-all duration-700 ease-out">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[var(--primary-color)]"></div>
              <span className="text-2xl">🍔</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[var(--primary-color)]"></div>
            </div>
            <span className="inline-block text-[var(--primary-color)] font-bold tracking-wider uppercase text-sm mb-4 px-4 py-2 bg-primary-color/10 rounded-full font-body">
              Our Favorites
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark_text mb-6 font-heading">
              Menu
              <span className="text-primary-color relative inline-block">
                Highlights
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    className="text-[var(--accent2-color)]"
                  ></path>
                </svg>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray_text max-w-2xl mx-auto font-body">
              Handcrafted with passion. Every bite tells a story of quality,
              flavor, and love
            </p>
          </div>

          {/* <!-- Menu Category Cards - Grid --> */}
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-menu-grid=""
          >
            {/* <!-- Classic Burger --> */}
            <div
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all  transform hover:-translate-y-3 cursor-pointer light_color translate-y-8 duration-700 ease-out delay-300"
              data-menu-card=""
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2189213548.jpg?w=768"
                  alt="Classic burger with melted cheese and fresh toppings"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-color text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <i className="fa-solid fa-fire" aria-hidden="true"></i> Best
                    Seller
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark_text font-heading">
                    Classic Burger
                  </h3>
                  <span className="text-2xl">🍔</span>
                </div>
                <p className="text-gray_text text-sm mb-4">
                  Juicy beef, fresh lettuce, ripe tomatoes, and our secret sauce
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray_text text-xs">
                    <i className="fa-solid fa-clock" aria-hidden="true"></i>
                    <span>8 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Double Stack --> */}
            <div
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 cursor-pointer light_color translate-y-8 duration-700 ease-out delay-400"
              data-menu-card=""
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2220909949.jpg?w=768"
                  alt="Double cheeseburger with fresh ingredients isolated"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent4 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <i className="fa-solid fa-star" aria-hidden="true"></i>{" "}
                    Chef's Choice
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark_text font-heading">
                    Double Stack
                  </h3>
                  <span className="text-2xl">🔥</span>
                </div>
                <p className="text-gray_text text-sm mb-4">
                  Two beef patties, double cheese, crispy bacon, caramelized
                  onions
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray_text text-xs">
                    <i className="fa-solid fa-clock" aria-hidden="true"></i>
                    <span>12 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Loaded Fries --> */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-3 cursor-pointer light_color translate-y-8 duration-700 ease-out delay-500">
              <div className="relative overflow-hidden h-48">
                <img
                  src="https://assets.ls-assets.com/provider/istock/1400656321.jpg?w=768"
                  alt="Homemade cheese smash burger with fries and pickles"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-accent3 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <i className="fa-solid fa-bolt" aria-hidden="true"></i>{" "}
                    Popular
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark_text font-heading">
                    Loaded Fries
                  </h3>
                  <span className="text-2xl">🍟</span>
                </div>
                <p className="text-gray_text text-sm mb-4">
                  Crispy golden fries loaded with cheese, bacon, and special
                  sauce
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray_text text-xs">
                    <i className="fa-solid fa-clock" aria-hidden="true"></i>
                    <span>6 min</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Fresh Shakes --> */}
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all  transform hover:-translate-y-3 cursor-pointer light_color translate-y-8 duration-700 ease-out delay-600">
              <div className="relative overflow-hidden h-48">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2160995777.jpg?w=768"
                  alt="Colorful milkshakes and smoothies with fresh fruits"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-[#e91e63] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <i className="fa-solid fa-heart" aria-hidden="true"></i>{" "}
                    Sweet Treat
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark_text font-heading">
                    Fresh Shakes
                  </h3>
                  <span className="text-2xl">🥤</span>
                </div>
                <p className="text-gray_text text-sm mb-4">
                  Thick, creamy milkshakes with real fruit and premium ice cream
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray_text text-xs">
                    <i className="fa-solid fa-clock" aria-hidden="true"></i>
                    <span>5 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Stats Banner --> */}
          <div className="mt-16 bg-gradient-to-r from-primary-color via-accent3 to-primary-color rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden light_color translate-y-8 transition-all duration-700 ease-out delay-700">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="relative flex flex-wrap justify-center gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 font-heading">
                  20+
                </div>
                <div className="text-white/80 text-sm">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 font-heading">
                  500+
                </div>
                <div className="text-white/80 text-sm">Happy Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 font-heading">
                  4.9
                </div>
                <div className="text-white/80 text-sm">Avg Rating</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2 font-heading">
                  5★
                </div>
                <div className="text-white/80 text-sm">5-Star Reviews</div>
              </div>
            </div>
          </div>

          {/* <!-- View Full Menu CTA --> */}
          <div className="text-center mt-12 light_color translate-y-8 transition-all duration-700 ease-out delay-800">
            <a
              href="/menu"
              className="inline-flex items-center gap-4 px-10 py-5 bg-dark_text text-white font-bold rounded-full hover:bg-dark_text transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg group"
            >
              <span>Explore Full Menu</span>
              <div className="w-10 h-10 bg-primary-color rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-dark_text transition-all">
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </div>
            </a>
            <p className="mt-4 text-gray_text text-sm">
              Over 20 delicious items to choose from
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

export default function OurVibe() {
  return (
    <>
      <section className="code-section relative overflow-hidden" id="sgqq3hk">
        {/* <!-- Background --> */}
        <div className="absolute inset-0 bg-dark_bg"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* <!-- Content --> */}
            <div className="order-2 lg:order-1">
              <span className="inline-block text-primary-color font-semibold tracking-wider uppercase text-sm mb-4 font-body">
                Our Vibe
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-heading">
                Casual. Cozy.
                <br />
                <span className="text-primary-color">Trendy.</span>
              </h2>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-body">
                Step into Nice Burger and feel right at home. Whether you're
                grabbing a quick bite alone, catching up with friends, or
                bringing the whole family, our warm and inviting atmosphere
                makes every visit special.
              </p>

              {/* <!-- Location Info --> */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-color rounded-xl flex items-center justify-center">
                    <i
                      className="fa-solid fa-location-dot text-white text-xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      Easy to Find
                    </h4>
                    <p className="text-gray-400">
                      Located directly in front of Galma Abba Geda Hall, Bale
                      Robe
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full">
                    <i
                      className="fa-solid fa-mountain text-primary-color"
                      aria-hidden="true"
                    ></i>
                    Near Bale Mountains
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full">
                    <i
                      className="fa-solid fa-mosque text-primary-color"
                      aria-hidden="true"
                    ></i>
                    Close to Sof Omar
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/location"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-color text-white font-semibold btn-rounded hover:bg-primary_btn_hover__color transition-all"
                >
                  <i
                    className="fa-solid fa-map-location-dot"
                    aria-hidden="true"
                  ></i>
                  Get Directions
                </a>
                <a
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold btn-rounded hover:bg-white hover:text-dark_text transition-all border border-white/20"
                >
                  <i className="fa-solid fa-images" aria-hidden="true"></i>
                  View Gallery
                </a>
              </div>
            </div>

            {/* <!-- Image Grid --> */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://assets.ls-assets.com/provider/istock/2210769546.jpg?w=768"
                      alt="Delicious cheeseburger close-up"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://assets.ls-assets.com/provider/istock/2183250511.jpg?w=768"
                      alt="Fresh american cheeseburger"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://assets.ls-assets.com/provider/istock/2161955867.jpg?w=768"
                      alt="Angus cheese egg burger"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://assets.ls-assets.com/provider/istock/2256400485.jpg?w=768"
                      alt="Grilled beef and lamb hamburger"
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Decorative Elements --> */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-color rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";

export default function WhyUs() {
  return (
    <>
      <section className="code-section bg-white py-16 lg:py-24" id="whyus">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-primary-color font-semibold tracking-wider uppercase text-sm mb-4 font-body">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark_text mb-4 font-heading">
              Why Customers <span className="text-primary-color">Love</span> Us
            </h2>
            <p className="text-gray_text text-lg max-w-2xl mx-auto font-body">
              Discover what makes Nice Burger the go-to destination for burger
              lovers in Bale Robe
            </p>
          </div>

          {/* <!-- Features Grid --> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* <!-- 5.0 Star Rating --> */}
            <div className="group bg-light_color rounded-2xl p-8 hover:bg-primary-color transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <div className="flex text-accent text-2xl">
                  <i className="fa-solid fa-star" aria-hidden="true"></i>
                  <i className="fa-solid fa-star" aria-hidden="true"></i>
                  <i className="fa-solid fa-star" aria-hidden="true"></i>
                  <i className="fa-solid fa-star" aria-hidden="true"></i>
                  <i className="fa-solid fa-star" aria-hidden="true"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark_text mb-2 group-hover:text-white transition-colors font-heading">
                5.0 Star Rating
              </h3>
              <p className="text-gray_text group-hover:text-white/80 transition-colors">
                Consistently rated 5 stars by our happy customers
              </p>
            </div>

            {/* <!-- Premium Quality Beef --> */}
            <div className="group bg-light_color rounded-2xl p-8 hover:bg-primary-color transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <i
                  className="fa-solid fa-cow text-primary-color text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-xl font-bold text-dark_text mb-2 group-hover:text-white transition-colors font-heading">
                Premium Quality Beef
              </h3>
              <p className="text-gray_text group-hover:text-white/80 transition-colors">
                Sourced from trusted suppliers, never frozen, always fresh
              </p>
            </div>

            {/* <!-- Fresh Juices Daily --> */}
            <div className="group bg-light_color rounded-2xl p-8 hover:bg-primary-color transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <i
                  className="fa-solid fa-glass-water text-accent text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-xl font-bold text-dark_text mb-2 group-hover:text-white transition-colors font-heading">
                Fresh Juices Daily
              </h3>
              <p className="text-gray_text group-hover:text-white/80 transition-colors">
                Hand-squeezed juices made fresh every single day
              </p>
            </div>

            {/* <!-- Free Parking --> */}
            <div className="group bg-light_color rounded-2xl p-8 hover:bg-primary-color transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <i
                  className="fa-solid fa-square-parking text-accent text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-xl font-bold text-dark_text mb-2 group-hover:text-white transition- font-heading">
                Free Parking
              </h3>
              <p className="text-gray_text group-hover:text-white/80 transition-colors">
                Convenient free parking right at our doorstep
              </p>
            </div>

            {/* <!-- Wheelchair Accessible --> */}
            <div className="group bg-light_color rounded-2xl p-8 hover:bg-primary-color transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <i
                  className="fa-solid fa-wheelchair text-accent4 text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-xl font-bold text-dark_text mb-2 group-hover:text-white transition-colors font-heading">
                Wheelchair Accessible
              </h3>
              <p className="text-gray_text group-hover:text-white/80 transition-colors">
                Fully accessible for all our valued customers
              </p>
            </div>

            {/* <!-- Family-Friendly --> */}
            <div className="group bg-light_color rounded-2xl p-8 hover:bg-primary-color transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                <i
                  className="fa-solid fa-users text-primary-color text-2xl group-hover:text-white transition-colors"
                  aria-hidden="true"
                ></i>
              </div>
              <h3 className="text-xl font-bold text-dark_text mb-2 group-hover:text-white transition-colors font-heading">
                Family-Friendly
              </h3>
              <p className="text-gray_text group-hover:text-white/80 transition-colors">
                Perfect atmosphere for families and groups of all sizes
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

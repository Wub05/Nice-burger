import React from "react";

export default function VisitUs() {
  return (
    <>
      <section
        className="code-section relative overflow-hidden bg-dark_bg"
        id="sdweuhg"
      >
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          {/* <!-- Emoji/Icon --> */}
          <div className="text-6xl mb-6">🍔</div>

          {/* <!-- Headline --> */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight font-heading">
            Ready for Your
            <br />
            <span className="text-primary-color">Next Favorite Burger?</span>
          </h2>

          {/* <!-- Subtext --> */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-body">
            Join hundreds of happy customers who've made Nice Burger their go-to
            spot for incredible burgers and unforgettable moments.
          </p>

          {/* <!-- CTA Buttons --> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/location"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary-color text-white font-bold btn-rounded hover:bg-primary_btn_hover__color transition-all duration-300 transform hover:scale-105 shadow-xl shadow-orange-500/40 text-lg"
            >
              <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
              Visit Us Today
            </a>
            <a
              href="/reservations"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-dark_text font-bold btn-rounded hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              <i className="fa-solid fa-calendar" aria-hidden="true"></i>
              Reserve Your Spot
            </a>
          </div>

          {/* <!-- Trust Indicators --> */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <div className="flex text-accent2">
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
                <i className="fa-solid fa-star" aria-hidden="true"></i>
              </div>
              <span className="text-white font-medium">5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <i
                className="fa-solid fa-users text-primary-color"
                aria-hidden="true"
              ></i>
              <span>500+ Happy Customers Daily</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <i
                className="fa-solid fa-heart text-red-500"
                aria-hidden="true"
              ></i>
              <span>Made with Love</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

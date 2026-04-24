import React from "react";

export default function Services() {
  return (
    <>
      <section
        className="code-section bg-medium_bg py-16 lg:py-24"
        id="services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-12 lg:mb-16">
            <span className="inline-block text-primary-color font-semibold tracking-wider uppercase text-sm mb-4 font-body">
              How We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark_text mb-4 font-heading">
              Our Services
            </h2>
            <p className="text-gray_text text-lg max-w-2xl mx-auto font-body">
              Choose how you want to enjoy your Nice Burger experience
            </p>
          </div>

          {/* <!-- Services Cards --> */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* <!-- Dine-In --> */}
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-color rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-light_color rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-color transition-colors">
                  <i
                    className="fa-solid fa-utensils text-primary-color text-3xl group-hover:text-white transition-colors"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-2xl font-bold text-dark_text mb-3 font-heading">
                  Dine-In
                </h3>
                <p className="text-gray_text mb-6 leading-relaxed">
                  Enjoy your meal in our cozy, air-conditioned space. Perfect
                  for family gatherings and friend meetups.
                </p>
                <ul className="space-y-2 text-sm text-gray_text">
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Air-conditioned seating
                  </li>
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Free WiFi available
                  </li>
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Kids' play area
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Takeaway --> */}
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              {/* <!-- Popular Badge --> */}
              <div className="absolute top-6 right-6 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                Popular
              </div>
              <div className="relative">
                <div className="w-20 h-20 bg-light_color rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <i
                    className="fa-solid fa-bag-shopping text-primary-color text-3xl group-hover:text-white transition-colors"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-2xl font-bold text-dark_text mb-3 font-heading">
                  Takeaway
                </h3>
                <p className="text-gray_text mb-6 leading-relaxed">
                  Skip the wait! Call ahead to order and pick up your food fresh
                  and ready when you arrive.
                </p>
                <ul className="space-y-2 text-sm text-gray_text">
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Save time
                  </li>
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Fresh preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Just call and pick up
                  </li>
                </ul>
                <a
                  href="/order"
                  className="mt-6 inline-flex items-center gap-2 text-primary-color font-semibold hover:gap-4 transition-all"
                >
                  Order Now
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* <!-- Reservations --> */}
            <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent4 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-light_color rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent4 transition-colors">
                  <i
                    className="fa-solid fa-calendar-check text-primary-color text-3xl group-hover:text-white transition-colors"
                    aria-hidden="true"
                  ></i>
                </div>
                <h3 className="text-2xl font-bold text-dark_text mb-3 font-heading">
                  Reservations
                </h3>
                <p className="text-gray_text mb-6 leading-relaxed">
                  Planning a special occasion? Book your table in advance and
                  we'll have everything ready.
                </p>
                <ul className="space-y-2 text-sm text-gray_text">
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Group bookings welcome
                  </li>
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Special celebrations
                  </li>
                  <li className="flex items-center gap-2">
                    <i
                      className="fa-solid fa-check text-accent"
                      aria-hidden="true"
                    ></i>
                    Corporate events
                  </li>
                </ul>
                <a
                  href="/reservations"
                  className="mt-6 inline-flex items-center gap-2 text-primary-color font-semibold hover:gap-4 transition-all"
                >
                  Book a Table
                  <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

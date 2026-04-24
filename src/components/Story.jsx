export default function Story() {
  return (
    <>
      <section className="code-section bg-white py-16 lg:py-24" id="story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* <!-- Image Side --> */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://assets.ls-assets.com/provider/istock/2220247334.jpg?w=1200"
                  alt="Gourmet burger with sesame seed bun"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* <!-- Decorative Element --> */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary_btn_hover__color rounded-2xl -z-10 opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent rounded-full -z-10 opacity-20"></div>

              {/* <!-- Stats Card --> */}
              <div className="absolute -bottom-8 -left-4 lg:-left-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="text-3xl lg:text-4xl font-bold text-primary_btn_hover__color font-heading">
                  500+
                </div>
                <div className="text-gray_text text-sm font-heading">
                  Happy Customers Daily
                </div>
              </div>
            </div>

            {/* <!-- Content Side --> */}
            <div>
              <span className="inline-block text-primary_btn_hover__color font-semibold tracking-wider uppercase text-sm mb-4 font-body">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark_text mb-6 leading-tight font-body">
                At Nice Burger,
                <br />
                <span className="text-primary_btn_hover__color">
                  We Don't Just Serve Food
                </span>
                <br />— We Create Moments
              </h2>

              <p className="text-gray_text text-lg mb-8 leading-relaxed font-body">
                Located in the heart of Bale Robe, right in front of Galma Abba
                Geda Hall, we've been serving up delicious burgers that bring
                people together. Every patty is crafted from premium quality
                beef, packed with flavor, and served with love.
              </p>

              {/* <!-- Features --> */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8  font-body">
                <div className="flex items-start gap-4 ">
                  <div className="flex-shrink-0 w-12 h-12 bg-light_color rounded-lg flex items-center justify-center">
                    <i
                      className="fa-solid fa-leaf text-accent text-xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark_text mb-1">
                      Fresh Ingredients
                    </h4>
                    <p className="text-sm text-gray_text">
                      Locally sourced, farm-fresh produce daily
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-light_color rounded-lg flex items-center justify-center">
                    <i
                      className="fa-solid fa-fire text-primary_btn_hover__color text-xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark_text mb-1">
                      Premium Beef
                    </h4>
                    <p className="text-sm text-gray_text">
                      High-quality beef patties, every time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg- rounded-lg flex items-center justify-center bg-light_color">
                    <i
                      className="fa-solid fa-drumstick-bite text-accent3  text-xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark_text mb-1">
                      Generous Portions
                    </h4>
                    <p className="text-sm text-gray_text">
                      Big burgers that fill you up right
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-light_color rounded-lg flex items-center justify-center">
                    <i
                      className="fa-solid fa-heart text-red-500 text-xl"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark_text mb-1">
                      Made with Love
                    </h4>
                    <p className="text-sm text-gray_text">
                      Passion in every bite we serve
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="/about"
                className="inline-flex items-center gap-2 text-primary_btn_hover__color font-semibold hover:gap-4 transition-all"
              >
                Learn More About Us
                <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Footer() {
  return (
    <>
      <footer
        id="global-footer"
        className="code-section bg-[#2C2C2C] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* <!-- Brand Column --> */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/" className="inline-block mb-6" data-logo="">
                <img
                  src="https://assets.ls-assets.com/uploads/ee9de30d-b78d-494b-8d41-a4ed2ba6bf71/b10b487e-0d57-47ac-818e-15cb99866661.png?w=768"
                  alt="Nice Burger Logo"
                  className="h-12 w-auto brightness-0 invert"
                />
              </a>
              <p className="text-gray-400 mb-6 leading-relaxed font-body">
                Serving the best burgers in Bale Robe since day one. Fresh
                ingredients, generous portions, unforgettable taste.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-color transition-colors"
                >
                  <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-color transition-colors"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-color transition-colors"
                >
                  <i className="fa-brands fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-color transition-colors"
                >
                  <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* <!-- Quick Links --> */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-heading">
                Quick Links
              </h4>
              <nav className="space-y-3">
                <a
                  href="/menu"
                  className="block text-gray-400 hover:text-primary-color transition-colors font-body"
                >
                  Menu
                </a>
                <a
                  href="/about"
                  className="block text-gray-400 hover:text-primary-color transition-colors font-body"
                >
                  About Us
                </a>
                <a
                  href="/gallery"
                  className="block text-gray-400 hover:text-primary-color transition-colors font-body"
                >
                  Gallery
                </a>
                <a
                  href="/location"
                  className="block text-gray-400 hover:text-primary-color transition-colors font-body"
                >
                  Location
                </a>
              </nav>
            </div>

            {/* <!-- Services --> */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-heading">Services</h4>
              <nav className="space-y-3">
                <a
                  href="/order"
                  className="block text-gray-400 hover:text-primary-color transition-colors font-body"
                >
                  Order Ahead
                </a>
                <a
                  href="/reservations"
                  className="block text-gray-400 hover:text-primary-color transition-colors font-body"
                >
                  Reservations
                </a>
                <a
                  href="/contact"
                  className="block text-gray-400 hover:text-primary-color transition-colors font-body"
                >
                  Contact Us
                </a>
              </nav>
            </div>

            {/* <!-- Contact Info --> */}
            <div>
              <h4 className="text-lg font-bold mb-6 font-heading">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i
                    className="fa-solid fa-location-dot text-primary-color mt-1"
                    aria-hidden="true"
                  ></i>
                  <p className="text-gray-400 font-body">
                    In front of Galma Abba Geda Hall, Bale Robe
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <i
                    className="fa-solid fa-phone text-primary-color"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="tel:+251900000000"
                    className="text-gray-400 hover:text-primary-color transition-colors font-body"
                  >
                    +251 900 000 000
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <i
                    className="fa-solid fa-envelope text-primary-color"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="mailto:hello@niceburger.com"
                    className="text-gray-400 hover:text-primary-color transition-colors font-body"
                  >
                    hello@niceburger.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Bottom Bar --> */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm text-center sm:text-left font-body">
                © 2026 Nice Burger. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

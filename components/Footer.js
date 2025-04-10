function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white" data-id="rm8ogk6ta" data-path="components/Footer.js">
      <div className="container mx-auto px-4 py-12" data-id="qy2elkmhd" data-path="components/Footer.js">
        {/* Newsletter Signup */}
        <div className="bg-blue-600 rounded-xl shadow-xl p-6 mb-12 transform hover:scale-[1.01] transition-transform" data-id="wsuedzglv" data-path="components/Footer.js">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" data-id="a16q65bzp" data-path="components/Footer.js">
            <div data-id="c42x8559y" data-path="components/Footer.js">
              <h3 className="text-xl font-bold mb-2 text-white" data-id="fdp493gss" data-path="components/Footer.js">Stay Updated on Currency Trends</h3>
              <p className="text-blue-100" data-id="pf9fz6gmt" data-path="components/Footer.js">
                Subscribe to our newsletter for market insights, rate alerts, and exclusive tips.
              </p>
            </div>
            <div data-id="27c1j6mlu" data-path="components/Footer.js">
              <form className="flex flex-col sm:flex-row gap-2" data-id="rw27d1z4i" data-path="components/Footer.js">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300" data-id="zvv1ztpbx" data-path="components/Footer.js" />

                <button
                  type="submit"
                  className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors" data-id="1mepf0n9o" data-path="components/Footer.js">

                  Subscribe
                </button>
              </form>
              <p className="text-xs text-blue-200 mt-2" data-id="q9ees26w9" data-path="components/Footer.js">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12" data-id="uli3dnopo" data-path="components/Footer.js">
          <div className="space-y-4" data-id="orehyc1d5" data-path="components/Footer.js">
            <div className="flex items-center mb-4" data-id="hvpiy1dxv" data-path="components/Footer.js">
              <i className="fas fa-exchange-alt text-blue-400 text-2xl mr-2" data-id="uhqbein9x" data-path="components/Footer.js"></i>
              <h3 className="text-xl font-bold" data-id="gijz8q2zr" data-path="components/Footer.js">Global Exchange</h3>
            </div>
            <p className="text-gray-400 text-sm" data-id="t1uz1hiui" data-path="components/Footer.js">
              Stay up to date with the latest currency exchange rates and convert between world currencies with ease.
              Trusted by millions of users worldwide for accurate and timely financial data.
            </p>
            <div className="mt-6 flex space-x-4" data-id="3b5bp2so5" data-path="components/Footer.js">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" data-id="18h9zc134" data-path="components/Footer.js">
                <i className="fab fa-twitter" data-id="klo98af5t" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" data-id="bltjt0t6e" data-path="components/Footer.js">
                <i className="fab fa-facebook-f" data-id="uyp2lso2c" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" data-id="mut7k7dge" data-path="components/Footer.js">
                <i className="fab fa-instagram" data-id="xvie3rw61" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300" data-id="7ceus24o6" data-path="components/Footer.js">
                <i className="fab fa-linkedin-in" data-id="qh0rcoida" data-path="components/Footer.js"></i>
              </a>
            </div>
          </div>
          
          <div data-id="x9n0whsum" data-path="components/Footer.js">
            <h4 className="text-lg font-semibold mb-4 text-white" data-id="0seveczc8" data-path="components/Footer.js">Quick Links</h4>
            <ul className="space-y-3" data-id="jva8fgv6m" data-path="components/Footer.js">
              <li data-id="dp33jggbd" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('home');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="0gf1zhhvb" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="vw46qg3wy" data-path="components/Footer.js"></i>
                  Currency Converter
                </a>
              </li>
              <li data-id="9pobnqxo7" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('rates');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="lwmx0p7sw" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="769935ais" data-path="components/Footer.js"></i>
                  Exchange Rates
                </a>
              </li>
              <li data-id="wx6n9q87j" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('history');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="zaabfwy7p" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="eezjie8ba" data-path="components/Footer.js"></i>
                  Historical Rates
                </a>
              </li>
              <li data-id="3h48lb5n2" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('guide');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="mtolnemcm" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="acxapdqt0" data-path="components/Footer.js"></i>
                  Currency Guide
                </a>
              </li>
              <li data-id="5jam9wgqy" data-path="components/Footer.js">
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="m9fmo0ljh" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="1y512e48n" data-path="components/Footer.js"></i>
                  Currency News
                </a>
              </li>
              <li data-id="q77fjlgie" data-path="components/Footer.js">
                <a href="/rss.xml" target="_blank" className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="shtgkd0z6" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="pr7ka9w4l" data-path="components/Footer.js"></i>
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
          
          <div data-id="emx9mx9ie" data-path="components/Footer.js">
            <h4 className="text-lg font-semibold mb-4 text-white" data-id="fxoqie8nr" data-path="components/Footer.js">Company</h4>
            <ul className="space-y-3" data-id="xllkhyl7p" data-path="components/Footer.js">
              <li data-id="evg72p1p1" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('about');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="nn20ulhkn" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="btjbqiacv" data-path="components/Footer.js"></i>
                  About Us
                </a>
              </li>
              <li data-id="nrvvjdv1c" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('contact');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="hiwoptkb4" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="p9kmtu188" data-path="components/Footer.js"></i>
                  Contact Us
                </a>
              </li>
              <li data-id="a4l6u2c5e" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('faq');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="uvnfygo3j" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="ps69d7gil" data-path="components/Footer.js"></i>
                  FAQ
                </a>
              </li>
              <li data-id="bjcv6smo2" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('terms');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="2ephj8qa9" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="94uq3ibw2" data-path="components/Footer.js"></i>
                  Terms of Service
                </a>
              </li>
              <li data-id="7ynda9xtg" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('privacy');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="s0t8yj484" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="kww2elr7u" data-path="components/Footer.js"></i>
                  Privacy Policy
                </a>
              </li>
              <li data-id="6ymp8b342" data-path="components/Footer.js">
                <a href="#" onClick={(e) => {e.preventDefault();setActivePage('disclaimer');}}
                className="text-gray-400 hover:text-white transition-colors flex items-center" data-id="g2gwc06ub" data-path="components/Footer.js">
                  <i className="fas fa-chevron-right text-xs mr-2 text-blue-400" data-id="jthehb40q" data-path="components/Footer.js"></i>
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div data-id="a58em4rdo" data-path="components/Footer.js">
            <h4 className="text-lg font-semibold mb-4 text-white" data-id="wxyj6px3l" data-path="components/Footer.js">Contact Us</h4>
            <div className="space-y-4 text-gray-400" data-id="g3j02p227" data-path="components/Footer.js">
              <div className="flex items-start" data-id="95nu8v6j3" data-path="components/Footer.js">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400" data-id="08tu57zsx" data-path="components/Footer.js"></i>
                <span data-id="z8fwnv6pn" data-path="components/Footer.js">1234 Currency Street, Financial District, NY 10004, United States</span>
              </div>
              <div className="flex items-start" data-id="sez6r4lfh" data-path="components/Footer.js">
                <i className="fas fa-envelope mt-1 mr-3 text-blue-400" data-id="ugvrbpjfa" data-path="components/Footer.js"></i>
                <span data-id="3mryrosw2" data-path="components/Footer.js">info@globalexchange.com</span>
              </div>
              <div className="flex items-start" data-id="h7li11obd" data-path="components/Footer.js">
                <i className="fas fa-phone mt-1 mr-3 text-blue-400" data-id="9hs17nt20" data-path="components/Footer.js"></i>
                <span data-id="zgm90ucfd" data-path="components/Footer.js">+1 (123) 456-7890</span>
              </div>
              <div className="flex items-start" data-id="qsvrea51r" data-path="components/Footer.js">
                <i className="fas fa-headset mt-1 mr-3 text-blue-400" data-id="u25jj7ef3" data-path="components/Footer.js"></i>
                <span data-id="9azfos9pn" data-path="components/Footer.js">Customer Support:<br data-id="ygijuio33" data-path="components/Footer.js" />Mon-Fri 9am-5pm EST</span>
              </div>
            
            </div>
          </div>
        </div>
               
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center" data-id="ozuifn17i" data-path="components/Footer.js">
          <p className="text-gray-400 text-sm" data-id="2ugzy3db4" data-path="components/Footer.js">
            &copy; {currentYear} Global Exchange. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4" data-id="n8ph1fn1o" data-path="components/Footer.js">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" data-id="f6ptx8jpa" data-path="components/Footer.js">Privacy Policy</a>
            <span className="text-gray-600" data-id="7yut3icam" data-path="components/Footer.js">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" data-id="zlnj5yzw3" data-path="components/Footer.js">Terms of Service</a>
            <span className="text-gray-600" data-id="fpp2fdvcy" data-path="components/Footer.js">|</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" data-id="yp2zwcr7m" data-path="components/Footer.js">Disclaimer</a>
            <span className="text-gray-600" data-id="fdhku97ns" data-path="components/Footer.js">|</span>
            <a href="/sitemap.xml" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm" data-id="1q5mz31ov" data-path="components/Footer.js">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>);

}
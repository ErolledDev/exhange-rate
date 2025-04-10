const { useState, useEffect } = React;

function Navbar({ onCurrencyChange, baseCurrency, activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCurrencies, setShowAllCurrencies] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Add scroll effect
  const [scrolled, setScrolled] = useState(false);

  // Get the full list of currencies but show only popular ones by default
  const allCurrencies = getPopularCurrencies();
  const popularCurrencies = allCurrencies.slice(0, 12);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCurrencyDropdown = () => {
    setShowCurrencyDropdown(!showCurrencyDropdown);
    // Close other dropdowns
    setShowMoreMenu(false);
  };

  const toggleMoreMenu = () => {
    setShowMoreMenu(!showMoreMenu);
    // Close other dropdowns
    setShowCurrencyDropdown(false);
  };

  const handleCurrencySelect = (currency) => {
    onCurrencyChange(currency);
    setShowCurrencyDropdown(false);
  };

  const isActive = (page) => {
    return activePage === page ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600';
  };

  return (
    <nav className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`} data-id="hyze6ewd7" data-path="components/Navbar.js">
      <div className="container mx-auto px-4" data-id="tl22em7kh" data-path="components/Navbar.js">
        <div className="flex justify-between items-center" data-id="fx47ba4px" data-path="components/Navbar.js">
          <div className="flex items-center" data-id="ebvh81n6p" data-path="components/Navbar.js">
            <a
              href="#"
              onClick={(e) => {e.preventDefault();setActivePage('home');}}
              className="flex items-center group" data-id="f34lekktf" data-path="components/Navbar.js">

              <i className="fas fa-exchange-alt text-blue-600 text-2xl mr-2 group-hover:scale-110 transition-transform" data-id="qp6t4yf1b" data-path="components/Navbar.js"></i>
              <span className="font-bold text-xl text-gray-800" data-id="rtxfk9etw" data-path="components/Navbar.js">Global Exchange</span>
            </a>
          </div>
          
          {/* Base Currency Selector - Always visible */}
          <div className="hidden md:flex items-center ml-8" data-id="ict7q0rp6" data-path="components/Navbar.js">
            <div className="relative" data-id="c8cgohnk0" data-path="components/Navbar.js">
              <button
                onClick={toggleCurrencyDropdown}
                className="flex items-center px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 focus:outline-none" data-id="s1dtnrlpo" data-path="components/Navbar.js">

                <span className="mr-1" data-id="uyzuhc5qo" data-path="components/Navbar.js">{getCurrencyInfo(baseCurrency).flag}</span>
                <span className="font-medium" data-id="89vln4w0a" data-path="components/Navbar.js">{baseCurrency}</span>
                <i className="fas fa-chevron-down ml-1 text-xs" data-id="2umee8ftz" data-path="components/Navbar.js"></i>
              </button>
              
              {showCurrencyDropdown &&
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-20 max-h-96 overflow-y-auto" data-id="q38g0uz0c" data-path="components/Navbar.js">
                  <div className="sticky top-0 bg-white p-2 border-b border-gray-200" data-id="search-container" data-path="components/Navbar.js">
                    <div className="relative" data-id="3z3migx2n" data-path="components/Navbar.js">
                      <input
                      type="text"
                      placeholder="Search currencies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 pr-8 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" data-id="06zr5fcvz" data-path="components/Navbar.js" />

                      <div className="absolute right-3 top-2.5 text-gray-400" data-id="1kj01n0x3" data-path="components/Navbar.js">
                        <i className="fas fa-search" data-id="8l0vr3ykq" data-path="components/Navbar.js"></i>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-1" data-id="yc73c3beu" data-path="components/Navbar.js">
                    {/* Show popular currencies if no search query, otherwise filter all currencies */}
                    {(!searchQuery && !showAllCurrencies ? popularCurrencies : allCurrencies.filter((currency) => {
                    const query = searchQuery.toLowerCase();
                    return currency.code.toLowerCase().includes(query) ||
                    currency.name.toLowerCase().includes(query);
                  })).map((currency) =>
                  <button
                    key={currency.code}
                    onClick={() => handleCurrencySelect(currency.code)}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" data-id="j6673fkes" data-path="components/Navbar.js">
                          <span className="mr-2" data-id="qzebh0bwk" data-path="components/Navbar.js">{currency.flag}</span>
                          <span data-id="b5ufolj9t" data-path="components/Navbar.js">{currency.code} - {currency.name}</span>
                      </button>
                  )}
                    
                    {!searchQuery && !showAllCurrencies &&
                  <div className="px-4 py-2 border-t border-gray-100" data-id="747iuy1wk" data-path="components/Navbar.js">
                        <button
                      onClick={() => setShowAllCurrencies(true)}
                      className="text-blue-600 text-sm font-medium hover:text-blue-800 flex items-center w-full" data-id="aokqsdixp" data-path="components/Navbar.js">
                          <i className="fas fa-globe mr-2" data-id="j8kt5e3yg" data-path="components/Navbar.js"></i> Show all currencies
                        </button>
                      </div>
                  }
                  </div>
                </div>
              }
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6" data-id="8njrzzfl7" data-path="components/Navbar.js">
            <a
              href="#"
              onClick={(e) => {e.preventDefault();setActivePage('home');}}
              className={`py-2 px-1 transition-colors duration-200 ${isActive('home')}`} data-id="exm70v0e1" data-path="components/Navbar.js">
              <i className="fas fa-calculator mr-1 text-blue-500" data-id="enup0z8f8" data-path="components/Navbar.js"></i> Converter
            </a>
            <a
              href="#"
              onClick={(e) => {e.preventDefault();setActivePage('rates');}}
              className={`py-2 px-1 transition-colors duration-200 ${isActive('rates')}`} data-id="f0qg37bv0" data-path="components/Navbar.js">
              <i className="fas fa-chart-line mr-1 text-blue-500" data-id="6ks1xwblj" data-path="components/Navbar.js"></i> Exchange Rates
            </a>
            <a
              href="#"
              onClick={(e) => {e.preventDefault();setActivePage('history');}}
              className={`py-2 px-1 transition-colors duration-200 ${isActive('history')}`} data-id="spo6njav3" data-path="components/Navbar.js">
              <i className="fas fa-history mr-1 text-blue-500" data-id="wmu4p8njz" data-path="components/Navbar.js"></i> Historical Rates
            </a>
            <a
              href="#"
              onClick={(e) => {e.preventDefault();setActivePage('guide');}}
              className={`py-2 px-1 transition-colors duration-200 ${isActive('guide')}`} data-id="v07x05kcp" data-path="components/Navbar.js">
              <i className="fas fa-book mr-1 text-blue-500" data-id="fiwg8d7j3" data-path="components/Navbar.js"></i> Guide
            </a>
            
            {/* More dropdown */}
            <div className="relative" data-id="m3e1a3svl" data-path="components/Navbar.js">
              <button
                onClick={toggleMoreMenu}
                className="py-2 px-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center" data-id="uezcst0t2" data-path="components/Navbar.js">
                More <i className="fas fa-chevron-down ml-1 text-xs" data-id="20vj6lv9h" data-path="components/Navbar.js"></i>
              </button>
              
              {showMoreMenu &&
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20 py-1" data-id="t5qngdu44" data-path="components/Navbar.js">
                  <a
                  href="#"
                  onClick={(e) => {e.preventDefault();setActivePage('about');setShowMoreMenu(false);}}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" data-id="llawh3i9o" data-path="components/Navbar.js">
                    <i className="fas fa-info-circle mr-2 text-blue-500" data-id="kixmocxb6" data-path="components/Navbar.js"></i> About Us
                  </a>
                  <a
                  href="#"
                  onClick={(e) => {e.preventDefault();setActivePage('contact');setShowMoreMenu(false);}}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" data-id="0k02cpe4j" data-path="components/Navbar.js">
                    <i className="fas fa-envelope mr-2 text-blue-500" data-id="tvj6uqzbp" data-path="components/Navbar.js"></i> Contact
                  </a>
                  <a
                  href="#"
                  onClick={(e) => {e.preventDefault();setActivePage('faq');setShowMoreMenu(false);}}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" data-id="biaihjnq6" data-path="components/Navbar.js">
                    <i className="fas fa-question-circle mr-2 text-blue-500" data-id="uroh01zyr" data-path="components/Navbar.js"></i> FAQ
                  </a>
                  <div className="border-t border-gray-100 my-1" data-id="ebeccxed1" data-path="components/Navbar.js"></div>
                  <a
                  href="#"
                  onClick={(e) => {e.preventDefault();setActivePage('terms');setShowMoreMenu(false);}}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" data-id="nids00ox1" data-path="components/Navbar.js">
                    <i className="fas fa-file-contract mr-2 text-gray-500" data-id="90b9k5dyt" data-path="components/Navbar.js"></i> Terms of Service
                  </a>
                  <a
                  href="#"
                  onClick={(e) => {e.preventDefault();setActivePage('privacy');setShowMoreMenu(false);}}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" data-id="iygl8ykmv" data-path="components/Navbar.js">
                    <i className="fas fa-shield-alt mr-2 text-gray-500" data-id="b0q3lzrx0" data-path="components/Navbar.js"></i> Privacy Policy
                  </a>
                  <a
                  href="#"
                  onClick={(e) => {e.preventDefault();setActivePage('disclaimer');setShowMoreMenu(false);}}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" data-id="7g8qhtp1e" data-path="components/Navbar.js">
                    <i className="fas fa-exclamation-triangle mr-2 text-gray-500" data-id="o316j3hly" data-path="components/Navbar.js"></i> Disclaimer
                  </a>
                </div>
              }
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center" data-id="qfg7e1hv1" data-path="components/Navbar.js">
            <button
              onClick={toggleNavbar}
              className="text-gray-500 hover:text-gray-600 focus:outline-none" data-id="qetedazcx" data-path="components/Navbar.js">

              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`} data-id="s0gkg7tat" data-path="components/Navbar.js"></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen &&
        <div className="md:hidden py-3" data-id="f5ckrr2ms" data-path="components/Navbar.js">
            <div className="flex flex-col space-y-2" data-id="hu1eunazo" data-path="components/Navbar.js">
              <a
              href="#"
              className={`px-3 py-2 rounded-md ${isActive('home') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={(e) => {e.preventDefault();setActivePage('home');setIsOpen(false);}} data-id="rn4tza44d" data-path="components/Navbar.js">
                <i className="fas fa-calculator mr-2 text-blue-500" data-id="8a21ktsoj" data-path="components/Navbar.js"></i>
                Converter
              </a>
              <a
              href="#"
              className={`px-3 py-2 rounded-md ${isActive('rates') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={(e) => {e.preventDefault();setActivePage('rates');setIsOpen(false);}} data-id="btq2mjqv7" data-path="components/Navbar.js">
                <i className="fas fa-chart-line mr-2 text-blue-500" data-id="994bd8ixv" data-path="components/Navbar.js"></i>
                Exchange Rates
              </a>
              <a
              href="#"
              className={`px-3 py-2 rounded-md ${isActive('history') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={(e) => {e.preventDefault();setActivePage('history');setIsOpen(false);}} data-id="1ylv8769e" data-path="components/Navbar.js">
                <i className="fas fa-history mr-2 text-blue-500" data-id="zb8ojvwcs" data-path="components/Navbar.js"></i>
                Historical Rates
              </a>
              <a
              href="#"
              className={`px-3 py-2 rounded-md ${isActive('guide') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
              onClick={(e) => {e.preventDefault();setActivePage('guide');setIsOpen(false);}} data-id="w0hy214rf" data-path="components/Navbar.js">
                <i className="fas fa-book mr-2 text-blue-500" data-id="pcoq19peo" data-path="components/Navbar.js"></i>
                Currency Guide
              </a>
              
              <div className="border-t border-gray-200 my-2 pt-2" data-id="eh20hart8" data-path="components/Navbar.js">
                <a
                href="#"
                className={`px-3 py-2 rounded-md ${isActive('about') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={(e) => {e.preventDefault();setActivePage('about');setIsOpen(false);}} data-id="z3ys0b9mi" data-path="components/Navbar.js">
                  <i className="fas fa-info-circle mr-2 text-blue-500" data-id="pvldkfuuk" data-path="components/Navbar.js"></i>
                  About Us
                </a>
                <a
                href="#"
                className={`px-3 py-2 rounded-md ${isActive('contact') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={(e) => {e.preventDefault();setActivePage('contact');setIsOpen(false);}} data-id="filhjyiw2" data-path="components/Navbar.js">
                  <i className="fas fa-envelope mr-2 text-blue-500" data-id="okrhs0vwb" data-path="components/Navbar.js"></i>
                  Contact Us
                </a>
                <a
                href="#"
                className={`px-3 py-2 rounded-md ${isActive('faq') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                onClick={(e) => {e.preventDefault();setActivePage('faq');setIsOpen(false);}} data-id="t500rkypq" data-path="components/Navbar.js">
                  <i className="fas fa-question-circle mr-2 text-blue-500" data-id="g5lfqzegx" data-path="components/Navbar.js"></i>
                  FAQ
                </a>
              </div>
              
              <div className="border-t border-gray-200 my-2 pt-2 text-sm" data-id="g2iadtceq" data-path="components/Navbar.js">
                <a
                href="#"
                className={`px-3 py-2 rounded-md ${isActive('terms') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={(e) => {e.preventDefault();setActivePage('terms');setIsOpen(false);}} data-id="eh73q8m3o" data-path="components/Navbar.js">
                  <i className="fas fa-file-contract mr-2 text-gray-500" data-id="4mq5y7h7t" data-path="components/Navbar.js"></i>
                  Terms of Service
                </a>
                <a
                href="#"
                className={`px-3 py-2 rounded-md ${isActive('privacy') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={(e) => {e.preventDefault();setActivePage('privacy');setIsOpen(false);}} data-id="lwtu8604i" data-path="components/Navbar.js">
                  <i className="fas fa-shield-alt mr-2 text-gray-500" data-id="v50xbcanz" data-path="components/Navbar.js"></i>
                  Privacy Policy
                </a>
                <a
                href="#"
                className={`px-3 py-2 rounded-md ${isActive('disclaimer') ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                onClick={(e) => {e.preventDefault();setActivePage('disclaimer');setIsOpen(false);}} data-id="czzop3fbo" data-path="components/Navbar.js">
                  <i className="fas fa-exclamation-triangle mr-2 text-gray-500" data-id="qwevlt7vs" data-path="components/Navbar.js"></i>
                  Disclaimer
                </a>
              </div>
              
              {/* Mobile Currency Selector */}
              <div className="pt-2 border-t border-gray-200" data-id="eco6xry15" data-path="components/Navbar.js">
                <p className="px-3 text-sm text-gray-500 mb-1" data-id="ofllfe101" data-path="components/Navbar.js">Base Currency:</p>
                <div className="grid grid-cols-3 gap-2 px-3" data-id="gv6ioike7" data-path="components/Navbar.js">
                  {popularCurrencies.map((currency) =>
                <button
                  key={currency.code}
                  onClick={() => {
                    handleCurrencySelect(currency.code);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-center px-3 py-2 text-sm rounded-md ${
                  baseCurrency === currency.code ?
                  'bg-blue-100 text-blue-600' :
                  'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
                  } data-id="stj5lvqg2" data-path="components/Navbar.js">

                      <span className="mr-1" data-id="4mhagy7yc" data-path="components/Navbar.js">{currency.flag}</span>
                      <span data-id="cxg5wj69m" data-path="components/Navbar.js">{currency.code}</span>
                    </button>
                )}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </nav>);

}
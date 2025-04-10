const { useState, useEffect, useRef } = React;

function Home({ loading, rates, baseCurrency, onCurrencyChange }) {
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    popularRates: useRef(null),
    testimonials: useRef(null),
    news: useRef(null),
    tools: useRef(null),
    partners: useRef(null)
  };

  // Check URL parameters on component mount
  useEffect(() => {
    try {
      const params = getUrlParams();

      // If URL has base currency parameter, update it
      if (params.from && params.from.length === 3) {
        onCurrencyChange(params.from.toUpperCase());
      }

      // Update SEO data for home page
      if (window.seoHelpers) {
        window.seoHelpers.updateSEO('home');
      }
    } catch (error) {
      console.error('Error parsing URL parameters:', error);
    }

    // Setup intersection observer for animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all section refs
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  const topCurrencies = getPopularCurrencies().slice(0, 4);

  const handleQuickConvert = (currency) => {
    setTargetCurrency(currency);
  };

  // Sample news items
  const newsItems = [
  {
    title: "USD Strengthens Against Major Currencies",
    date: "June 15, 2023",
    summary: "The US Dollar gained strength following Federal Reserve announcements about interest rate projections.",
    image: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/100/e2e8f0/334155?text=USD"
  },
  {
    title: "Euro Volatility Expected After ECB Meeting",
    date: "June 14, 2023",
    summary: "Currency traders are preparing for potential Euro volatility following the upcoming European Central Bank policy meeting.",
    image: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/100/e2e8f0/334155?text=EUR"
  },
  {
    title: "Japanese Yen at 6-Month Low Against USD",
    date: "June 12, 2023",
    summary: "The Japanese Yen has reached a 6-month low against the Dollar as Bank of Japan maintains ultra-loose monetary policy.",
    image: "https://usapi.hottask.com/autodev/Image/GetPlaceholder/100/e2e8f0/334155?text=JPY"
  }];


  // Features list
  const features = [
  {
    icon: "fas fa-sync-alt",
    title: "Real-Time Exchange Rates",
    description: "Get the latest exchange rates for all major world currencies, updated multiple times per day."
  },
  {
    icon: "fas fa-calculator",
    title: "Currency Converter",
    description: "Quickly convert between 150+ world currencies with our easy-to-use calculator."
  },
  {
    icon: "fas fa-chart-line",
    title: "Historical Charts",
    description: "View historical exchange rate data with interactive charts to identify trends."
  },
  {
    icon: "fas fa-bell",
    title: "Rate Alerts",
    description: "Set up alerts to notify you when currencies reach your target exchange rate."
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Friendly",
    description: "Access our currency tools on any device - desktop, tablet, or smartphone."
  },
  {
    icon: "fas fa-lock",
    title: "Secure & Private",
    description: "Your privacy is important to us. We don't store your conversion data."
  }];


  // Testimonials
  const testimonials = [
  {
    text: "Global Exchange has been invaluable for my international business transactions. The historical rates feature helps me time my currency exchanges perfectly.",
    author: "Sarah Johnson",
    title: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    text: "As someone who travels frequently, I rely on this site before every trip. The converter is intuitive and the rates are always up-to-date!",
    author: "Michael Chen",
    title: "Travel Blogger",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    text: "The best currency site I've found. I use it daily for my work in finance to keep track of market movements across different currency pairs.",
    author: "Elena Rodriguez",
    title: "Financial Analyst",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }];


  // Partner logos
  const partners = [
  "https://usapi.hottask.com/autodev/Image/GetPlaceholder/160x60/e2e8f0/334155?text=Partner+1",
  "https://usapi.hottask.com/autodev/Image/GetPlaceholder/160x60/e2e8f0/334155?text=Partner+2",
  "https://usapi.hottask.com/autodev/Image/GetPlaceholder/160x60/e2e8f0/334155?text=Partner+3",
  "https://usapi.hottask.com/autodev/Image/GetPlaceholder/160x60/e2e8f0/334155?text=Partner+4",
  "https://usapi.hottask.com/autodev/Image/GetPlaceholder/160x60/e2e8f0/334155?text=Partner+5",
  "https://usapi.hottask.com/autodev/Image/GetPlaceholder/160x60/e2e8f0/334155?text=Partner+6"];


  return (
    <div className="space-y-16" data-id="ek94pz783" data-path="pages/Home.js">
      {/* Hero Section */}
      <section
        id="hero"
        ref={sectionRefs.hero}
        className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl overflow-hidden transition-all duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`} data-id="pb7aarx3v" data-path="pages/Home.js">
        <div className="container mx-auto px-4 py-16 md:py-20" data-id="vidz7i6nb" data-path="pages/Home.js">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-id="v3jddecfj" data-path="pages/Home.js">
            <div className="text-white" data-id="l4fka1q18" data-path="pages/Home.js">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" data-id="tleguj1ho" data-path="pages/Home.js">
                Fast & Reliable Currency Exchange Rates
              </h1>
              <p className="text-blue-100 text-lg mb-8" data-id="283r5e2t7" data-path="pages/Home.js">
                Convert between 150+ world currencies, check live exchange rates, and view historical data all in one place.
              </p>
              <div className="flex flex-wrap gap-3 mb-8" data-id="x20t4rk47" data-path="pages/Home.js">
                {topCurrencies.map((currency) =>
                <button
                  key={currency.code}
                  onClick={() => {
                    if (currency.code !== baseCurrency) {
                      handleQuickConvert(currency.code);
                    }
                  }}
                  className="flex items-center px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-md transition-colors" data-id="hy7lpftz1" data-path="pages/Home.js">

                    <span className="mr-2 text-xl" data-id="7hrw9idg8" data-path="pages/Home.js">{currency.flag}</span>
                    <span data-id="u10vaditm" data-path="pages/Home.js">{currency.code}</span>
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-6" data-id="71nvcn8ck" data-path="pages/Home.js">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('navigate', {
                      detail: { page: 'rates' }
                    }));
                  }}
                  className="bg-white text-blue-600 font-medium px-6 py-3 rounded-md hover:bg-blue-50 transition-colors" data-id="3767503ue" data-path="pages/Home.js">
                  View All Rates <i className="fas fa-arrow-right ml-2" data-id="g9v8uj3eb" data-path="pages/Home.js"></i>
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('navigate', {
                      detail: { page: 'guide' }
                    }));
                  }}
                  className="bg-transparent text-white border border-white font-medium px-6 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors" data-id="yctr0mym4" data-path="pages/Home.js">
                  Currency Guide
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300" data-id="mb65u5wpj" data-path="pages/Home.js">
              <CurrencyConverter
                rates={rates}
                baseCurrency={baseCurrency}
                loading={loading} data-id="jw33ay006" data-path="pages/Home.js" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section
        id="features"
        ref={sectionRefs.features}
        className={`transition-all duration-1000 delay-300 ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="77s55lvte" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="kfrpqdnu4" data-path="pages/Home.js">
          <div className="text-center mb-12" data-id="3i0my6ro6" data-path="pages/Home.js">
            <h2 className="text-3xl font-bold text-gray-800 mb-4" data-id="i27t1qapq" data-path="pages/Home.js">Why Choose Global Exchange?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto" data-id="vy5s4a7c4" data-path="pages/Home.js">
              Our platform is designed to provide you with the most accurate, user-friendly
              currency tools available online, completely free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="1wfyxkjn7" data-path="pages/Home.js">
            {features.map((feature, index) =>
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex"
              style={{ animationDelay: `${index * 150}ms` }} data-id="s0ernjz36" data-path="pages/Home.js">
                <div className="text-blue-500 text-3xl mr-4" data-id="thsk9w14i" data-path="pages/Home.js">
                  <i className={feature.icon} data-id="osstk8rah" data-path="pages/Home.js"></i>
                </div>
                <div data-id="6okqx2cw4" data-path="pages/Home.js">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" data-id="k6x6rwiw4" data-path="pages/Home.js">{feature.title}</h3>
                  <p className="text-gray-600" data-id="30low0afy" data-path="pages/Home.js">{feature.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Popular Exchange Rates */}
      <section
        id="popularRates"
        ref={sectionRefs.popularRates}
        className={`bg-gray-50 py-16 rounded-lg transition-all duration-1000 delay-300 ${isVisible.popularRates ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="2frazkp4k" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="7htw224z6" data-path="pages/Home.js">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center" data-id="in6utncki" data-path="pages/Home.js">Popular Exchange Rates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="kt8r7sxxk" data-path="pages/Home.js">
            {topCurrencies.filter((c) => c.code !== baseCurrency).slice(0, 3).map((currency) => {
              const rate = rates && rates.rates ? rates.rates[currency.code] || 0 : 0;
              const baseInfo = getCurrencyInfo(baseCurrency);

              return (
                <div key={currency.code} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-id="sjng94279" data-path="pages/Home.js">
                  <div className="flex justify-between items-center mb-4" data-id="5toi6z0zg" data-path="pages/Home.js">
                    <div className="flex items-center" data-id="qyrkv9l88" data-path="pages/Home.js">
                      <span className="text-3xl mr-3" data-id="hmimvkdlh" data-path="pages/Home.js">{currency.flag}</span>
                      <div data-id="250njg7kn" data-path="pages/Home.js">
                        <h3 className="font-semibold text-gray-800" data-id="u7fsgva8d" data-path="pages/Home.js">{currency.code}</h3>
                        <p className="text-sm text-gray-500" data-id="iqkdi642o" data-path="pages/Home.js">{currency.name}</p>
                      </div>
                    </div>
                    <div className="text-right" data-id="7mcahpu4e" data-path="pages/Home.js">
                      <div className="text-2xl font-bold text-gray-800" data-id="jx32fkveq" data-path="pages/Home.js">{rate.toFixed(4)}</div>
                      <div className="text-xs text-gray-500" data-id="nmw16nt8b" data-path="pages/Home.js">
                        1 {baseCurrency} = {rate.toFixed(4)} {currency.code}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm bg-blue-50 p-3 rounded-lg" data-id="1j9v164ay" data-path="pages/Home.js">
                    <span className="text-gray-600 flex items-center" data-id="fb729d4o5" data-path="pages/Home.js">
                      {baseInfo.flag} {baseCurrency}
                    </span>
                    <span className="text-blue-500" data-id="xqwl63bi4" data-path="pages/Home.js">
                      <i className="fas fa-exchange-alt mx-2" data-id="uukumtsis" data-path="pages/Home.js"></i>
                    </span>
                    <span className="text-gray-600 flex items-center" data-id="i2t4uhy4i" data-path="pages/Home.js">
                      {currency.flag} {currency.code}
                    </span>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm" data-id="6xsl0ie71" data-path="pages/Home.js">
                    <span className="text-gray-500" data-id="hbvlwcqe8" data-path="pages/Home.js">
                      {rates && rates.date ? `Updated: ${formatDate(rates.date)}` : 'Live Rate'}
                    </span>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `/?from=${baseCurrency}&to=${currency.code}&amount=1`;
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium" data-id="7zgbo2bh1" data-path="pages/Home.js">
                      Convert <i className="fas fa-arrow-right ml-1" data-id="w50hdbpzp" data-path="pages/Home.js"></i>
                    </a>
                  </div>
                </div>);

            })}
          </div>
          
          <div className="text-center mt-10" data-id="w0w42c7vy" data-path="pages/Home.js">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('navigate', {
                  detail: { page: 'rates' }
                }));
              }}
              className="inline-block bg-gray-800 text-white font-medium px-6 py-3 rounded-md hover:bg-gray-700 transition-colors" data-id="84smu43a7" data-path="pages/Home.js">
              View All Exchange Rates
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section
        id="testimonials"
        ref={sectionRefs.testimonials}
        className={`transition-all duration-1000 delay-300 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="aipnacubx" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="7ex8migsp" data-path="pages/Home.js">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center" data-id="008eu94z6" data-path="pages/Home.js">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="fc40pgs7i" data-path="pages/Home.js">
            {testimonials.map((testimonial, index) =>
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 150}ms` }} data-id="nl9ykj1kz" data-path="pages/Home.js">
                <div className="flex flex-col h-full" data-id="41jnwzwr9" data-path="pages/Home.js">
                  <div className="mb-6 flex-grow" data-id="bmqvocslg" data-path="pages/Home.js">
                    <div className="text-yellow-400 mb-3" data-id="zbzcu0w2l" data-path="pages/Home.js">
                      <i className="fas fa-star" data-id="bdhoyk23q" data-path="pages/Home.js"></i>
                      <i className="fas fa-star" data-id="jq1i4ap0h" data-path="pages/Home.js"></i>
                      <i className="fas fa-star" data-id="o8c5t4pt3" data-path="pages/Home.js"></i>
                      <i className="fas fa-star" data-id="dll4w6gxr" data-path="pages/Home.js"></i>
                      <i className="fas fa-star" data-id="bu79plalf" data-path="pages/Home.js"></i>
                    </div>
                    <p className="text-gray-600 italic" data-id="j2ik8m574" data-path="pages/Home.js">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center border-t pt-4 border-gray-100" data-id="ulfx7tudm" data-path="pages/Home.js">
                    <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4" data-id="ripta61sv" data-path="pages/Home.js" />

                    <div data-id="15p2yomwi" data-path="pages/Home.js">
                      <h4 className="font-semibold text-gray-800" data-id="1w7dup95e" data-path="pages/Home.js">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500" data-id="xwibn5zwu" data-path="pages/Home.js">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Currency News Section */}
      <section
        id="news"
        ref={sectionRefs.news}
        className={`bg-gray-50 py-16 rounded-lg transition-all duration-1000 delay-300 ${isVisible.news ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="xjoh44ocg" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="cj1dr0wzt" data-path="pages/Home.js">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10" data-id="y3of6ph3x" data-path="pages/Home.js">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0" data-id="z04o16408" data-path="pages/Home.js">Latest Currency News</h2>
            <a href="/rss.xml" target="_blank" className="flex items-center text-blue-600 hover:text-blue-700" data-id="x0euwuc4z" data-path="pages/Home.js">
              <i className="fas fa-rss mr-2" data-id="jmsi22q5q" data-path="pages/Home.js"></i> Subscribe to RSS
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="67000xe0w" data-path="pages/Home.js">
            {newsItems.map((news, index) =>
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 150}ms` }} data-id="axjzgby7a" data-path="pages/Home.js">
                <div className="p-6" data-id="qkle954yv" data-path="pages/Home.js">
                  <div className="flex items-start mb-4" data-id="lni8piqoi" data-path="pages/Home.js">
                    <img
                    src={news.image}
                    alt={news.title}
                    className="w-16 h-16 object-cover rounded-md mr-4" data-id="twnm60yxp" data-path="pages/Home.js" />

                    <div data-id="o2u59e25c" data-path="pages/Home.js">
                      <h3 className="font-semibold text-gray-800 text-lg mb-1" data-id="5q23o3n8b" data-path="pages/Home.js">{news.title}</h3>
                      <p className="text-sm text-gray-500" data-id="tgz7bq0mp" data-path="pages/Home.js">{news.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4" data-id="43mnrsxbx" data-path="pages/Home.js">{news.summary}</p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm" data-id="u2cmq0v1k" data-path="pages/Home.js">
                    Read More <i className="fas fa-arrow-right ml-1" data-id="w4ckpbn91" data-path="pages/Home.js"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Tools & Resources */}
      <section
        id="tools"
        ref={sectionRefs.tools}
        className={`transition-all duration-1000 delay-300 ${isVisible.tools ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="q5fb0iny2" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="w4xduw76q" data-path="pages/Home.js">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center" data-id="vwqti3pct" data-path="pages/Home.js">Tools & Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-id="jl27pvgme" data-path="pages/Home.js">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md p-8 text-white hover:shadow-lg transition-shadow" data-id="et2ae7r4f" data-path="pages/Home.js">
              <h3 className="text-xl font-semibold mb-4" data-id="y2zvcjbfu" data-path="pages/Home.js">Currency Converter App</h3>
              <p className="mb-6" data-id="rz8o6ozoz" data-path="pages/Home.js">
                Get our currency converter app for iOS and Android to access exchange rates on the go.
              </p>
              <div className="flex flex-wrap gap-4" data-id="3wv9frd8u" data-path="pages/Home.js">
                <a href="#" className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center" data-id="0043lq6pz" data-path="pages/Home.js">
                  <i className="fab fa-apple text-xl mr-2" data-id="gn0bvh1hx" data-path="pages/Home.js"></i> App Store
                </a>
                <a href="#" className="bg-white text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-50 transition-colors flex items-center" data-id="rlux39onz" data-path="pages/Home.js">
                  <i className="fab fa-google-play text-xl mr-2" data-id="ryhj3nygw" data-path="pages/Home.js"></i> Google Play
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-md p-8 text-white hover:shadow-lg transition-shadow" data-id="mw2ihp11x" data-path="pages/Home.js">
              <h3 className="text-xl font-semibold mb-4" data-id="95dkosmdn" data-path="pages/Home.js">Developer API</h3>
              <p className="mb-6" data-id="yusa667r2" data-path="pages/Home.js">
                Integrate our exchange rate data directly into your applications with our reliable API.
              </p>
              <div className="flex flex-wrap gap-4" data-id="42aoz9ggj" data-path="pages/Home.js">
                <a href="#" className="bg-white text-gray-800 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center" data-id="qzjg6zsjw" data-path="pages/Home.js">
                  <i className="fas fa-code text-lg mr-2" data-id="0n1674vsl" data-path="pages/Home.js"></i> API Documentation
                </a>
                <a href="#" className="bg-transparent text-white border border-white font-medium px-4 py-2 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors" data-id="v4ijrodbq" data-path="pages/Home.js">
                  Get API Key
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" data-id="75yvgp9mk" data-path="pages/Home.js">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'guide' } }));
              }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center" data-id="ie98xb27i" data-path="pages/Home.js">
              <div className="text-blue-500 text-3xl mb-4" data-id="oiyt2xjo8" data-path="pages/Home.js">
                <i className="fas fa-book" data-id="9w6oj30e9" data-path="pages/Home.js"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2" data-id="xaiupwpll" data-path="pages/Home.js">Currency Guide</h3>
              <p className="text-gray-600" data-id="ufpcpm3x9" data-path="pages/Home.js">Learn about currency exchange basics, terminology, and strategies.</p>
            </a>
            
            <a href="#" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center" data-id="l7xvlmywf" data-path="pages/Home.js">
              <div className="text-blue-500 text-3xl mb-4" data-id="88jod06ne" data-path="pages/Home.js">
                <i className="fas fa-table" data-id="b2nopg1ts" data-path="pages/Home.js"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2" data-id="f4r0i2fwe" data-path="pages/Home.js">Rate Tables</h3>
              <p className="text-gray-600" data-id="9dudx0pdu" data-path="pages/Home.js">Download printable exchange rate tables for easy reference.</p>
            </a>
            
            <a href="#" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center" data-id="80qaghg5j" data-path="pages/Home.js">
              <div className="text-blue-500 text-3xl mb-4" data-id="p9u6w5ozd" data-path="pages/Home.js">
                <i className="fas fa-calculator" data-id="2ga1rfaoe" data-path="pages/Home.js"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2" data-id="eq2z70wuw" data-path="pages/Home.js">Currency Calculator</h3>
              <p className="text-gray-600" data-id="a258lurx5" data-path="pages/Home.js">Advanced calculator with historical rate lookup and more features.</p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section
        id="partners"
        ref={sectionRefs.partners}
        className={`bg-gray-50 py-16 rounded-lg transition-all duration-1000 delay-300 ${isVisible.partners ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-id="sxsbl45iy" data-path="pages/Home.js">
        <div className="container mx-auto px-4" data-id="5atlv8y8r" data-path="pages/Home.js">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center" data-id="p3x1yca61" data-path="pages/Home.js">Our Trusted Partners</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8" data-id="p3mea1vw8" data-path="pages/Home.js">
            {partners.map((partner, index) =>
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }} data-id="hihavzq2p" data-path="pages/Home.js">
                <img
                src={partner}
                alt={`Partner ${index + 1}`}
                className="h-10 md:h-12 object-contain" data-id="myu3w8zhc" data-path="pages/Home.js" />

              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-10 text-white text-center" data-id="g3847ezw3" data-path="pages/Home.js">
        <h2 className="text-3xl font-bold mb-4" data-id="z2lxmfw0y" data-path="pages/Home.js">Start Converting Currencies Now</h2>
        <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto" data-id="b2plrfmvf" data-path="pages/Home.js">
          Access accurate exchange rates, historical data, and powerful conversion tools completely free.
        </p>
        <div className="flex flex-wrap justify-center gap-4" data-id="5d5knj0w7" data-path="pages/Home.js">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 font-medium px-8 py-3 rounded-md hover:bg-blue-50 transition-colors" data-id="qejk018mg" data-path="pages/Home.js">
            Use Currency Converter
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'about' } }));
            }}
            className="bg-transparent text-white border border-white font-medium px-8 py-3 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors" data-id="5l5fkndf2" data-path="pages/Home.js">
            Learn About Us
          </a>
        </div>
      </section>
    </div>);

}
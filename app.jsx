const { useState, useEffect } = React;

function App() {
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [activePage, setActivePage] = useState('home'); // 'home', 'rates', 'history', etc.
  const [allCurrencies, setAllCurrencies] = useState(null);
  const [pageHistory, setPageHistory] = useState(['home']);
  const [animationDirection, setAnimationDirection] = useState('right');

  useEffect(() => {
    // Load all supported currencies once when the app initializes
    const initializeCurrencies = async () => {
      try {
        const currenciesData = await loadSupportedCurrencies();
        setAllCurrencies(currenciesData);
        console.log('Successfully loaded currency data');
      } catch (err) {
        console.error('Error initializing currencies:', err);
        // Fallback to predefined list in getPopularCurrencies()
      }
    };

    initializeCurrencies();

    // Listen for navigation events (used in components)
    const handleNavigation = (event) => {
      if (event.detail && event.detail.page) {
        navigateToPage(event.detail.page);
      }
    };

    window.addEventListener('navigate', handleNavigation);

    // Return cleanup function
    return () => {
      window.removeEventListener('navigate', handleNavigation);
    };
  }, []);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const data = await fetchExchangeRates(baseCurrency);
        setRates(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching rates:', err);
        setError('Failed to load exchange rates. Please try again later.');

        // Use mock data as fallback
        setRates(getMockExchangeRates(baseCurrency));
      } finally {
        setLoading(false);
      }
    };

    fetchRates();

    // Refresh rates every 5 minutes
    const intervalId = setInterval(fetchRates, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [baseCurrency]);

  const handleCurrencyChange = (newBaseCurrency) => {
    setBaseCurrency(newBaseCurrency);
  };

  // Navigation with animation direction
  const navigateToPage = (newPage) => {
    // Don't do anything if it's the same page
    if (newPage === activePage) return;

    // Determine animation direction based on page types
    // Main pages are sequentially: home, rates, history
    const mainPages = ['home', 'rates', 'history'];

    const currentMainIndex = mainPages.indexOf(activePage);
    const newMainIndex = mainPages.indexOf(newPage);

    // If both are main pages, determine direction by index
    if (currentMainIndex >= 0 && newMainIndex >= 0) {
      setAnimationDirection(newMainIndex > currentMainIndex ? 'right' : 'left');
    }
    // Going from main to other or vice versa
    else if (currentMainIndex >= 0) {
      setAnimationDirection('right'); // Going deeper
    } else if (newMainIndex >= 0) {
      setAnimationDirection('left'); // Going back to main
    }
    // Between non-main pages
    else {
      // Check history
      const prevPageIndex = pageHistory.indexOf(activePage);
      const newPageIndex = pageHistory.indexOf(newPage);

      if (newPageIndex >= 0 && newPageIndex < prevPageIndex) {
        setAnimationDirection('left'); // Going back
      } else {
        setAnimationDirection('right'); // Going forward or to a new page
      }
    }

    // Update page and history
    setActivePage(newPage);

    // Add to history if it's a new page
    if (!pageHistory.includes(newPage)) {
      setPageHistory([...pageHistory, newPage]);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    // Common animation classes
    const enterFromRight = "animate-fade-in transform translate-x-0 opacity-100";
    const enterFromLeft = "animate-fade-in transform translate-x-0 opacity-100";

    // Additional animation classes based on direction
    const animationClass = animationDirection === 'right' ? enterFromRight : enterFromLeft;

    switch (activePage) {
      case 'rates':
        return (
          <div className={animationClass} data-id="tis5mumgm" data-path="app.js">
            <Rates
              loading={loading}
              rates={rates}
              baseCurrency={baseCurrency}
              allCurrencies={allCurrencies} data-id="ab2c57xc4" data-path="app.js" />
          </div>);


      case 'history':
        return (
          <div className={animationClass} data-id="31huka1ec" data-path="app.js">
            <History
              baseCurrency={baseCurrency}
              onCurrencyChange={handleCurrencyChange}
              allCurrencies={allCurrencies} data-id="51yftgxgz" data-path="app.js" />
          </div>);


      case 'about':
        return (
          <div className={animationClass} data-id="mqmq4hr6m" data-path="app.js">
            <About data-id="6llrg4t7u" data-path="app.js" />
          </div>);


      case 'contact':
        return (
          <div className={animationClass} data-id="ko11e33of" data-path="app.js">
            <Contact data-id="kqpbbbai1" data-path="app.js" />
          </div>);


      case 'faq':
        return (
          <div className={animationClass} data-id="vq3rf6f0v" data-path="app.js">
            <FAQ data-id="orrqofdqu" data-path="app.js" />
          </div>);


      case 'terms':
        return (
          <div className={animationClass} data-id="qpmzn08af" data-path="app.js">
            <Terms data-id="i2h4j298e" data-path="app.js" />
          </div>);


      case 'privacy':
        return (
          <div className={animationClass} data-id="mkim03ar5" data-path="app.js">
            <Privacy data-id="61flfq5az" data-path="app.js" />
          </div>);


      case 'disclaimer':
        return (
          <div className={animationClass} data-id="6laf6isi0" data-path="app.js">
            <Disclaimer data-id="kv5babgtw" data-path="app.js" />
          </div>);


      case 'guide':
        return (
          <div className={animationClass} data-id="eriq3ovie" data-path="app.js">
            <Guide data-id="n6mo2k2rz" data-path="app.js" />
          </div>);


      default: // 'home'
        return (
          <div className={animationClass} data-id="2cfvlofwl" data-path="app.js">
            <Home
              loading={loading}
              rates={rates}
              baseCurrency={baseCurrency}
              onCurrencyChange={handleCurrencyChange}
              allCurrencies={allCurrencies} data-id="skinpp7bg" data-path="app.js" />
          </div>);

    }
  };

  return (
    <div className="flex flex-col min-h-screen" data-id="x0w7a23eg" data-path="app.js">
      <Navbar
        onCurrencyChange={handleCurrencyChange}
        baseCurrency={baseCurrency}
        activePage={activePage}
        setActivePage={navigateToPage} data-id="xmof8t1qg" data-path="app.js" />

      
      {error &&
      <div className="bg-red-100 text-red-700 p-3 text-center" data-id="uelbdb137" data-path="app.js">
          {error}
        </div>
      }
      
      <main className="flex-grow container mx-auto px-4 py-8" data-id="vug55v681" data-path="app.js">
        <ErrorBoundary data-id="4mlhqnlgz" data-path="app.js">
          {renderPage()}
        </ErrorBoundary>
      </main>
      
      <Footer setActivePage={navigateToPage} data-id="eqpca0bj6" data-path="app.js" />
    </div>);

}

// Render the App
ReactDOM.render(
  <App data-id="9s0i5qtiz" data-path="app.js" />,
  document.getElementById('root')
);
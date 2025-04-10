const { useState, useEffect, useRef } = React;

function CurrencyConverter({ rates, baseCurrency, loading, allCurrencies }) {
  const [fromCurrency, setFromCurrency] = useState(baseCurrency);
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [copySuccess, setCopySuccess] = useState(false);
  const copyTimeoutRef = useRef(null);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isSwapping, setIsSwapping] = useState(false);
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  // Get the full list of currencies
  const currencies = getPopularCurrencies();
  const popularCurrencies = currencies.slice(0, 20);

  useEffect(() => {
    if (rates && rates.rates) {
      calculateConversion();
    }
  }, [rates, fromCurrency, toCurrency, amount]);

  useEffect(() => {
    // Update the fromCurrency when baseCurrency changes
    setFromCurrency(baseCurrency);
  }, [baseCurrency]);

  // Load state from URL parameters on initial load
  useEffect(() => {
    try {
      const params = getUrlParams();

      if (params.amount && !isNaN(params.amount)) {
        setAmount(parseFloat(params.amount));
      }

      if (params.from && params.from.length === 3) {
        setFromCurrency(params.from.toUpperCase());
      }

      if (params.to && params.to.length === 3) {
        setToCurrency(params.to.toUpperCase());
      }
    } catch (error) {
      console.error('Error parsing URL parameters:', error);
    }
  }, []);

  // Update URL when conversion parameters change
  useEffect(() => {
    if (amount && fromCurrency && toCurrency) {
      updateUrlWithoutReload(amount, fromCurrency, toCurrency);
    }
  }, [amount, fromCurrency, toCurrency]);

  const calculateConversion = () => {
    try {
      if (!rates || !rates.rates) return;

      // Get rates for the currencies
      const fromRate = rates.rates[fromCurrency] || 1;
      const toRate = rates.rates[toCurrency] || 1;

      // Calculate the conversion
      const result = convertCurrency(amount, fromRate, toRate);
      setConvertedAmount(result);
    } catch (error) {
      console.error('Calculation error:', error);
      setConvertedAmount(0);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleCopyLink = async () => {
    try {
      const success = await copyUrlToClipboard(amount, fromCurrency, toCurrency);

      // Show success message
      if (success) {
        setCopySuccess(true);

        // Clear any existing timeout
        if (copyTimeoutRef.current) {
          clearTimeout(copyTimeoutRef.current);
        }

        // Hide the success message after 3 seconds
        copyTimeoutRef.current = setTimeout(() => {
          setCopySuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Failed to copy URL:', error);
    }
  };

  const handleSwapCurrencies = () => {
    setIsSwapping(true);
    setTimeout(() => {
      const temp = fromCurrency;
      setFromCurrency(toCurrency);
      setToCurrency(temp);
      setIsSwapping(false);
    }, 300);
  };

  const getRateText = () => {
    if (!rates || !rates.rates || !rates.rates[fromCurrency] || !rates.rates[toCurrency]) {
      return '';
    }

    const fromRate = rates.rates[fromCurrency];
    const toRate = rates.rates[toCurrency];
    const rate = toRate / fromRate;

    return `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-id="18ofwdhj7" data-path="components/CurrencyConverter.js">
      <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="1d8pwhxyr" data-path="components/CurrencyConverter.js">Currency Converter</h2>
      
      <div className="space-y-4" data-id="ws3wdnr15" data-path="components/CurrencyConverter.js">
        {/* Amount Input */}
        <div data-id="722ny9fwy" data-path="components/CurrencyConverter.js">
          <label className="block text-sm font-medium text-gray-700 mb-1" data-id="u8ewryl46" data-path="components/CurrencyConverter.js">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-id="60szo65bt" data-path="components/CurrencyConverter.js" />

        </div>
        
        <div className="flex items-center space-x-4" data-id="pasje6jdl" data-path="components/CurrencyConverter.js">
          {/* From Currency */}
          <div className="flex-1" data-id="ncv8yx4kn" data-path="components/CurrencyConverter.js">
            <label className="block text-sm font-medium text-gray-700 mb-1" data-id="j1tytci2r" data-path="components/CurrencyConverter.js">From</label>
            <div className="relative" data-id="eq5zjlnhs" data-path="components/CurrencyConverter.js">
              <div
                onClick={() => !loading && setShowFromDropdown(!showFromDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white cursor-pointer flex items-center justify-between" data-id="uxnyniurg" data-path="components/CurrencyConverter.js">

                <div className="flex items-center" data-id="6l8adxdh2" data-path="components/CurrencyConverter.js">
                  <span className="mr-2" data-id="v9rz0i7ak" data-path="components/CurrencyConverter.js">{getCurrencyInfo(fromCurrency).flag}</span>
                  <span data-id="abvhxb72j" data-path="components/CurrencyConverter.js">{fromCurrency} - {getCurrencyInfo(fromCurrency).name}</span>
                </div>
                <i className="fas fa-chevron-down text-xs text-gray-500" data-id="ql4lak8wm" data-path="components/CurrencyConverter.js"></i>
              </div>
              
              {showFromDropdown &&
              <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10" data-id="wn15st1b6" data-path="components/CurrencyConverter.js">
                  <div className="sticky top-0 bg-white p-2 border-b border-gray-200" data-id="wes4uvsg4" data-path="components/CurrencyConverter.js">
                    <div className="relative" data-id="ofodz6mvi" data-path="components/CurrencyConverter.js">
                      <input
                      type="text"
                      placeholder="Search currencies..."
                      value={searchFrom}
                      onChange={(e) => setSearchFrom(e.target.value)}
                      className="w-full px-3 py-2 pr-8 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={(e) => e.stopPropagation()} data-id="2lpfud1sp" data-path="components/CurrencyConverter.js" />

                      <div className="absolute right-3 top-2.5 text-gray-400" data-id="b264t0hfu" data-path="components/CurrencyConverter.js">
                        <i className="fas fa-search" data-id="myztubag1" data-path="components/CurrencyConverter.js"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-1" data-id="ztdcxbbqr" data-path="components/CurrencyConverter.js">
                    {(searchFrom ? currencies.filter((curr) =>
                  curr.code.toLowerCase().includes(searchFrom.toLowerCase()) ||
                  curr.name.toLowerCase().includes(searchFrom.toLowerCase())
                  ) : popularCurrencies).map((currency) =>
                  <div
                    key={`from-${currency.code}`}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFromCurrency(currency.code);
                      setShowFromDropdown(false);
                      setSearchFrom('');
                    }} data-id="384kszcie" data-path="components/CurrencyConverter.js">

                        <span className="mr-2" data-id="bll8y5wt5" data-path="components/CurrencyConverter.js">{currency.flag}</span>
                        <span data-id="6nt4tj25p" data-path="components/CurrencyConverter.js">{currency.code} - {currency.name}</span>
                      </div>
                  )}
                    
                    {!searchFrom && currencies.length > popularCurrencies.length &&
                  <div className="text-center border-t border-gray-100 py-2" data-id="xfhpow4sv" data-path="components/CurrencyConverter.js">
                        <span className="text-sm text-gray-500" data-id="rcxxbguvx" data-path="components/CurrencyConverter.js">Search to see more currencies</span>
                      </div>
                  }
                  </div>
                </div>
              }
            </div>
          </div>
          
          {/* Swap Button */}
          <div className="flex items-center justify-center" data-id="nsh6km63n" data-path="components/CurrencyConverter.js">
            <button
              onClick={handleSwapCurrencies}
              className={`p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 focus:outline-none ${isSwapping ? 'animate-spin' : ''}`}
              disabled={loading || isSwapping} data-id="3ibsnelc3" data-path="components/CurrencyConverter.js">

              <i className="fas fa-exchange-alt transform rotate-90" data-id="8e3ywt3d4" data-path="components/CurrencyConverter.js"></i>
            </button>
          </div>
          
          {/* To Currency */}
          <div className="flex-1" data-id="qvzq9ijp8" data-path="components/CurrencyConverter.js">
            <label className="block text-sm font-medium text-gray-700 mb-1" data-id="uryiep3qw" data-path="components/CurrencyConverter.js">To</label>
            <div className="relative" data-id="hgpr8bybq" data-path="components/CurrencyConverter.js">
              <div
                onClick={() => !loading && setShowToDropdown(!showToDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white cursor-pointer flex items-center justify-between" data-id="u3nwm7xmj" data-path="components/CurrencyConverter.js">

                <div className="flex items-center" data-id="08nv2utjl" data-path="components/CurrencyConverter.js">
                  <span className="mr-2" data-id="8oxhloehw" data-path="components/CurrencyConverter.js">{getCurrencyInfo(toCurrency).flag}</span>
                  <span data-id="561rz0v8s" data-path="components/CurrencyConverter.js">{toCurrency} - {getCurrencyInfo(toCurrency).name}</span>
                </div>
                <i className="fas fa-chevron-down text-xs text-gray-500" data-id="6c93a7vi6" data-path="components/CurrencyConverter.js"></i>
              </div>
              
              {showToDropdown &&
              <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10" data-id="1idrhtbuq" data-path="components/CurrencyConverter.js">
                  <div className="sticky top-0 bg-white p-2 border-b border-gray-200" data-id="5rr1oqvqr" data-path="components/CurrencyConverter.js">
                    <div className="relative" data-id="se998tzyp" data-path="components/CurrencyConverter.js">
                      <input
                      type="text"
                      placeholder="Search currencies..."
                      value={searchTo}
                      onChange={(e) => setSearchTo(e.target.value)}
                      className="w-full px-3 py-2 pr-8 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={(e) => e.stopPropagation()} data-id="rh4dxpiff" data-path="components/CurrencyConverter.js" />

                      <div className="absolute right-3 top-2.5 text-gray-400" data-id="jl7b4cm88" data-path="components/CurrencyConverter.js">
                        <i className="fas fa-search" data-id="7go7mgw2o" data-path="components/CurrencyConverter.js"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-1" data-id="npyb9k1qf" data-path="components/CurrencyConverter.js">
                    {(searchTo ? currencies.filter((curr) =>
                  curr.code.toLowerCase().includes(searchTo.toLowerCase()) ||
                  curr.name.toLowerCase().includes(searchTo.toLowerCase())
                  ) : popularCurrencies).map((currency) =>
                  <div
                    key={`to-${currency.code}`}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setToCurrency(currency.code);
                      setShowToDropdown(false);
                      setSearchTo('');
                    }} data-id="04m9h21cg" data-path="components/CurrencyConverter.js">

                        <span className="mr-2" data-id="x1447pq1z" data-path="components/CurrencyConverter.js">{currency.flag}</span>
                        <span data-id="p56uet9wu" data-path="components/CurrencyConverter.js">{currency.code} - {currency.name}</span>
                      </div>
                  )}
                    
                    {!searchTo && currencies.length > popularCurrencies.length &&
                  <div className="text-center border-t border-gray-100 py-2" data-id="fz6nsoqms" data-path="components/CurrencyConverter.js">
                        <span className="text-sm text-gray-500" data-id="x2yca62mh" data-path="components/CurrencyConverter.js">Search to see more currencies</span>
                      </div>
                  }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
        
        {/* Share Conversion Link */}
        <div className="mt-6" data-id="c2z8aoi3f" data-path="components/CurrencyConverter.js">
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
            disabled={loading} data-id="jpqa3rd9b" data-path="components/CurrencyConverter.js">
            <i className="fas fa-link mr-2" data-id="uv965k6ml" data-path="components/CurrencyConverter.js"></i>
            Copy Conversion Link
          </button>
          
          {copySuccess &&
          <div className="mt-2 text-center text-sm text-green-600 animate-fade-in-out" data-id="glzliujnk" data-path="components/CurrencyConverter.js">
              <i className="fas fa-check-circle mr-1" data-id="7ojwke7j8" data-path="components/CurrencyConverter.js"></i>
              Link copied to clipboard!
            </div>
          }
        </div>
        
        {/* Result Display */}
        <div className="mt-6 pt-4 border-t border-gray-200" data-id="59xmweav7" data-path="components/CurrencyConverter.js">
          {loading ?
          <div className="flex justify-center items-center h-20" data-id="ufw7hxvmz" data-path="components/CurrencyConverter.js">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" data-id="4kb7r2han" data-path="components/CurrencyConverter.js"></div>
            </div> :

          <div className="text-center" data-id="0103uylbt" data-path="components/CurrencyConverter.js">
              <div className="text-3xl font-bold text-gray-800 mb-2" data-id="oj4y7uvyy" data-path="components/CurrencyConverter.js">
                {formatCurrency(convertedAmount, toCurrency)}
              </div>
              <div className="text-sm text-gray-500" data-id="b9gi9okxl" data-path="components/CurrencyConverter.js">
                {getRateText()}
              </div>
              <div className="text-xs text-gray-400 mt-1" data-id="mcd18fmp2" data-path="components/CurrencyConverter.js">
                {rates && rates.date ? `Last updated: ${formatDate(rates.date)}` : ''}
              </div>
            </div>
          }
        </div>
      </div>
    </div>);

}
const { useState, useEffect } = React;

function History({ baseCurrency, onCurrencyChange, allCurrencies }) {
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [historicalData, setHistoricalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [baseSearch, setBaseSearch] = useState('');
  const [targetSearch, setTargetSearch] = useState('');
  const [showBaseDropdown, setShowBaseDropdown] = useState(false);
  const [showTargetDropdown, setShowTargetDropdown] = useState(false);

  // Get the full list of currencies
  const allCurrencyList = getPopularCurrencies();
  const popularCurrencies = allCurrencyList.slice(0, 20);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        setLoading(true);
        const data = await fetchHistoricalRates(baseCurrency);
        setHistoricalData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching historical rates:', err);
        setError('Failed to load historical data. Please try again later.');
        setHistoricalData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoricalData();
  }, [baseCurrency]);

  return (
    <div className="space-y-8" data-id="rlsvpjue8" data-path="pages/History.js">
      <div className="bg-white rounded-lg shadow-md p-6" data-id="7bdic9aie" data-path="pages/History.js">
        <h1 className="text-2xl font-bold text-gray-800 mb-2" data-id="4loljp6q8" data-path="pages/History.js">Historical Exchange Rates</h1>
        <p className="text-gray-600 mb-4" data-id="62i61l7nw" data-path="pages/History.js">
          Track how currency exchange rates have changed over time with our historical data charts and tables.
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" data-id="njwny17mg" data-path="pages/History.js">
          <div className="w-full sm:w-1/2" data-id="d9q52inaf" data-path="pages/History.js">
            <label className="block text-sm font-medium text-gray-700 mb-1" data-id="s41f6bz7j" data-path="pages/History.js">Base Currency</label>
            <div className="relative" data-id="hmzhjzy1e" data-path="pages/History.js">
              <div
                onClick={() => setShowBaseDropdown(!showBaseDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white cursor-pointer flex items-center justify-between" data-id="1m6ukxkuy" data-path="pages/History.js">

                <div className="flex items-center" data-id="j8nbtaogw" data-path="pages/History.js">
                  <span className="mr-2" data-id="jb3f8ydkx" data-path="pages/History.js">{getCurrencyInfo(baseCurrency).flag}</span>
                  <span data-id="ubd78ylcg" data-path="pages/History.js">{baseCurrency} - {getCurrencyInfo(baseCurrency).name}</span>
                </div>
                <i className="fas fa-chevron-down text-xs text-gray-500" data-id="1z4tub5ff" data-path="pages/History.js"></i>
              </div>
              
              {showBaseDropdown &&
              <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10" data-id="jdmy0orel" data-path="pages/History.js">
                  <div className="sticky top-0 bg-white p-2 border-b border-gray-200" data-id="9z01420a9" data-path="pages/History.js">
                    <div className="relative" data-id="ncgdsrs22" data-path="pages/History.js">
                      <input
                      type="text"
                      placeholder="Search currencies..."
                      value={baseSearch}
                      onChange={(e) => setBaseSearch(e.target.value)}
                      className="w-full px-3 py-2 pr-8 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={(e) => e.stopPropagation()} data-id="cfdqp0il1" data-path="pages/History.js" />

                      <div className="absolute right-3 top-2.5 text-gray-400" data-id="tbjrrgnbu" data-path="pages/History.js">
                        <i className="fas fa-search" data-id="1ydd61faf" data-path="pages/History.js"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-1" data-id="yjsfpqhox" data-path="pages/History.js">
                    {(baseSearch ? allCurrencyList.filter((curr) =>
                  curr.code.toLowerCase().includes(baseSearch.toLowerCase()) ||
                  curr.name.toLowerCase().includes(baseSearch.toLowerCase())
                  ) : popularCurrencies).map((currency) =>
                  <div
                    key={`base-${currency.code}`}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      onCurrencyChange(currency.code);
                      setShowBaseDropdown(false);
                      setBaseSearch('');
                    }} data-id="h8m99zr6p" data-path="pages/History.js">

                        <span className="mr-2" data-id="2hhebo2rt" data-path="pages/History.js">{currency.flag}</span>
                        <span data-id="yy9xz1mhz" data-path="pages/History.js">{currency.code} - {currency.name}</span>
                      </div>
                  )}
                    
                    {!baseSearch && allCurrencyList.length > popularCurrencies.length &&
                  <div className="text-center border-t border-gray-100 py-2" data-id="pk9tntfdv" data-path="pages/History.js">
                        <span className="text-sm text-gray-500" data-id="y3h9zp67e" data-path="pages/History.js">Search to see more currencies</span>
                      </div>
                  }
                  </div>
                </div>
              }
            </div>
          </div>
          
          <div className="w-full sm:w-1/2" data-id="6q5aezsg9" data-path="pages/History.js">
            <label className="block text-sm font-medium text-gray-700 mb-1" data-id="35c15wb98" data-path="pages/History.js">Target Currency</label>
            <div className="relative" data-id="fabcoeni6" data-path="pages/History.js">
              <div
                onClick={() => setShowTargetDropdown(!showTargetDropdown)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white cursor-pointer flex items-center justify-between" data-id="moojy4b61" data-path="pages/History.js">

                <div className="flex items-center" data-id="ch4wxabso" data-path="pages/History.js">
                  <span className="mr-2" data-id="mpzcxq95d" data-path="pages/History.js">{getCurrencyInfo(targetCurrency).flag}</span>
                  <span data-id="9e1egueft" data-path="pages/History.js">{targetCurrency} - {getCurrencyInfo(targetCurrency).name}</span>
                </div>
                <i className="fas fa-chevron-down text-xs text-gray-500" data-id="j507f8awv" data-path="pages/History.js"></i>
              </div>
              
              {showTargetDropdown &&
              <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-10" data-id="uwboxhq3y" data-path="pages/History.js">
                  <div className="sticky top-0 bg-white p-2 border-b border-gray-200" data-id="pxq219624" data-path="pages/History.js">
                    <div className="relative" data-id="b91ehwmvh" data-path="pages/History.js">
                      <input
                      type="text"
                      placeholder="Search currencies..."
                      value={targetSearch}
                      onChange={(e) => setTargetSearch(e.target.value)}
                      className="w-full px-3 py-2 pr-8 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={(e) => e.stopPropagation()} data-id="gqntga196" data-path="pages/History.js" />

                      <div className="absolute right-3 top-2.5 text-gray-400" data-id="c3spb05fj" data-path="pages/History.js">
                        <i className="fas fa-search" data-id="n6ol6n60s" data-path="pages/History.js"></i>
                      </div>
                    </div>
                  </div>
                  <div className="py-1" data-id="el2vua5ll" data-path="pages/History.js">
                    {(targetSearch ? allCurrencyList.filter((curr) =>
                  curr.code.toLowerCase().includes(targetSearch.toLowerCase()) ||
                  curr.name.toLowerCase().includes(targetSearch.toLowerCase())
                  ) : popularCurrencies).map((currency) =>
                  <div
                    key={`target-${currency.code}`}
                    className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setTargetCurrency(currency.code);
                      setShowTargetDropdown(false);
                      setTargetSearch('');
                    }} data-id="9ia1mayr9" data-path="pages/History.js">

                        <span className="mr-2" data-id="uwuco9ydl" data-path="pages/History.js">{currency.flag}</span>
                        <span data-id="i1rcshhjo" data-path="pages/History.js">{currency.code} - {currency.name}</span>
                      </div>
                  )}
                    
                    {!targetSearch && allCurrencyList.length > popularCurrencies.length &&
                  <div className="text-center border-t border-gray-100 py-2" data-id="hkt1merml" data-path="pages/History.js">
                        <span className="text-sm text-gray-500" data-id="kdua5ssuu" data-path="pages/History.js">Search to see more currencies</span>
                      </div>
                  }
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      
      {error &&
      <div className="bg-red-100 text-red-700 p-4 rounded-md" data-id="wjy9ns0zp" data-path="pages/History.js">
          <div className="flex" data-id="iscpbpzgu" data-path="pages/History.js">
            <i className="fas fa-exclamation-circle mt-0.5 mr-2" data-id="dt72ytin4" data-path="pages/History.js"></i>
            <span data-id="s9j7smbqj" data-path="pages/History.js">{error}</span>
          </div>
        </div>
      }
      
      {loading ?
      <div className="bg-white rounded-lg shadow-md p-16 text-center" data-id="b7ihemlhv" data-path="pages/History.js">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto" data-id="8hlefx7gj" data-path="pages/History.js"></div>
          <p className="mt-4 text-gray-600" data-id="oik61bdk5" data-path="pages/History.js">Loading historical data...</p>
        </div> :

      <CurrencyChart
        historicalData={historicalData}
        baseCurrency={baseCurrency}
        targetCurrency={targetCurrency} data-id="l9xrzx6tl" data-path="pages/History.js" />

      }
      
      {!loading && historicalData.length > 0 &&
      <div className="bg-white rounded-lg shadow-md overflow-hidden" data-id="3at53q3fu" data-path="pages/History.js">
          <div className="p-4 border-b border-gray-200" data-id="dl8gwkbid" data-path="pages/History.js">
            <h2 className="text-xl font-semibold text-gray-800" data-id="9knz8y8ji" data-path="pages/History.js">
              {baseCurrency} to {targetCurrency} Historical Data
            </h2>
          </div>
          
          <div className="overflow-x-auto" data-id="5vuf2j3cp" data-path="pages/History.js">
            <table className="min-w-full divide-y divide-gray-200" data-id="twkfge7i4" data-path="pages/History.js">
              <thead className="bg-gray-50" data-id="8ut08q88v" data-path="pages/History.js">
                <tr data-id="fk7qdvy3s" data-path="pages/History.js">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="mdp7vl4mi" data-path="pages/History.js">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="63sf8rqcs" data-path="pages/History.js">
                    Exchange Rate
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="e6pjhc475" data-path="pages/History.js">
                    Change
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200" data-id="j5s88e5au" data-path="pages/History.js">
                {historicalData.map((entry, index) => {
                const currentRate = entry.rates && entry.rates[targetCurrency] ? entry.rates[targetCurrency] : 0;
                const previousRate = index < historicalData.length - 1 && historicalData[index + 1].rates &&
                historicalData[index + 1].rates[targetCurrency] ? historicalData[index + 1].rates[targetCurrency] : currentRate;

                const percentChange = calculatePercentChange(previousRate, currentRate);
                const isPositive = parseFloat(percentChange) > 0;
                const isNeutral = parseFloat(percentChange) === 0;

                return (
                  <tr key={entry.date} className="hover:bg-gray-50" data-id="94idizson" data-path="pages/History.js">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" data-id="uuhonh9el" data-path="pages/History.js">
                        {formatDate(entry.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-id="o3zw0hz8k" data-path="pages/History.js">
                        {currentRate.toFixed(4)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm" data-id="ije2qgjg7" data-path="pages/History.js">
                        <div className={`flex items-center ${
                      isPositive ? 'text-green-600' : isNeutral ? 'text-gray-500' : 'text-red-600'}`
                      } data-id="b7fmlapir" data-path="pages/History.js">
                          {isPositive && <i className="fas fa-caret-up mr-1" data-id="2lbtle4fc" data-path="pages/History.js"></i>}
                          {!isPositive && !isNeutral && <i className="fas fa-caret-down mr-1" data-id="r0wm1pnqz" data-path="pages/History.js"></i>}
                          <span data-id="71qzvzt17" data-path="pages/History.js">{percentChange}%</span>
                        </div>
                      </td>
                    </tr>);

              })}
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>);

}
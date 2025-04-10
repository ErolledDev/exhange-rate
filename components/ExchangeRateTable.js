const { useState } = React;

function ExchangeRateTable({ rates, baseCurrency, loading, allCurrencies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('code');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);

  // Get the full list of currencies
  const allCurrencyList = getPopularCurrencies();

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const getFilteredAndSortedCurrencies = () => {
    if (!rates || !rates.rates) return [];

    // Filter currencies based on search term
    let filteredCurrencies = allCurrencyList.filter((currency) => {
      // Only include currencies that exist in the rates object and match the search
      if (!(currency.code in rates.rates) && currency.code !== baseCurrency) {
        return false;
      }

      const searchString = `${currency.code} ${currency.name}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });

    // Sort currencies based on the selected column and direction
    filteredCurrencies.sort((a, b) => {
      let valueA, valueB;

      if (sortColumn === 'code') {
        valueA = a.code;
        valueB = b.code;
      } else if (sortColumn === 'name') {
        valueA = a.name;
        valueB = b.name;
      } else if (sortColumn === 'rate') {
        valueA = rates.rates[a.code] || 0;
        valueB = rates.rates[b.code] || 0;
      }

      if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return filteredCurrencies;
  };

  const getSortIcon = (column) => {
    if (sortColumn !== column) return <i className="fas fa-sort text-gray-300 ml-1" data-id="0rn4rjbl2" data-path="components/ExchangeRateTable.js"></i>;

    return sortDirection === 'asc' ?
    <i className="fas fa-sort-up text-blue-500 ml-1" data-id="19w0lbjff" data-path="components/ExchangeRateTable.js"></i> :
    <i className="fas fa-sort-down text-blue-500 ml-1" data-id="9kv5r8acj" data-path="components/ExchangeRateTable.js"></i>;
  };

  const filteredCurrencies = getFilteredAndSortedCurrencies();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" data-id="em4kad5yq" data-path="components/ExchangeRateTable.js">
      <div className="p-4 border-b border-gray-200" data-id="qs8ckgfsg" data-path="components/ExchangeRateTable.js">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center" data-id="tv9f5gbkz" data-path="components/ExchangeRateTable.js">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 sm:mb-0" data-id="l7f8pqwfo" data-path="components/ExchangeRateTable.js">
            Exchange Rates
            {baseCurrency && <span className="ml-2 text-sm font-normal text-gray-500" data-id="4ne1k1k45" data-path="components/ExchangeRateTable.js">(Base: {baseCurrency})</span>}
          </h2>
          
          <div className="relative w-full sm:w-64" data-id="3muissqoh" data-path="components/ExchangeRateTable.js">
            <input
              type="text"
              placeholder="Search currency..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-id="8e8gl6cmg" data-path="components/ExchangeRateTable.js" />

            <div className="absolute left-0 top-0 mt-2 ml-3 text-gray-400" data-id="bfhskzc44" data-path="components/ExchangeRateTable.js">
              <i className="fas fa-search" data-id="bohivs221" data-path="components/ExchangeRateTable.js"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto" data-id="2piskazcr" data-path="components/ExchangeRateTable.js">
        <table className="min-w-full divide-y divide-gray-200" data-id="wijj59dv3" data-path="components/ExchangeRateTable.js">
          <thead className="bg-gray-50" data-id="vpobu4ume" data-path="components/ExchangeRateTable.js">
            <tr data-id="s6ctvi93n" data-path="components/ExchangeRateTable.js">
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('code')} data-id="2edvpsqx7" data-path="components/ExchangeRateTable.js">

                <div className="flex items-center" data-id="iusj31uwg" data-path="components/ExchangeRateTable.js">
                  Currency Code
                  {getSortIcon('code')}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('name')} data-id="3qhjalc2o" data-path="components/ExchangeRateTable.js">

                <div className="flex items-center" data-id="5ily25qt7" data-path="components/ExchangeRateTable.js">
                  Currency Name
                  {getSortIcon('name')}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                onClick={() => handleSort('rate')} data-id="b4lk988yq" data-path="components/ExchangeRateTable.js">

                <div className="flex items-center" data-id="gk5hu478e" data-path="components/ExchangeRateTable.js">
                  Exchange Rate
                  {getSortIcon('rate')}
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="d880l4ugn" data-path="components/ExchangeRateTable.js">

                Conversion
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200" data-id="0v8zbb657" data-path="components/ExchangeRateTable.js">
            {loading ?
            <tr data-id="5i85nhxkg" data-path="components/ExchangeRateTable.js">
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500" data-id="yg40o8xvg" data-path="components/ExchangeRateTable.js">
                  <div className="flex justify-center" data-id="5wqxz4e5w" data-path="components/ExchangeRateTable.js">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" data-id="k1m8vejc5" data-path="components/ExchangeRateTable.js"></div>
                  </div>
                  <p className="mt-2" data-id="uw6glqfgn" data-path="components/ExchangeRateTable.js">Loading exchange rates...</p>
                </td>
              </tr> :
            filteredCurrencies.length === 0 ?
            <tr data-id="xewk9i37r" data-path="components/ExchangeRateTable.js">
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500" data-id="oy6czuw8d" data-path="components/ExchangeRateTable.js">
                  No currencies found matching your search.
                </td>
              </tr> :

            filteredCurrencies.map((currency) => {
              const rate = rates && rates.rates ? rates.rates[currency.code] || 0 : 0;
              return (
                <tr key={currency.code} className="hover:bg-gray-50" data-id="u708tegxy" data-path="components/ExchangeRateTable.js">
                    <td className="px-6 py-4 whitespace-nowrap" data-id="m6trnvp5j" data-path="components/ExchangeRateTable.js">
                      <div className="flex items-center" data-id="midjj7te3" data-path="components/ExchangeRateTable.js">
                        <span className="text-lg mr-2" data-id="m9n8ikaxz" data-path="components/ExchangeRateTable.js">{currency.flag}</span>
                        <span className="font-medium text-gray-900" data-id="e4lrpncct" data-path="components/ExchangeRateTable.js">{currency.code}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600" data-id="b1qsqh6ur" data-path="components/ExchangeRateTable.js">
                      {currency.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" data-id="2326y39er" data-path="components/ExchangeRateTable.js">
                      <span className="font-medium text-gray-900" data-id="s859mxhne" data-path="components/ExchangeRateTable.js">{rate.toFixed(4)}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600" data-id="ejx8k4y0g" data-path="components/ExchangeRateTable.js">
                      1 {baseCurrency} = {rate.toFixed(4)} {currency.code}
                    </td>
                  </tr>);

            })
            }
          </tbody>
        </table>
      </div>
      
      <div className="px-4 py-3 bg-gray-50 text-xs text-gray-500 border-t border-gray-200 flex justify-between items-center" data-id="t91qrqqcm" data-path="components/ExchangeRateTable.js">
        <div data-id="ti45zefvk" data-path="components/ExchangeRateTable.js">
          {rates && rates.date ?
          <div data-id="f6mvekh0k" data-path="components/ExchangeRateTable.js">Last updated: {formatDate(rates.date)}</div> :
          <div data-id="x0w84r8zm" data-path="components/ExchangeRateTable.js">Exchange rates may not be current</div>
          }
        </div>
        
        <div className="flex items-center space-x-2" data-id="ex9cl9os8" data-path="components/ExchangeRateTable.js">
          <span data-id="rh6esxt6w" data-path="components/ExchangeRateTable.js">Total currencies: {filteredCurrencies.length}</span>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1); // Reset to first page when changing items per page
            }}
            className="ml-2 border border-gray-300 rounded px-1 py-0.5 text-xs bg-white" data-id="0mv8ynihs" data-path="components/ExchangeRateTable.js">

            <option value="25" data-id="z9knmbac0" data-path="components/ExchangeRateTable.js">25</option>
            <option value="50" data-id="1zsmqe30o" data-path="components/ExchangeRateTable.js">50</option>
            <option value="100" data-id="u33qmnwtb" data-path="components/ExchangeRateTable.js">100</option>
            <option value="500" data-id="9ft8fk8q1" data-path="components/ExchangeRateTable.js">500</option>
          </select>
        </div>
      </div>
    </div>);

}
function Rates({ loading, rates, baseCurrency }) {
  return (
    <div className="space-y-8" data-id="on42f4u6i" data-path="pages/Rates.js">
      <div className="bg-white rounded-lg shadow-md p-6" data-id="3x9rfiit5" data-path="pages/Rates.js">
        <h1 className="text-2xl font-bold text-gray-800 mb-2" data-id="2qrlwfvhy" data-path="pages/Rates.js">Current Exchange Rates</h1>
        <p className="text-gray-600 mb-4" data-id="i2dndtos2" data-path="pages/Rates.js">
          Find the latest exchange rates for {baseCurrency} against world currencies. Data is updated regularly for accuracy.
        </p>
        
        <div className="p-4 bg-blue-50 rounded-md text-sm text-blue-800 flex items-start" data-id="y70qoyn4e" data-path="pages/Rates.js">
          <i className="fas fa-info-circle mt-0.5 mr-2 text-blue-600" data-id="vmzv7vc93" data-path="pages/Rates.js"></i>
          <div data-id="uuik114ix" data-path="pages/Rates.js">
            <p data-id="3bnoxwxea" data-path="pages/Rates.js">
              <strong data-id="yfzvzdab1" data-path="pages/Rates.js">Base currency:</strong> The base currency is the first currency in a currency pair. All exchange rates are expressed 
              in terms of the base currency.
            </p>
          </div>
        </div>
      </div>
      
      <ExchangeRateTable
        rates={rates}
        baseCurrency={baseCurrency}
        loading={loading} data-id="fwkhnkrun" data-path="pages/Rates.js" />

      
      <div className="bg-white rounded-lg shadow-md p-6" data-id="i403usft7" data-path="pages/Rates.js">
        <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="oy5iwnhfx" data-path="pages/Rates.js">Understanding Exchange Rates</h2>
        
        <div className="space-y-4" data-id="hbzv66czc" data-path="pages/Rates.js">
          <div data-id="m61e6ms8k" data-path="pages/Rates.js">
            <h3 className="font-medium text-gray-800 mb-1" data-id="2ro6vuzbu" data-path="pages/Rates.js">What is an exchange rate?</h3>
            <p className="text-gray-600" data-id="2hnd60svu" data-path="pages/Rates.js">
              An exchange rate is the value of one currency expressed in terms of another currency. Exchange rates can be either fixed or floating.
            </p>
          </div>
          
          <div data-id="nguq2pcfn" data-path="pages/Rates.js">
            <h3 className="font-medium text-gray-800 mb-1" data-id="dewngkigo" data-path="pages/Rates.js">How are exchange rates determined?</h3>
            <p className="text-gray-600" data-id="61dq48cmc" data-path="pages/Rates.js">
              Floating exchange rates are determined by supply and demand in the foreign exchange market. Factors that influence exchange rates include 
              interest rates, inflation, political stability, economic performance, and market speculation.
            </p>
          </div>
          
          <div data-id="a1c7maznt" data-path="pages/Rates.js">
            <h3 className="font-medium text-gray-800 mb-1" data-id="j9h8uv0f8" data-path="pages/Rates.js">Direct vs. Indirect quotes</h3>
            <p className="text-gray-600" data-id="jfvvp3bzw" data-path="pages/Rates.js">
              A direct quote shows how much domestic currency is needed to buy one unit of foreign currency. An indirect quote shows how much foreign 
              currency is needed to buy one unit of domestic currency.
            </p>
          </div>
          
          <div data-id="rdczvp4hy" data-path="pages/Rates.js">
            <h3 className="font-medium text-gray-800 mb-1" data-id="sazuzw508" data-path="pages/Rates.js">Bid and ask prices</h3>
            <p className="text-gray-600" data-id="81jk9ujm7" data-path="pages/Rates.js">
              The bid price is the price at which a dealer is willing to buy a currency, while the ask price is the price at which a dealer is willing 
              to sell a currency. The difference between these prices is called the spread.
            </p>
          </div>
        </div>
      </div>
    </div>);

}
const { useState, useEffect } = React;

function Guide() {
  const [activeSection, setActiveSection] = useState('basics');

  useEffect(() => {
    // Update SEO when component mounts
    if (window.seoHelpers) {
      window.seoHelpers.updateSEO('guide');
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Handle navigation to specific section
  const navigateToSection = (section) => {
    setActiveSection(section);

    // Scroll to the section
    const element = document.getElementById(section);
    if (element) {
      const navbarOffset = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Check if section is active for styling
  const isSectionActive = (section) => {
    return activeSection === section ? 'text-blue-600 border-blue-600' : 'text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-300';
  };

  return (
    <div className="space-y-8 animate-fade-in" data-id="v8u0wqdwo" data-path="pages/Guide.js">
      <div className="bg-white rounded-lg shadow-md p-6" data-id="5rn5wuq7l" data-path="pages/Guide.js">
        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-id="qo064h9o1" data-path="pages/Guide.js">Currency Exchange Guide</h1>
        <p className="text-gray-600 mb-6" data-id="h98cnpbyt" data-path="pages/Guide.js">
          Learn everything you need to know about currency exchange, from basic concepts to advanced strategies. 
          This comprehensive guide will help you understand exchange rates, conversion methods, and how to make informed decisions.
        </p>
        
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6" data-id="wmfujdpc3" data-path="pages/Guide.js">
          <div className="flex overflow-x-auto pb-1 hide-scrollbar" data-id="q10twgj0o" data-path="pages/Guide.js">
            <button
              onClick={() => navigateToSection('basics')}
              className={`mr-6 py-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${isSectionActive('basics')}`} data-id="wbgotazud" data-path="pages/Guide.js">

              Currency Basics
            </button>
            <button
              onClick={() => navigateToSection('rates')}
              className={`mr-6 py-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${isSectionActive('rates')}`} data-id="bdbqqe6l3" data-path="pages/Guide.js">

              Understanding Rates
            </button>
            <button
              onClick={() => navigateToSection('factors')}
              className={`mr-6 py-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${isSectionActive('factors')}`} data-id="deybj2kkg" data-path="pages/Guide.js">

              Influencing Factors
            </button>
            <button
              onClick={() => navigateToSection('converter')}
              className={`mr-6 py-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${isSectionActive('converter')}`} data-id="sz6w7pbrh" data-path="pages/Guide.js">

              Using Our Converter
            </button>
            <button
              onClick={() => navigateToSection('tips')}
              className={`mr-6 py-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${isSectionActive('tips')}`} data-id="x1104rmo1" data-path="pages/Guide.js">

              Travel Tips
            </button>
            <button
              onClick={() => navigateToSection('glossary')}
              className={`py-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${isSectionActive('glossary')}`} data-id="2yadlohvk" data-path="pages/Guide.js">

              Currency Glossary
            </button>
          </div>
        </div>
        
        {/* Guide Content */}
        <div className="prose max-w-none" data-id="nvrf08l7r" data-path="pages/Guide.js">
          {/* Currency Basics Section */}
          <section id="basics" className="mb-12" data-id="t3gel3q5o" data-path="pages/Guide.js">
            <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="4ip7vntrd" data-path="pages/Guide.js">Currency Basics</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6" data-id="5kwe0njg2" data-path="pages/Guide.js">
              <p className="text-blue-800 italic" data-id="sy78kmj8s" data-path="pages/Guide.js">
                "A currency is a standardized form of money, issued by a government and circulated within an economy."
              </p>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="pq90zz4s7" data-path="pages/Guide.js">What is Currency?</h3>
            <p data-id="2uzt1c9ky" data-path="pages/Guide.js">
              Currency is a system of money in general use in a particular country or region. The main functions of currency are:
            </p>
            <ul className="list-disc pl-6 my-3" data-id="zf9lk9x7f" data-path="pages/Guide.js">
              <li data-id="jct98ax61" data-path="pages/Guide.js">Medium of exchange: Used to facilitate trade</li>
              <li data-id="n4kuz07g1" data-path="pages/Guide.js">Unit of account: A standard unit for pricing goods and services</li>
              <li data-id="qx09jg3ox" data-path="pages/Guide.js">Store of value: A way to save purchasing power over time</li>
              <li data-id="3nfw4tnu9" data-path="pages/Guide.js">Standard of deferred payment: A way to record debts</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="z3mx61kux" data-path="pages/Guide.js">Currency Codes</h3>
            <p data-id="e0x7k91x5" data-path="pages/Guide.js">
              The International Organization for Standardization (ISO) has established a three-letter code system known as ISO 4217 to represent currencies. For example:
            </p>
            <ul className="list-disc pl-6 my-3" data-id="ttcr7or9m" data-path="pages/Guide.js">
              <li data-id="ezn7sbzl3" data-path="pages/Guide.js">USD - United States Dollar</li>
              <li data-id="dqj5g1rrh" data-path="pages/Guide.js">EUR - Euro</li>
              <li data-id="55iqtg61y" data-path="pages/Guide.js">GBP - British Pound Sterling</li>
              <li data-id="2kowcw6xx" data-path="pages/Guide.js">JPY - Japanese Yen</li>
              <li data-id="g2zw6ue9y" data-path="pages/Guide.js">CNY - Chinese Yuan</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="r3pwrgj6o" data-path="pages/Guide.js">Major World Currencies</h3>
            <p data-id="g46kmb5en" data-path="pages/Guide.js">
              While there are over 180 currencies in circulation worldwide, several major currencies dominate global trade and reserves:
            </p>
            
            <div className="overflow-x-auto my-4" data-id="hjv7s2m1p" data-path="pages/Guide.js">
              <table className="min-w-full border border-gray-300" data-id="rxxtkf9ch" data-path="pages/Guide.js">
                <thead className="bg-gray-50" data-id="9nx0k501d" data-path="pages/Guide.js">
                  <tr data-id="m9a92zccf" data-path="pages/Guide.js">
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" data-id="d089but3s" data-path="pages/Guide.js">Currency</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" data-id="bigdc36tf" data-path="pages/Guide.js">Code</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" data-id="faltb8wtf" data-path="pages/Guide.js">Symbol</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" data-id="utqyj4hp0" data-path="pages/Guide.js">Region/Country</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b" data-id="cki3f7d7w" data-path="pages/Guide.js">Global Importance</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200" data-id="vzw3fg0or" data-path="pages/Guide.js">
                  <tr data-id="9z00cvoo2" data-path="pages/Guide.js">
                    <td className="px-4 py-2 whitespace-nowrap" data-id="57q7ia0eb" data-path="pages/Guide.js">US Dollar</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="pfnbsokv1" data-path="pages/Guide.js">USD</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="2xcuan1w0" data-path="pages/Guide.js">$</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="1o35vtoe2" data-path="pages/Guide.js">United States</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="d33soh51p" data-path="pages/Guide.js">Primary reserve currency worldwide</td>
                  </tr>
                  <tr data-id="ndp2ip7v4" data-path="pages/Guide.js">
                    <td className="px-4 py-2 whitespace-nowrap" data-id="85tt1psls" data-path="pages/Guide.js">Euro</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="bpeycul7a" data-path="pages/Guide.js">EUR</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="c1cb9xdu0" data-path="pages/Guide.js">€</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="s3vctxqlj" data-path="pages/Guide.js">Eurozone</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="rl690mqjv" data-path="pages/Guide.js">Second largest reserve currency</td>
                  </tr>
                  <tr data-id="io59ef6o3" data-path="pages/Guide.js">
                    <td className="px-4 py-2 whitespace-nowrap" data-id="yh8bhg7ks" data-path="pages/Guide.js">Japanese Yen</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="1fl1we1t5" data-path="pages/Guide.js">JPY</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="590mgng2u" data-path="pages/Guide.js">¥</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="trm0loxah" data-path="pages/Guide.js">Japan</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="y4mzxtroj" data-path="pages/Guide.js">Third largest reserve currency</td>
                  </tr>
                  <tr data-id="zetvfbx4e" data-path="pages/Guide.js">
                    <td className="px-4 py-2 whitespace-nowrap" data-id="ebn6m6vic" data-path="pages/Guide.js">British Pound</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="pk4m7mhur" data-path="pages/Guide.js">GBP</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="xpoyqmyjo" data-path="pages/Guide.js">£</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="wbzz00i3s" data-path="pages/Guide.js">United Kingdom</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="j1k3ermds" data-path="pages/Guide.js">Fourth largest reserve currency</td>
                  </tr>
                  <tr data-id="g4sckdu79" data-path="pages/Guide.js">
                    <td className="px-4 py-2 whitespace-nowrap" data-id="pjl9ubxdt" data-path="pages/Guide.js">Chinese Yuan</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="jr2d8s5p7" data-path="pages/Guide.js">CNY</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="8f3s9bns5" data-path="pages/Guide.js">¥</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="tack1weo2" data-path="pages/Guide.js">China</td>
                    <td className="px-4 py-2 whitespace-nowrap" data-id="ulcib5r0r" data-path="pages/Guide.js">Growing significance in international trade</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="my-8 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500" data-id="5jmy92zsv" data-path="pages/Guide.js">
              <h4 className="text-lg font-medium text-gray-800 mb-2" data-id="skiugpe1t" data-path="pages/Guide.js">Did You Know?</h4>
              <p className="text-gray-700" data-id="skz6ikems" data-path="pages/Guide.js">
                The US Dollar is used as the official currency in several countries beyond the United States, 
                including Ecuador, El Salvador, and Panama. This practice is known as "dollarization."
              </p>
            </div>
          </section>
          
          {/* Understanding Exchange Rates Section */}
          <section id="rates" className="mb-12" data-id="eyi3mln0y" data-path="pages/Guide.js">
            <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="9ibydg0tl" data-path="pages/Guide.js">Understanding Exchange Rates</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="byaho0gi6" data-path="pages/Guide.js">What is an Exchange Rate?</h3>
            <p data-id="jm2xmd8kq" data-path="pages/Guide.js">
              An exchange rate is the value of one currency expressed in terms of another currency. Exchange rates can be:
            </p>
            <ul className="list-disc pl-6 my-3" data-id="1neyexwek" data-path="pages/Guide.js">
              <li data-id="veyqfru16" data-path="pages/Guide.js"><strong data-id="dipqzj246" data-path="pages/Guide.js">Floating:</strong> Determined by supply and demand in the foreign exchange market</li>
              <li data-id="y53ooa1s3" data-path="pages/Guide.js"><strong data-id="osr9lgdbi" data-path="pages/Guide.js">Fixed/Pegged:</strong> Set by a government or central bank against another currency or basket of currencies</li>
              <li data-id="6oppcdhbq" data-path="pages/Guide.js"><strong data-id="cqmpqxhq8" data-path="pages/Guide.js">Managed Float:</strong> A hybrid system where the currency is generally market-determined but with occasional central bank intervention</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="rn3sb8l4m" data-path="pages/Guide.js">How to Read Exchange Rates</h3>
            <p data-id="vg12kkdox" data-path="pages/Guide.js">
              Exchange rates are typically quoted in pairs, showing how much of the second (quote) currency you can get for one unit of the first (base) currency.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4" data-id="3f3r5bcrr" data-path="pages/Guide.js">
              <p className="font-medium" data-id="bamdw0b2y" data-path="pages/Guide.js">Example: EUR/USD = 1.20</p>
              <p data-id="engpu1x97" data-path="pages/Guide.js">This means 1 Euro equals 1.20 US Dollars.</p>
              <ul className="list-disc pl-6 mt-2" data-id="rbykof5ha" data-path="pages/Guide.js">
                <li data-id="qqej6sohf" data-path="pages/Guide.js">EUR is the base currency</li>
                <li data-id="9tqsbmcji" data-path="pages/Guide.js">USD is the quote currency</li>
                <li data-id="suz95c6wk" data-path="pages/Guide.js">The rate shows how many USD you can get for 1 EUR</li>
              </ul>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="l9zda6rtc" data-path="pages/Guide.js">Direct vs. Indirect Quotes</h3>
            <p data-id="kl9x3ldug" data-path="pages/Guide.js">
              There are two ways to express exchange rates:
            </p>
            <ul className="list-disc pl-6 my-3" data-id="h3twh2stj" data-path="pages/Guide.js">
              <li data-id="dlh1zimfi" data-path="pages/Guide.js"><strong data-id="beehjwz95" data-path="pages/Guide.js">Direct Quote:</strong> Shows how much of your domestic currency is needed to buy one unit of foreign currency (e.g., 1.20 USD/EUR from a US perspective)</li>
              <li data-id="2kwr8j9li" data-path="pages/Guide.js"><strong data-id="fs5iq4yuh" data-path="pages/Guide.js">Indirect Quote:</strong> Shows how much foreign currency you can get for one unit of your domestic currency (e.g., 0.83 EUR/USD from a US perspective)</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="esg83uuhz" data-path="pages/Guide.js">Bid and Ask Prices</h3>
            <p data-id="vjpavtfl9" data-path="pages/Guide.js">
              When exchanging currencies through banks or exchange services, you'll encounter two prices:
            </p>
            <ul className="list-disc pl-6 my-3" data-id="nn8jpcddw" data-path="pages/Guide.js">
              <li data-id="bufgjnr9e" data-path="pages/Guide.js"><strong data-id="vbun8mban" data-path="pages/Guide.js">Bid Price:</strong> The price at which the dealer will buy the base currency from you</li>
              <li data-id="l688e5zjk" data-path="pages/Guide.js"><strong data-id="j8vdxve1z" data-path="pages/Guide.js">Ask Price:</strong> The price at which the dealer will sell the base currency to you</li>
              <li data-id="zipzsuywy" data-path="pages/Guide.js"><strong data-id="6z4tjptt3" data-path="pages/Guide.js">Spread:</strong> The difference between the bid and ask price, representing the dealer's profit</li>
            </ul>
            
            <div className="my-8" data-id="bd7c9npnu" data-path="pages/Guide.js">
              <h4 className="text-lg font-medium text-gray-800 mb-4" data-id="szybb9rcz" data-path="pages/Guide.js">How Exchange Rates Move: A Visual Example</h4>
              <div className="h-60 bg-gray-100 rounded-lg flex items-center justify-center" data-id="d8w2mvsg9" data-path="pages/Guide.js">
                <div className="text-center" data-id="8od7bx35x" data-path="pages/Guide.js">
                  <i className="fas fa-chart-line text-3xl text-blue-500 mb-2" data-id="hrbbxeflx" data-path="pages/Guide.js"></i>
                  <p className="text-gray-500" data-id="wdd6ktka2" data-path="pages/Guide.js">Interactive chart visualization would appear here</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2" data-id="8lwgirfh0" data-path="pages/Guide.js">
                Example: USD/EUR rate fluctuations over the past 6 months
              </p>
            </div>
          </section>
          
          {/* Factors Influencing Exchange Rates Section */}
          <section id="factors" className="mb-12" data-id="aski3nrn8" data-path="pages/Guide.js">
            <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="k70zwyw7e" data-path="pages/Guide.js">Factors Influencing Exchange Rates</h2>
            
            <p data-id="hp8et7ip6" data-path="pages/Guide.js">
              Exchange rates are influenced by numerous economic, political, and psychological factors. Understanding these can help you anticipate potential currency movements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6" data-id="hm0zacvbg" data-path="pages/Guide.js">
              <div className="bg-gray-50 p-4 rounded-lg border-t-4 border-blue-500" data-id="6orwzh1ax" data-path="pages/Guide.js">
                <h3 className="text-lg font-medium mb-2" data-id="brosbgjyp" data-path="pages/Guide.js">Economic Factors</h3>
                <ul className="list-disc pl-6" data-id="8bpq5nbvg" data-path="pages/Guide.js">
                  <li data-id="2qqsmszeo" data-path="pages/Guide.js"><strong data-id="c4mqqhpao" data-path="pages/Guide.js">Interest Rates:</strong> Higher interest rates tend to attract foreign investment, increasing demand for the currency</li>
                  <li data-id="mi4gk6hlf" data-path="pages/Guide.js"><strong data-id="gfgsnytfp" data-path="pages/Guide.js">Inflation:</strong> Higher inflation typically leads to currency depreciation</li>
                  <li data-id="d6y05ahxs" data-path="pages/Guide.js"><strong data-id="9uo1ij6fq" data-path="pages/Guide.js">Economic Growth:</strong> Strong GDP growth often leads to currency appreciation</li>
                  <li data-id="9kmrmthcm" data-path="pages/Guide.js"><strong data-id="gq9f18cq3" data-path="pages/Guide.js">Trade Balance:</strong> Trade surpluses tend to strengthen a currency</li>
                  <li data-id="ppbsa3kn6" data-path="pages/Guide.js"><strong data-id="nk6g36o8x" data-path="pages/Guide.js">Public Debt:</strong> High public debt can lead to currency depreciation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-t-4 border-green-500" data-id="07ljipt7m" data-path="pages/Guide.js">
                <h3 className="text-lg font-medium mb-2" data-id="u176pktda" data-path="pages/Guide.js">Political Factors</h3>
                <ul className="list-disc pl-6" data-id="37wxl6ed2" data-path="pages/Guide.js">
                  <li data-id="4kro83tuo" data-path="pages/Guide.js"><strong data-id="gy2gtdpw7" data-path="pages/Guide.js">Political Stability:</strong> Stable governments attract foreign investment</li>
                  <li data-id="xu514d14t" data-path="pages/Guide.js"><strong data-id="7pq1wlprc" data-path="pages/Guide.js">Elections:</strong> Can create uncertainty and volatility</li>
                  <li data-id="28vikpwft" data-path="pages/Guide.js"><strong data-id="p2gso46q1" data-path="pages/Guide.js">Government Policy:</strong> Fiscal and monetary policies affect currency value</li>
                  <li data-id="juzqrh7l5" data-path="pages/Guide.js"><strong data-id="w4yzclx6z" data-path="pages/Guide.js">Geopolitical Events:</strong> Wars, conflicts, and international relations</li>
                  <li data-id="l6glpkuza" data-path="pages/Guide.js"><strong data-id="6mix4rfb2" data-path="pages/Guide.js">Sanctions:</strong> Economic sanctions can significantly impact currency values</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-t-4 border-purple-500" data-id="t9vnyux8b" data-path="pages/Guide.js">
                <h3 className="text-lg font-medium mb-2" data-id="9fzdwqyl8" data-path="pages/Guide.js">Market Psychology</h3>
                <ul className="list-disc pl-6" data-id="v044x2x97" data-path="pages/Guide.js">
                  <li data-id="0jr2leh3h" data-path="pages/Guide.js"><strong data-id="yfron0tho" data-path="pages/Guide.js">Market Sentiment:</strong> Positive/negative perceptions drive trading decisions</li>
                  <li data-id="2lg1dd3f0" data-path="pages/Guide.js"><strong data-id="f2kq7j2dw" data-path="pages/Guide.js">Speculation:</strong> Trading based on expected future movements</li>
                  <li data-id="ds078t4h8" data-path="pages/Guide.js"><strong data-id="kku47ygge" data-path="pages/Guide.js">Risk Appetite:</strong> In times of uncertainty, investors favor "safe haven" currencies</li>
                  <li data-id="obr5e0e0v" data-path="pages/Guide.js"><strong data-id="7j9xc8x1x" data-path="pages/Guide.js">Market Momentum:</strong> Trends can reinforce themselves in the short term</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-t-4 border-yellow-500" data-id="hdz26ilwi" data-path="pages/Guide.js">
                <h3 className="text-lg font-medium mb-2" data-id="v6iyjlgwy" data-path="pages/Guide.js">Central Bank Interventions</h3>
                <ul className="list-disc pl-6" data-id="69qdv9iy5" data-path="pages/Guide.js">
                  <li data-id="q9xb584kv" data-path="pages/Guide.js"><strong data-id="l56vgczoo" data-path="pages/Guide.js">Interest Rate Decisions:</strong> Central banks adjust rates to manage inflation and growth</li>
                  <li data-id="6daayefuz" data-path="pages/Guide.js"><strong data-id="62qmg7qjt" data-path="pages/Guide.js">Quantitative Easing:</strong> Increasing money supply typically weakens currency</li>
                  <li data-id="t1mvsitqz" data-path="pages/Guide.js"><strong data-id="f88padmk8" data-path="pages/Guide.js">Direct Intervention:</strong> Central banks buying or selling their own currency</li>
                  <li data-id="w183r3iwu" data-path="pages/Guide.js"><strong data-id="7xet4yb0j" data-path="pages/Guide.js">Forward Guidance:</strong> Statements about future policy direction</li>
                </ul>
              </div>
            </div>
            
            <div className="my-8 bg-blue-50 p-6 rounded-lg" data-id="8vr6kndyb" data-path="pages/Guide.js">
              <h3 className="text-lg font-medium text-blue-800 mb-3" data-id="8vlg07z6w" data-path="pages/Guide.js">Case Study: Brexit Impact on GBP</h3>
              <p className="mb-4" data-id="d517ipga2" data-path="pages/Guide.js">
                The 2016 Brexit referendum result caused one of the most significant one-day drops in a major currency's value:
              </p>
              <ul className="list-disc pl-6 text-blue-700" data-id="53ujb7h98" data-path="pages/Guide.js">
                <li data-id="olq74yie2" data-path="pages/Guide.js">GBP/USD fell from around 1.50 to 1.32 in a single day (over 10% drop)</li>
                <li data-id="4t3w62rwn" data-path="pages/Guide.js">The uncertainty surrounding the UK's future relationship with the EU continued to pressure the pound</li>
                <li data-id="qx5jvpbmd" data-path="pages/Guide.js">Each subsequent Brexit development caused volatility in GBP exchange rates</li>
                <li data-id="otaf6jrwb" data-path="pages/Guide.js">This demonstrates how political events can have immediate and lasting impacts on currency values</li>
              </ul>
            </div>
          </section>
          
          {/* Using Our Converter Section */}
          <section id="converter" className="mb-12" data-id="uq2jxwxlj" data-path="pages/Guide.js">
            <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="cm2zsbj1y" data-path="pages/Guide.js">Using Our Currency Converter</h2>
            
            <p data-id="ppxswv1mh" data-path="pages/Guide.js">
              Global Exchange provides a powerful yet easy-to-use currency converter. Here's how to make the most of it:
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="ofaiqlfjt" data-path="pages/Guide.js">Basic Conversion</h3>
            <ol className="list-decimal pl-6 my-3" data-id="e9mch0jee" data-path="pages/Guide.js">
              <li data-id="mknjk6yzy" data-path="pages/Guide.js"><strong data-id="w30eqm743" data-path="pages/Guide.js">Enter Amount:</strong> Type the amount you want to convert in the "Amount" field</li>
              <li data-id="9w2khckua" data-path="pages/Guide.js"><strong data-id="hth3mumbs" data-path="pages/Guide.js">Select From Currency:</strong> Choose the currency you're converting from in the dropdown</li>
              <li data-id="85nunnn5n" data-path="pages/Guide.js"><strong data-id="gi7c04fl9" data-path="pages/Guide.js">Select To Currency:</strong> Choose the currency you're converting to</li>
              <li data-id="4zqdt06tb" data-path="pages/Guide.js"><strong data-id="7b9n3pvpw" data-path="pages/Guide.js">View Result:</strong> The converted amount will display automatically</li>
            </ol>
            
            <div className="bg-gray-50 p-4 rounded-lg my-6 border border-gray-200" data-id="qfu79i57n" data-path="pages/Guide.js">
              <h4 className="font-medium mb-2" data-id="l7ovj6oj2" data-path="pages/Guide.js">Pro Tip: Quick Currency Selection</h4>
              <p data-id="q5c8aq806" data-path="pages/Guide.js">
                Use the search function in the currency dropdowns to quickly find currencies by code (USD) or name (Dollar).
              </p>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="04mklmk2a" data-path="pages/Guide.js">Advanced Features</h3>
            <ul className="list-disc pl-6 my-3" data-id="navj144y0" data-path="pages/Guide.js">
              <li data-id="dkexomd77" data-path="pages/Guide.js"><strong data-id="fe1ylx9lu" data-path="pages/Guide.js">Swap Currencies:</strong> Click the swap button (↔️) to quickly reverse the conversion direction</li>
              <li data-id="ue65chs3n" data-path="pages/Guide.js"><strong data-id="fklo0p8zw" data-path="pages/Guide.js">Share Conversion:</strong> Use the "Copy Conversion Link" button to share a specific conversion with others</li>
              <li data-id="b4wrezze7" data-path="pages/Guide.js"><strong data-id="8z9gqv78z" data-path="pages/Guide.js">Rate Information:</strong> View the current exchange rate below the conversion result</li>
              <li data-id="px11e3ezg" data-path="pages/Guide.js"><strong data-id="3toysjlfj" data-path="pages/Guide.js">Last Updated:</strong> Check when the rate was last updated for accuracy</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="cczqg6hwb" data-path="pages/Guide.js">Using the Exchange Rate Table</h3>
            <p data-id="cxl9dv0g4" data-path="pages/Guide.js">
              Our Exchange Rates page offers a comprehensive view of current rates:
            </p>
            <ul className="list-disc pl-6 my-3" data-id="yj3whch8h" data-path="pages/Guide.js">
              <li data-id="5c1xu87oq" data-path="pages/Guide.js"><strong data-id="ztbjvg2t8" data-path="pages/Guide.js">Search:</strong> Find specific currencies quickly</li>
              <li data-id="o91b19ftl" data-path="pages/Guide.js"><strong data-id="z1wui9g74" data-path="pages/Guide.js">Sort:</strong> Order by currency code, name, or rate value</li>
              <li data-id="8kdl1ofzi" data-path="pages/Guide.js"><strong data-id="lpes324p1" data-path="pages/Guide.js">Customize Display:</strong> Change how many currencies to show at once</li>
              <li data-id="yfub6csib" data-path="pages/Guide.js"><strong data-id="ciptvbmft" data-path="pages/Guide.js">Base Currency:</strong> Change the base currency to see all rates relative to a different currency</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="rpdxzot68" data-path="pages/Guide.js">Historical Rate Charts</h3>
            <p data-id="3jw8nhwik" data-path="pages/Guide.js">
              To analyze currency trends over time:
            </p>
            <ol className="list-decimal pl-6 my-3" data-id="mi5xxs5nd" data-path="pages/Guide.js">
              <li data-id="8lzumsnfs" data-path="pages/Guide.js">Navigate to the "Historical Rates" page</li>
              <li data-id="8h9bqcnz4" data-path="pages/Guide.js">Select your base currency and the target currency you're interested in</li>
              <li data-id="he4cbb9xz" data-path="pages/Guide.js">Choose the time period: 7 days, 1 month, or 3 months</li>
              <li data-id="yzrbrweyk" data-path="pages/Guide.js">Analyze the chart to identify trends, peaks, and valleys</li>
              <li data-id="y7c25xvww" data-path="pages/Guide.js">View the tabular data below for specific daily rates</li>
            </ol>
            
            <div className="my-8 bg-blue-50 p-6 rounded-lg" data-id="841tjd6xg" data-path="pages/Guide.js">
              <h3 className="text-lg font-medium text-blue-800 mb-3" data-id="jws1lay3n" data-path="pages/Guide.js">Video Tutorial</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg" data-id="34rtrqbmj" data-path="pages/Guide.js">
                <div className="flex items-center justify-center h-full" data-id="2fi5m64vf" data-path="pages/Guide.js">
                  <div className="text-center" data-id="gzheit6iq" data-path="pages/Guide.js">
                    <i className="fas fa-play-circle text-5xl text-blue-500 mb-3" data-id="lksh8ul11" data-path="pages/Guide.js"></i>
                    <p className="text-blue-700" data-id="fe82u2tzx" data-path="pages/Guide.js">Video tutorial would be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Travel Tips Section */}
          <section id="tips" className="mb-12" data-id="35w6nq4yt" data-path="pages/Guide.js">
            <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="bfbva9s2q" data-path="pages/Guide.js">Currency Exchange Tips for Travelers</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6" data-id="f0ryi5qq9" data-path="pages/Guide.js">
              <p className="text-blue-800 italic" data-id="ttajg6tol" data-path="pages/Guide.js">
                "Smart currency management can save travelers up to 5-10% on their total travel budget."
              </p>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="es77wg5n8" data-path="pages/Guide.js">Before You Travel</h3>
            <ul className="list-disc pl-6 my-3" data-id="74jwitil4" data-path="pages/Guide.js">
              <li data-id="j1ghixnix" data-path="pages/Guide.js"><strong data-id="vmmg6p39a" data-path="pages/Guide.js">Research Exchange Rates:</strong> Know the approximate exchange rate before your trip</li>
              <li data-id="s4e5pwvdl" data-path="pages/Guide.js"><strong data-id="55ij6azjz" data-path="pages/Guide.js">Check Currency Restrictions:</strong> Some countries limit how much currency you can bring in or take out</li>
              <li data-id="ugckm0jz5" data-path="pages/Guide.js"><strong data-id="268yd9ig1" data-path="pages/Guide.js">Notify Your Bank:</strong> Let them know your travel plans to prevent your cards from being blocked</li>
              <li data-id="d4zbh7mex" data-path="pages/Guide.js"><strong data-id="d03v21vid" data-path="pages/Guide.js">Get a Small Amount of Local Currency:</strong> Exchange enough for immediate needs (transportation, food) before departing</li>
            </ul>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="q6tx3xj3e" data-path="pages/Guide.js">Best Places to Exchange Currency</h3>
            <p data-id="ox75q99sd" data-path="pages/Guide.js">
              Listed from generally best to worst rates:
            </p>
            <ol className="list-decimal pl-6 my-3" data-id="jmd30feq5" data-path="pages/Guide.js">
              <li data-id="uyqxfsvwp" data-path="pages/Guide.js"><strong data-id="qmlxeqz52" data-path="pages/Guide.js">ATMs in Your Destination:</strong> Often provide the closest rate to the interbank rate, though ATM fees may apply</li>
              <li data-id="79g7fm96o" data-path="pages/Guide.js"><strong data-id="dfkn7svp9" data-path="pages/Guide.js">Credit Cards:</strong> Many offer favorable exchange rates (look for cards with no foreign transaction fees)</li>
              <li data-id="lzgi329jo" data-path="pages/Guide.js"><strong data-id="2167iojqw" data-path="pages/Guide.js">Local Banks:</strong> Generally better rates than airport exchanges or tourist areas</li>
              <li data-id="mz0bwgb33" data-path="pages/Guide.js"><strong data-id="svhsj7kyn" data-path="pages/Guide.js">Currency Exchange Offices:</strong> Compare rates and fees, as they vary widely</li>
              <li data-id="ytiutxdaz" data-path="pages/Guide.js"><strong data-id="qdtjvq2ao" data-path="pages/Guide.js">Hotels:</strong> Convenient but typically offer poor rates</li>
              <li data-id="8hdrh1yu2" data-path="pages/Guide.js"><strong data-id="xps9pekcm" data-path="pages/Guide.js">Airport Kiosks:</strong> Usually offer the worst rates, with high fees and spreads</li>
            </ol>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6" data-id="dylmej9jt" data-path="pages/Guide.js">
              <div className="bg-green-50 p-4 rounded-lg" data-id="ebwnwcsih" data-path="pages/Guide.js">
                <h4 className="font-medium text-green-800 mb-2" data-id="lvmxmu1mh" data-path="pages/Guide.js">DO:</h4>
                <ul className="list-disc pl-6 text-green-700" data-id="2rt5a3bp3" data-path="pages/Guide.js">
                  <li data-id="m1pp7ks6i" data-path="pages/Guide.js">Compare rates from multiple providers</li>
                  <li data-id="qh968mk5n" data-path="pages/Guide.js">Understand all fees before exchanging</li>
                  <li data-id="jrnbyy1sn" data-path="pages/Guide.js">Consider a multi-currency travel card</li>
                  <li data-id="mu2xz3h68" data-path="pages/Guide.js">Exchange in larger amounts to minimize fee impact</li>
                  <li data-id="mzykd2z4h" data-path="pages/Guide.js">Pay in local currency when using cards abroad</li>
                  <li data-id="2b6dso0sg" data-path="pages/Guide.js">Keep exchange receipts (required in some countries)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg" data-id="l5yf7a0tp" data-path="pages/Guide.js">
                <h4 className="font-medium text-red-800 mb-2" data-id="3yiw1x6np" data-path="pages/Guide.js">DON'T:</h4>
                <ul className="list-disc pl-6 text-red-700" data-id="d53nwxrav" data-path="pages/Guide.js">
                  <li data-id="avxvbjila" data-path="pages/Guide.js">Exchange at airports or hotels if avoidable</li>
                  <li data-id="25faljqqm" data-path="pages/Guide.js">Accept "dynamic currency conversion" when paying by card</li>
                  <li data-id="ru6v8ixdu" data-path="pages/Guide.js">Carry large amounts of cash</li>
                  <li data-id="2kqibozyz" data-path="pages/Guide.js">Use exchange services that don't clearly display rates</li>
                  <li data-id="2z4ochgty" data-path="pages/Guide.js">Forget to account for commissions and fees</li>
                  <li data-id="o3dgsskpg" data-path="pages/Guide.js">Exchange more than you need (avoid converting back)</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-2" data-id="wal4uwd7y" data-path="pages/Guide.js">Understanding Currency Conversion Fees</h3>
            <p data-id="gymvtqiry" data-path="pages/Guide.js">
              When exchanging currency or making purchases abroad, you may encounter several types of fees:
            </p>
            <ul className="list-disc pl-6 my-3" data-id="gbjn0idyg" data-path="pages/Guide.js">
              <li data-id="6vchsujbq" data-path="pages/Guide.js"><strong data-id="04td3bs8j" data-path="pages/Guide.js">Exchange Rate Margin:</strong> The difference between the mid-market rate and the rate you're offered</li>
              <li data-id="z2z2vs86u" data-path="pages/Guide.js"><strong data-id="dgkj8nacm" data-path="pages/Guide.js">Fixed Commission:</strong> A flat fee per transaction (e.g., $5 per exchange)</li>
              <li data-id="25zh4je7o" data-path="pages/Guide.js"><strong data-id="5qt9sqpfv" data-path="pages/Guide.js">Percentage Commission:</strong> A percentage of the amount exchanged (e.g., 2% of total)</li>
              <li data-id="h5fyeop8p" data-path="pages/Guide.js"><strong data-id="fo25r1icb" data-path="pages/Guide.js">ATM Fees:</strong> Both your bank and the local bank may charge fees</li>
              <li data-id="0gf8mfukk" data-path="pages/Guide.js"><strong data-id="ias0xw8di" data-path="pages/Guide.js">Foreign Transaction Fees:</strong> Additional fees on credit card purchases (typically 1-3%)</li>
              <li data-id="j86r74gee" data-path="pages/Guide.js"><strong data-id="j5gdp4oi6" data-path="pages/Guide.js">Dynamic Currency Conversion (DCC):</strong> An option to pay in your home currency, usually with an unfavorable rate</li>
            </ul>
            
            <div className="my-8 bg-yellow-50 p-6 rounded-lg" data-id="d8dw0qnju" data-path="pages/Guide.js">
              <h3 className="text-lg font-medium text-yellow-800 mb-3" data-id="l0e5w70qy" data-path="pages/Guide.js">Safety Tips</h3>
              <ul className="list-disc pl-6 text-yellow-700" data-id="mgcv2cean" data-path="pages/Guide.js">
                <li data-id="jlk71fk88" data-path="pages/Guide.js"><strong data-id="mraepwrba" data-path="pages/Guide.js">Diversify Payment Methods:</strong> Carry a mix of cash, credit cards, and debit cards</li>
                <li data-id="yuefkdw6s" data-path="pages/Guide.js"><strong data-id="glq6xurr6" data-path="pages/Guide.js">Use Money Belts or Hidden Pouches:</strong> For carrying larger amounts of cash securely</li>
                <li data-id="p3c3o7lch" data-path="pages/Guide.js"><strong data-id="nwfikgbqn" data-path="pages/Guide.js">Be Discreet:</strong> Don't display large amounts of cash in public</li>
                <li data-id="w5blablio" data-path="pages/Guide.js"><strong data-id="4j1z0zc06" data-path="pages/Guide.js">Use Hotel Safes:</strong> Store extra cash and spare cards</li>
                <li data-id="ijhq5cczz" data-path="pages/Guide.js"><strong data-id="cjfuvnk3a" data-path="pages/Guide.js">Keep Emergency Funds:</strong> Have some USD or EUR as emergency backup (widely accepted)</li>
                <li data-id="pc7nw6mwr" data-path="pages/Guide.js"><strong data-id="2esg9e5x5" data-path="pages/Guide.js">Record Information:</strong> Keep a record of your card numbers and bank contact information separate from your cards</li>
              </ul>
            </div>
          </section>
          
          {/* Currency Glossary Section */}
          <section id="glossary" className="mb-12" data-id="j1mktsn5g" data-path="pages/Guide.js">
            <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="nn3j4fbr4" data-path="pages/Guide.js">Currency Exchange Glossary</h2>
            
            <p className="mb-6" data-id="senoml0ps" data-path="pages/Guide.js">
              Understanding the terminology used in currency exchange will help you make more informed decisions.
              Here's a comprehensive glossary of important terms:
            </p>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden" data-id="jf57qojsv" data-path="pages/Guide.js">
              <div className="grid grid-cols-1 divide-y divide-gray-200" data-id="x5o2jxfpf" data-path="pages/Guide.js">
                <div className="p-4" data-id="utz512156" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="msscol9as" data-path="pages/Guide.js">Base Currency</h3>
                  <p data-id="79ufekyra" data-path="pages/Guide.js">The first currency in a currency pair. The exchange rate shows how much of the quote currency is needed to purchase one unit of the base currency.</p>
                </div>
                
                <div className="p-4" data-id="ry6w8w41e" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="bt93j31qt" data-path="pages/Guide.js">Quote Currency</h3>
                  <p data-id="v9z8xogqx" data-path="pages/Guide.js">The second currency in a currency pair. It represents how much of this currency is needed to purchase one unit of the base currency.</p>
                </div>
                
                <div className="p-4" data-id="blrsfsf1v" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="hjdg31cmt" data-path="pages/Guide.js">Exchange Rate</h3>
                  <p data-id="8mbfm5eqb" data-path="pages/Guide.js">The value of one currency expressed in terms of another currency.</p>
                </div>
                
                <div className="p-4" data-id="eht0khh40" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="djz9qm655" data-path="pages/Guide.js">Spot Rate</h3>
                  <p data-id="h1spi4yqg" data-path="pages/Guide.js">The current exchange rate for immediate delivery of currencies.</p>
                </div>
                
                <div className="p-4" data-id="hyzser6fb" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="pglp5xoy2" data-path="pages/Guide.js">Forward Rate</h3>
                  <p data-id="r3es6yvzu" data-path="pages/Guide.js">An exchange rate quoted for delivery at a specific future date.</p>
                </div>
                
                <div className="p-4" data-id="2qshaa3fy" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="ceuz3ibye" data-path="pages/Guide.js">Bid Price</h3>
                  <p data-id="j67bfxhs7" data-path="pages/Guide.js">The price at which a dealer is willing to buy a currency from you.</p>
                </div>
                
                <div className="p-4" data-id="8do8qy6l3" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="0cvejygxe" data-path="pages/Guide.js">Ask Price</h3>
                  <p data-id="avq5hlce4" data-path="pages/Guide.js">The price at which a dealer is willing to sell a currency to you.</p>
                </div>
                
                <div className="p-4" data-id="gluvy8ubb" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="dh77pjyul" data-path="pages/Guide.js">Spread</h3>
                  <p data-id="moji9or4a" data-path="pages/Guide.js">The difference between the bid and ask price, representing the dealer's profit margin.</p>
                </div>
                
                <div className="p-4" data-id="u3mgsnbdn" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="kbz0xd1ka" data-path="pages/Guide.js">Pegged Currency</h3>
                  <p data-id="dmrtemonz" data-path="pages/Guide.js">A currency whose value is fixed to another currency, a basket of currencies, or another measure of value.</p>
                </div>
                
                <div className="p-4" data-id="fqxbeytl2" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="169szveoe" data-path="pages/Guide.js">Floating Currency</h3>
                  <p data-id="12mhxmpzc" data-path="pages/Guide.js">A currency whose value is determined by free market forces of supply and demand.</p>
                </div>
                
                <div className="p-4" data-id="hciirf4k9" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="ok8vw5daz" data-path="pages/Guide.js">Currency Appreciation</h3>
                  <p data-id="qeu6jxdkq" data-path="pages/Guide.js">An increase in the value of one currency relative to another currency.</p>
                </div>
                
                <div className="p-4" data-id="oodgwnj1b" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="px2etpz38" data-path="pages/Guide.js">Currency Depreciation</h3>
                  <p data-id="8ku4o2mk2" data-path="pages/Guide.js">A decrease in the value of one currency relative to another currency.</p>
                </div>
                
                <div className="p-4" data-id="jn5xhsqkh" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="xvfrqpvdu" data-path="pages/Guide.js">Forex (FX)</h3>
                  <p data-id="edgu0q2rs" data-path="pages/Guide.js">Short for "foreign exchange," the global marketplace for exchanging national currencies.</p>
                </div>
                
                <div className="p-4" data-id="qn6s3unct" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="kr3038ko1" data-path="pages/Guide.js">Interbank Rate</h3>
                  <p data-id="hdy38bg9f" data-path="pages/Guide.js">The exchange rate at which banks trade currencies with each other. This is the "wholesale" rate and is generally more favorable than rates offered to the public.</p>
                </div>
                
                <div className="p-4" data-id="6ftw0zq6b" data-path="pages/Guide.js">
                  <h3 className="font-medium text-blue-600" data-id="3xoer71q1" data-path="pages/Guide.js">Currency Pair</h3>
                  <p data-id="tk4vgdqh0" data-path="pages/Guide.js">The quotation of two different currencies, with the value of one currency being quoted against the other (e.g., EUR/USD).</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Resources Section */}
          <section className="bg-blue-50 p-6 rounded-lg" data-id="tl93j55g9" data-path="pages/Guide.js">
            <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="q5p0nbl5f" data-path="pages/Guide.js">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="x7awb7k6u" data-path="pages/Guide.js">
              <div data-id="swhb0s955" data-path="pages/Guide.js">
                <h3 className="text-lg font-medium mb-2" data-id="rd2looety" data-path="pages/Guide.js">Learn More About Currencies</h3>
                <ul className="list-disc pl-6 text-blue-700" data-id="ilqow01nz" data-path="pages/Guide.js">
                  <li data-id="a46fxjfgk" data-path="pages/Guide.js"><a href="#" className="hover:underline" data-id="9554us6qv" data-path="pages/Guide.js">International Monetary Fund (IMF)</a></li>
                  <li data-id="veg92mj6k" data-path="pages/Guide.js"><a href="#" className="hover:underline" data-id="uz8m88b4t" data-path="pages/Guide.js">World Bank Data on Currencies</a></li>
                  <li data-id="9tn46mkro" data-path="pages/Guide.js"><a href="#" className="hover:underline" data-id="csvhfbdzr" data-path="pages/Guide.js">Bank for International Settlements</a></li>
                  <li data-id="pbwcvr10j" data-path="pages/Guide.js"><a href="#" className="hover:underline" data-id="p3nhyua0o" data-path="pages/Guide.js">Financial Times Currency Section</a></li>
                </ul>
              </div>
              
              <div data-id="noflrfytx" data-path="pages/Guide.js">
                <h3 className="text-lg font-medium mb-2" data-id="ejosl6xd8" data-path="pages/Guide.js">Tools and Calculators</h3>
                <ul className="list-disc pl-6 text-blue-700" data-id="l8mqyb36b" data-path="pages/Guide.js">
                  <li data-id="opi1vu5e5" data-path="pages/Guide.js"><a href="#" className="hover:underline" data-id="x7xkhsvdm" data-path="pages/Guide.js">Historical Currency Trends</a></li>
                  <li data-id="d70tkt65i" data-path="pages/Guide.js"><a href="#" className="hover:underline" data-id="n4lp97uqi" data-path="pages/Guide.js">Inflation Calculator</a></li>
                  <li data-id="4539b3y90" data-path="pages/Guide.js"><a href="#" className="hover:underline" data-id="sj42un7j7" data-path="pages/Guide.js">Travel Budget Calculator</a></li>
                  <li data-id="04clq608z" data-path="pages/Guide.js"><a href="#" className="hover:underline" data-id="qggycgjtb" data-path="pages/Guide.js">Currency Cheat Sheets for Travelers</a></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center" data-id="tq4e44xlt" data-path="pages/Guide.js">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors" data-id="j7sslrmcq" data-path="pages/Guide.js">
                Download Complete Currency Guide (PDF)
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>);

}
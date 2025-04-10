const { useState, useEffect } = React;

function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState({});

  useEffect(() => {
    // Update SEO when component mounts
    if (window.seoHelpers) {
      window.seoHelpers.updateSEO('faq');
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Define FAQ categories
  const categories = [
  { id: 'all', name: 'All Questions' },
  { id: 'general', name: 'General Information' },
  { id: 'converter', name: 'Currency Converter' },
  { id: 'rates', name: 'Exchange Rates' },
  { id: 'historical', name: 'Historical Data' },
  { id: 'technical', name: 'Technical Support' },
  { id: 'business', name: 'Business & Legal' }];


  // Define FAQ items
  const faqItems = [
  {
    id: 1,
    category: 'general',
    question: 'What is Global Exchange?',
    answer: 'Global Exchange is a free online currency conversion service that provides real-time exchange rates for world currencies. Our platform offers currency conversion, live exchange rates, historical charts, and educational resources about foreign exchange markets.'
  },
  {
    id: 2,
    category: 'general',
    question: 'How often are the exchange rates updated?',
    answer: 'Our exchange rates are updated several times per day to ensure accuracy. The rates are sourced from reliable financial data providers and major banks. The exact update frequency can be found at the bottom of our exchange rate tables, showing the last update timestamp.'
  },
  {
    id: 3,
    category: 'converter',
    question: 'How do I use the currency converter?',
    answer: 'To use our currency converter, simply enter the amount you want to convert in the "Amount" field, select the currency you want to convert from in the "From" dropdown, select the currency you want to convert to in the "To" dropdown, and the converted amount will be displayed automatically.'
  },
  {
    id: 4,
    category: 'converter',
    question: 'Can I convert between any currencies?',
    answer: 'Yes, our currency converter supports conversion between all major world currencies and many minor ones. We support over 150 currencies from around the world, including both fiat currencies and some popular cryptocurrencies.'
  },
  {
    id: 5,
    category: 'rates',
    question: 'Are the exchange rates provided by Global Exchange suitable for financial transactions?',
    answer: 'The exchange rates displayed on Global Exchange are for informational purposes only. While we strive to provide accurate and up-to-date information, the actual rates used for financial transactions by banks and other financial institutions may differ. For precise rates for financial transactions, please consult your bank or financial service provider.'
  },
  {
    id: 6,
    category: 'rates',
    question: 'Why are there differences between exchange rates from different sources?',
    answer: 'Exchange rates can vary between different sources due to factors such as timing of updates, data sources, and the addition of fees or margins. Banks and money transfer services typically add a margin to the mid-market rate (the rate we display) to cover their costs and make a profit.'
  },
  {
    id: 7,
    category: 'historical',
    question: 'How far back does the historical exchange rate data go?',
    answer: 'Our historical exchange rate data typically goes back several years for major currency pairs. For most currencies, we provide data going back at least 5 years, with some major currency pairs having historical data extending further back.'
  },
  {
    id: 8,
    category: 'historical',
    question: 'Can I download historical exchange rate data?',
    answer: 'Currently, direct downloading of historical data is not available through our standard interface. However, you can easily take screenshots of our charts or copy the data manually from our historical tables. For extensive data needs, please contact us about our API services.'
  },
  {
    id: 9,
    category: 'technical',
    question: 'Is there a mobile app for Global Exchange?',
    answer: 'Currently, we do not offer a dedicated mobile app. However, our website is fully responsive and optimized for mobile devices, providing a seamless experience on smartphones and tablets. Simply visit our website from your mobile browser to access all our features.'
  },
  {
    id: 10,
    category: 'technical',
    question: 'Why is the website not loading or showing outdated rates?',
    answer: 'If you encounter issues with our website not loading properly or displaying outdated rates, it could be due to cached data in your browser. Try clearing your browser cache or refreshing the page. If problems persist, please check your internet connection or contact our support team.'
  },
  {
    id: 11,
    category: 'business',
    question: 'Do you offer an API for businesses to access exchange rate data?',
    answer: 'Yes, we offer API access to our currency exchange data for businesses and developers. Our API provides access to real-time and historical exchange rates, currency conversion, and other features. For pricing and integration details, please contact our business team at business@globalexchange.com.'
  },
  {
    id: 12,
    category: 'business',
    question: 'Can I embed your currency converter on my website?',
    answer: "Yes, we offer embeddable widgets that allow you to add our currency converter to your website. The widgets are customizable to match your site's design and can be set up to display specific currency pairs. For implementation details and terms of use, please visit our Widgets page or contact our support team."
  },
  {
    id: 13,
    category: 'general',
    question: 'Is Global Exchange a financial institution or money transfer service?',
    answer: 'No, Global Exchange is not a financial institution, bank, or money transfer service. We do not process financial transactions, offer financial advice, or facilitate currency exchanges. We are an information service that provides exchange rate data and conversion tools for educational and informational purposes only.'
  },
  {
    id: 14,
    category: 'general',
    question: 'Does Global Exchange charge any fees?',
    answer: 'No, Global Exchange does not charge any fees for using our basic currency conversion tools and accessing exchange rate information. Our service is free for individual users. We generate revenue through advertising and offering premium services to businesses, such as API access and customized solutions.'
  },
  {
    id: 15,
    category: 'technical',
    question: 'How do I report a bug or technical issue on the website?',
    answer: 'If you encounter a bug or technical issue while using our website, please report it by sending an email to support@globalexchange.com with details of the problem, including what you were doing when the issue occurred, the device and browser you were using, and any error messages you received. Screenshots are also helpful for diagnosing issues.'
  }];


  // Toggle FAQ item
  const toggleQuestion = (id) => {
    setOpenQuestions((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // Filter FAQs based on search and category
  const filteredFAQs = faqItems.filter((item) => {
    const matchesSearch = searchTerm === '' ||
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 animate-fade-in" data-id="woc72iqph" data-path="pages/FAQ.js">
      <div className="bg-white rounded-lg shadow-md p-6" data-id="4id71rat3" data-path="pages/FAQ.js">
        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-id="rt7hpdjp6" data-path="pages/FAQ.js">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-6" data-id="1pz3rujf4" data-path="pages/FAQ.js">
          Find answers to the most common questions about currency exchange, our services, and how to use our tools effectively.
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8" data-id="z6ki7yrk5" data-path="pages/FAQ.js">
          <div className="relative flex-grow" data-id="8a4i4ywoq" data-path="pages/FAQ.js">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-id="1kl0gw6jq" data-path="pages/FAQ.js" />

            <div className="absolute left-0 top-0 mt-2.5 ml-3 text-gray-400" data-id="mrb9ix2al" data-path="pages/FAQ.js">
              <i className="fas fa-search" data-id="0e8nqwd38" data-path="pages/FAQ.js"></i>
            </div>
          </div>
          
          <div className="flex-shrink-0 w-full sm:w-auto" data-id="9gjpd2cwk" data-path="pages/FAQ.js">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-id="cbdqpy80y" data-path="pages/FAQ.js">

              {categories.map((category) =>
              <option key={category.id} value={category.id} data-id="z8lyckj3t" data-path="pages/FAQ.js">
                  {category.name}
                </option>
              )}
            </select>
          </div>
        </div>
        
        {/* FAQ List */}
        <div className="space-y-4" data-id="0bdqrv225" data-path="pages/FAQ.js">
          {filteredFAQs.length > 0 ?
          filteredFAQs.map((item) =>
          <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden" data-id="polx6rsn1" data-path="pages/FAQ.js">
                <button
              className={`w-full px-6 py-4 text-left font-medium flex justify-between items-center focus:outline-none ${openQuestions[item.id] ? 'bg-blue-50' : 'bg-white'}`}
              onClick={() => toggleQuestion(item.id)} data-id="zmf409440" data-path="pages/FAQ.js">

                  <span className="text-gray-900" data-id="b6hxqvm2u" data-path="pages/FAQ.js">{item.question}</span>
                  <span className="ml-4 flex-shrink-0 text-blue-500" data-id="szkkwz4p1" data-path="pages/FAQ.js">
                    <i className={`fas ${openQuestions[item.id] ? 'fa-chevron-up' : 'fa-chevron-down'}`} data-id="88jstl34l" data-path="pages/FAQ.js"></i>
                  </span>
                </button>
                
                {openQuestions[item.id] &&
            <div className="px-6 py-4 bg-white border-t border-gray-200" data-id="mfu3py6f7" data-path="pages/FAQ.js">
                    <p className="text-gray-600" data-id="pc9fhqgfe" data-path="pages/FAQ.js">{item.answer}</p>
                    
                    <div className="mt-3 text-xs text-gray-500" data-id="a0msfkf93" data-path="pages/FAQ.js">
                      Category: <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full" data-id="tnpm4pfrl" data-path="pages/FAQ.js">
                        {categories.find((cat) => cat.id === item.category)?.name || item.category}
                      </span>
                    </div>
                  </div>
            }
              </div>
          ) :

          <div className="text-center py-10 bg-gray-50 rounded-lg" data-id="cf1h0gui3" data-path="pages/FAQ.js">
              <i className="fas fa-search text-gray-300 text-4xl mb-3" data-id="hfw477t8d" data-path="pages/FAQ.js"></i>
              <p className="text-gray-500" data-id="5mz8b4sup" data-path="pages/FAQ.js">No results found for your search.</p>
              <p className="text-gray-400 text-sm mt-1" data-id="fttgqxyab" data-path="pages/FAQ.js">Try different keywords or browse all categories.</p>
              <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors" data-id="2xb0l6m71" data-path="pages/FAQ.js">

                Reset Filters
              </button>
            </div>
          }
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-blue-600 text-white rounded-lg shadow-md p-8 text-center" data-id="jjge8whet" data-path="pages/FAQ.js">
        <h2 className="text-2xl font-bold mb-4" data-id="801us7dkx" data-path="pages/FAQ.js">Can't find an answer to your question?</h2>
        <p className="mb-6 max-w-2xl mx-auto" data-id="3ykwjt7yz" data-path="pages/FAQ.js">
          If you couldn't find the information you were looking for, our support team is here to help.
          We typically respond to all inquiries within 24 hours.
        </p>
        <a
          href="#/contact"
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
          }}
          className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors" data-id="xag8yt8f0" data-path="pages/FAQ.js">

          Contact Us <i className="fas fa-arrow-right ml-2" data-id="dmsg44rr1" data-path="pages/FAQ.js"></i>
        </a>
      </div>
    </div>);

}
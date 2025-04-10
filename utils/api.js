// Function to fetch current exchange rates using multiple APIs with fallbacks
async function fetchExchangeRates(baseCurrency = 'USD') {
  try {
    const response = await fetch(`https://api.frankfurter.dev/v1/latest?base=${baseCurrency}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      base: data.base,
      date: data.date,
      rates: data.rates
    };
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    // Fall back to mock data if the API fails
    console.warn('Using mock exchange rate data as fallback');
    return getMockExchangeRates(baseCurrency);
  }
}

// Function to fetch historical exchange rates using Frankfurter API
async function fetchHistoricalRates(baseCurrency = 'USD', days = 90) {
  try {
    // Calculate start date (days ago from today)
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    // Format dates as YYYY-MM-DD
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];

    // Fetch time series data
    const response = await fetch(
      `https://api.frankfurter.dev/v1/${formattedStartDate}..${formattedEndDate}?base=${baseCurrency}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Transform the data format to match what the app expects
    const result = [];
    const dates = Object.keys(data.rates).sort().reverse(); // Sort dates in descending order

    for (const date of dates) {
      result.push({
        date: date,
        rates: data.rates[date]
      });
    }

    return result;
  } catch (error) {
    console.error('Error fetching historical rates:', error);
    console.warn('Using mock historical rate data as fallback');
    return getMockHistoricalRates(baseCurrency, days);
  }
}

// Function to fetch available currencies
async function fetchAvailableCurrencies() {
  try {
    // First try Frankfurter API
    try {
      const response = await fetch('https://api.frankfurter.dev/v1/currencies');

      if (response.ok) {
        return await response.json();
      }
    } catch (frankfurterError) {
      console.warn('Frankfurter API unavailable, trying alternative API');
    }

    // Try alternative API (OpenExchangeRates)
    try {
      const response = await fetch('https://openexchangerates.org/api/currencies.json');

      if (response.ok) {
        return await response.json();
      }
    } catch (openExchangeError) {
      console.warn('OpenExchangeRates API unavailable');
    }

    // If all APIs fail, throw error to use our fallback
    throw new Error('All currency APIs failed');

  } catch (error) {
    console.error('Error fetching currencies:', error);
    // Return a comprehensive set of currencies as fallback
    // This is just a subset of our full list defined in helpers.js
    return {
      USD: 'US Dollar',
      EUR: 'Euro',
      GBP: 'British Pound',
      JPY: 'Japanese Yen',
      CAD: 'Canadian Dollar',
      AUD: 'Australian Dollar',
      CHF: 'Swiss Franc',
      CNY: 'Chinese Yuan',
      INR: 'Indian Rupee',
      BRL: 'Brazilian Real',
      ZAR: 'South African Rand',
      RUB: 'Russian Ruble',
      KRW: 'South Korean Won',
      SGD: 'Singapore Dollar',
      NZD: 'New Zealand Dollar',
      MXN: 'Mexican Peso',
      HKD: 'Hong Kong Dollar',
      TRY: 'Turkish Lira',
      SEK: 'Swedish Krona',
      NOK: 'Norwegian Krone',
      DKK: 'Danish Krone',
      PLN: 'Polish Złoty',
      THB: 'Thai Baht',
      IDR: 'Indonesian Rupiah',
      HUF: 'Hungarian Forint',
      CZK: 'Czech Koruna',
      ILS: 'Israeli New Shekel',
      PHP: 'Philippine Peso',
      MYR: 'Malaysian Ringgit',
      AED: 'United Arab Emirates Dirham'
    };
  }
}

// Convert from one currency to another
function convertCurrency(amount, fromRate, toRate) {
  if (!fromRate || !toRate) return 0;

  // Convert from source currency to USD (or base), then to target currency
  return amount / fromRate * toRate;
}

// Function to get mock exchange rates if API fails
function getMockExchangeRates(baseCurrency = 'USD') {
  // For mock data, we'll focus on the most traded world currencies
  const mockRates = {
    USD: {
      EUR: 0.85,
      GBP: 0.75,
      JPY: 110.2,
      CAD: 1.25,
      AUD: 1.35,
      CHF: 0.92,
      CNY: 6.45,
      INR: 74.5,
      BRL: 5.2,
      ZAR: 14.8,
      RUB: 73.5,
      KRW: 1180.25,
      SGD: 1.35,
      NZD: 1.4,
      MXN: 20.2,
      HKD: 7.78,
      TRY: 8.5,
      SEK: 8.4,
      NOK: 8.5,
      DKK: 6.3,
      PLN: 3.8,
      THB: 33.3,
      IDR: 14300,
      HUF: 300,
      CZK: 21.8,
      ILS: 3.25,
      PHP: 50.2,
      MYR: 4.2,
      AED: 3.67
    },
    EUR: {
      USD: 1.18,
      GBP: 0.88,
      JPY: 129.5,
      CAD: 1.47,
      AUD: 1.59,
      CHF: 1.08,
      CNY: 7.58,
      INR: 87.5,
      BRL: 6.1,
      ZAR: 17.4,
      RUB: 86.5,
      KRW: 1390.25,
      SGD: 1.59,
      NZD: 1.65,
      MXN: 23.8,
      HKD: 9.15,
      TRY: 10.01,
      SEK: 9.9,
      NOK: 10.0,
      DKK: 7.44,
      PLN: 4.48,
      THB: 39.2,
      IDR: 16850,
      HUF: 353,
      CZK: 25.7,
      ILS: 3.83,
      PHP: 59.15,
      MYR: 4.95,
      AED: 4.33
    }
  };

  // Convert all rates to the base currency
  const baseRates = mockRates[baseCurrency] || mockRates.USD;
  const rates = {};

  Object.keys(baseRates).forEach((currency) => {
    rates[currency] = baseRates[currency];
  });

  // Add base currency with rate 1
  rates[baseCurrency] = 1;

  return {
    base: baseCurrency,
    date: new Date().toISOString().split('T')[0],
    rates: rates
  };
}

// Function to get mock historical rates
function getMockHistoricalRates(baseCurrency = 'USD', days = 7) {
  const result = [];
  const baseRates = {
    EUR: 0.85,
    GBP: 0.75,
    JPY: 110.2,
    CAD: 1.25,
    AUD: 1.35
  };

  // Generate slightly varied rates for the past 'days'
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const dailyRates = {};
    Object.keys(baseRates).forEach((currency) => {
      // Add a small random variation (-2% to +2%)
      const variation = 1 + (Math.random() * 0.04 - 0.02);
      dailyRates[currency] = baseRates[currency] * variation;
    });

    result.push({
      date: date.toISOString().split('T')[0],
      rates: dailyRates
    });
  }

  return result;
}
// Format currency amount with proper symbol and decimal places
function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 4
  }).format(amount);
}

// Format date to a readable string
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

// Get popular currencies list
function getPopularCurrencies() {
  return [
  // Major world currencies
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽', flag: '🇷🇺' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', flag: '🇲🇽' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', flag: '🇸🇪' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', flag: '🇳🇴' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr', flag: '🇩🇰' },
  { code: 'PLN', name: 'Polish Złoty', symbol: 'zł', flag: '🇵🇱' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', flag: '🇮🇩' },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', flag: '🇭🇺' },
  { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', flag: '🇨🇿' },
  { code: 'ILS', name: 'Israeli New Shekel', symbol: '₪', flag: '🇮🇱' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾' },
  { code: 'AED', name: 'United Arab Emirates Dirham', symbol: 'د.إ', flag: '🇦🇪' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦' },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei', flag: '🇷🇴' },

  // Europe
  { code: 'ALL', name: 'Albanian Lek', symbol: 'L', flag: '🇦🇱' },
  { code: 'AMD', name: 'Armenian Dram', symbol: '֏', flag: '🇦🇲' },
  { code: 'AZN', name: 'Azerbaijani Manat', symbol: '₼', flag: '🇦🇿' },
  { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark', symbol: 'KM', flag: '🇧🇦' },
  { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв', flag: '🇧🇬' },
  { code: 'BYN', name: 'Belarusian Ruble', symbol: 'Br', flag: '🇧🇾' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', flag: '🇨🇭' },
  { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč', flag: '🇨🇿' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr', flag: '🇩🇰' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'GEL', name: 'Georgian Lari', symbol: '₾', flag: '🇬🇪' },
  { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn', flag: '🇭🇷' },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft', flag: '🇭🇺' },
  { code: 'ISK', name: 'Icelandic Króna', symbol: 'kr', flag: '🇮🇸' },
  { code: 'MDL', name: 'Moldovan Leu', symbol: 'L', flag: '🇲🇩' },
  { code: 'MKD', name: 'Macedonian Denar', symbol: 'ден', flag: '🇲🇰' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr', flag: '🇳🇴' },
  { code: 'PLN', name: 'Polish Złoty', symbol: 'zł', flag: '🇵🇱' },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei', flag: '🇷🇴' },
  { code: 'RSD', name: 'Serbian Dinar', symbol: 'дин', flag: '🇷🇸' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', flag: '🇸🇪' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺', flag: '🇹🇷' },
  { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴', flag: '🇺🇦' },

  // Americas
  { code: 'ARS', name: 'Argentine Peso', symbol: '$', flag: '🇦🇷' },
  { code: 'BOB', name: 'Bolivian Boliviano', symbol: 'Bs.', flag: '🇧🇴' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { code: 'CLP', name: 'Chilean Peso', symbol: '$', flag: '🇨🇱' },
  { code: 'COP', name: 'Colombian Peso', symbol: '$', flag: '🇨🇴' },
  { code: 'CRC', name: 'Costa Rican Colón', symbol: '₡', flag: '🇨🇷' },
  { code: 'DOP', name: 'Dominican Peso', symbol: 'RD$', flag: '🇩🇴' },
  { code: 'GTQ', name: 'Guatemalan Quetzal', symbol: 'Q', flag: '🇬🇹' },
  { code: 'HNL', name: 'Honduran Lempira', symbol: 'L', flag: '🇭🇳' },
  { code: 'JMD', name: 'Jamaican Dollar', symbol: 'J$', flag: '🇯🇲' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', flag: '🇲🇽' },
  { code: 'NIO', name: 'Nicaraguan Córdoba', symbol: 'C$', flag: '🇳🇮' },
  { code: 'PAB', name: 'Panamanian Balboa', symbol: 'B/.', flag: '🇵🇦' },
  { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/', flag: '🇵🇪' },
  { code: 'PYG', name: 'Paraguayan Guaraní', symbol: '₲', flag: '🇵🇾' },
  { code: 'TTD', name: 'Trinidad and Tobago Dollar', symbol: 'TT$', flag: '🇹🇹' },
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'UYU', name: 'Uruguayan Peso', symbol: '$U', flag: '🇺🇾' },
  { code: 'VES', name: 'Venezuelan Bolívar', symbol: 'Bs.', flag: '🇻🇪' },

  // Asia
  { code: 'AED', name: 'United Arab Emirates Dirham', symbol: 'د.إ', flag: '🇦🇪' },
  { code: 'AFN', name: 'Afghan Afghani', symbol: '؋', flag: '🇦🇫' },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', flag: '🇧🇩' },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ب', flag: '🇧🇭' },
  { code: 'BND', name: 'Brunei Dollar', symbol: 'B$', flag: '🇧🇳' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$', flag: '🇭🇰' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp', flag: '🇮🇩' },
  { code: 'ILS', name: 'Israeli New Shekel', symbol: '₪', flag: '🇮🇱' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'IQD', name: 'Iraqi Dinar', symbol: 'ع.د', flag: '🇮🇶' },
  { code: 'IRR', name: 'Iranian Rial', symbol: '﷼', flag: '🇮🇷' },
  { code: 'JOD', name: 'Jordanian Dinar', symbol: 'د.ا', flag: '🇯🇴' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'KHR', name: 'Cambodian Riel', symbol: '៛', flag: '🇰🇭' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك', flag: '🇰🇼' },
  { code: 'KZT', name: 'Kazakhstani Tenge', symbol: '₸', flag: '🇰🇿' },
  { code: 'LAK', name: 'Lao Kip', symbol: '₭', flag: '🇱🇦' },
  { code: 'LBP', name: 'Lebanese Pound', symbol: 'ل.ل', flag: '🇱🇧' },
  { code: 'LKR', name: 'Sri Lankan Rupee', symbol: 'රු', flag: '🇱🇰' },
  { code: 'MMK', name: 'Myanmar Kyat', symbol: 'K', flag: '🇲🇲' },
  { code: 'MNT', name: 'Mongolian Tögrög', symbol: '₮', flag: '🇲🇳' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM', flag: '🇲🇾' },
  { code: 'NPR', name: 'Nepalese Rupee', symbol: '₨', flag: '🇳🇵' },
  { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع.', flag: '🇴🇲' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱', flag: '🇵🇭' },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', flag: '🇵🇰' },
  { code: 'QAR', name: 'Qatari Riyal', symbol: 'ر.ق', flag: '🇶🇦' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭' },
  { code: 'TWD', name: 'New Taiwan Dollar', symbol: 'NT$', flag: '🇹🇼' },
  { code: 'UZS', name: 'Uzbekistani Som', symbol: 'лв', flag: '🇺🇿' },
  { code: 'VND', name: 'Vietnamese Đồng', symbol: '₫', flag: '🇻🇳' },
  { code: 'YER', name: 'Yemeni Rial', symbol: '﷼', flag: '🇾🇪' },

  // Africa
  { code: 'AOA', name: 'Angolan Kwanza', symbol: 'Kz', flag: '🇦🇴' },
  { code: 'BIF', name: 'Burundian Franc', symbol: 'Fr', flag: '🇧🇮' },
  { code: 'BWP', name: 'Botswanan Pula', symbol: 'P', flag: '🇧🇼' },
  { code: 'CDF', name: 'Congolese Franc', symbol: 'Fr', flag: '🇨🇩' },
  { code: 'DZD', name: 'Algerian Dinar', symbol: 'د.ج', flag: '🇩🇿' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: 'E£', flag: '🇪🇬' },
  { code: 'ETB', name: 'Ethiopian Birr', symbol: 'Br', flag: '🇪🇹' },
  { code: 'GHS', name: 'Ghanaian Cedi', symbol: '₵', flag: '🇬🇭' },
  { code: 'GMD', name: 'Gambian Dalasi', symbol: 'D', flag: '🇬🇲' },
  { code: 'GNF', name: 'Guinean Franc', symbol: 'Fr', flag: '🇬🇳' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh', flag: '🇰🇪' },
  { code: 'LRD', name: 'Liberian Dollar', symbol: 'L$', flag: '🇱🇷' },
  { code: 'LYD', name: 'Libyan Dinar', symbol: 'ل.د', flag: '🇱🇾' },
  { code: 'MAD', name: 'Moroccan Dirham', symbol: 'د.م.', flag: '🇲🇦' },
  { code: 'MGA', name: 'Malagasy Ariary', symbol: 'Ar', flag: '🇲🇬' },
  { code: 'MUR', name: 'Mauritian Rupee', symbol: '₨', flag: '🇲🇺' },
  { code: 'MWK', name: 'Malawian Kwacha', symbol: 'MK', flag: '🇲🇼' },
  { code: 'MZN', name: 'Mozambican Metical', symbol: 'MT', flag: '🇲🇿' },
  { code: 'NAD', name: 'Namibian Dollar', symbol: 'N$', flag: '🇳🇦' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬' },
  { code: 'RWF', name: 'Rwandan Franc', symbol: 'Fr', flag: '🇷🇼' },
  { code: 'SCR', name: 'Seychellois Rupee', symbol: '₨', flag: '🇸🇨' },
  { code: 'SDG', name: 'Sudanese Pound', symbol: 'ج.س.', flag: '🇸🇩' },
  { code: 'SLL', name: 'Sierra Leonean Leone', symbol: 'Le', flag: '🇸🇱' },
  { code: 'SSP', name: 'South Sudanese Pound', symbol: '£', flag: '🇸🇸' },
  { code: 'TND', name: 'Tunisian Dinar', symbol: 'د.ت', flag: '🇹🇳' },
  { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh', flag: '🇹🇿' },
  { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh', flag: '🇺🇬' },
  { code: 'XAF', name: 'Central African CFA Franc', symbol: 'Fr', flag: '🌍' },
  { code: 'XOF', name: 'West African CFA Franc', symbol: 'Fr', flag: '🌍' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
  { code: 'ZMW', name: 'Zambian Kwacha', symbol: 'ZK', flag: '🇿🇲' },
  { code: 'ZWL', name: 'Zimbabwean Dollar', symbol: 'Z$', flag: '🇿🇼' },

  // Oceania
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'FJD', name: 'Fijian Dollar', symbol: 'FJ$', flag: '🇫🇯' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$', flag: '🇳🇿' },
  { code: 'PGK', name: 'Papua New Guinean Kina', symbol: 'K', flag: '🇵🇬' },
  { code: 'SBD', name: 'Solomon Islands Dollar', symbol: 'SI$', flag: '🇸🇧' },
  { code: 'TOP', name: 'Tongan Paʻanga', symbol: 'T$', flag: '🇹🇴' },
  { code: 'VUV', name: 'Vanuatu Vatu', symbol: 'VT', flag: '🇻🇺' },
  { code: 'WST', name: 'Samoan Tālā', symbol: 'WS$', flag: '🇼🇸' },

  // Cryptocurrencies
  { code: 'BTC', name: 'Bitcoin', symbol: '₿', flag: '🪙' },
  { code: 'ETH', name: 'Ethereum', symbol: 'Ξ', flag: '🪙' },
  { code: 'LTC', name: 'Litecoin', symbol: 'Ł', flag: '🪙' },
  { code: 'XRP', name: 'Ripple', symbol: 'XRP', flag: '🪙' },
  { code: 'BCH', name: 'Bitcoin Cash', symbol: 'BCH', flag: '🪙' },
  { code: 'ADA', name: 'Cardano', symbol: 'ADA', flag: '🪙' },
  { code: 'DOT', name: 'Polkadot', symbol: 'DOT', flag: '🪙' },
  { code: 'LINK', name: 'Chainlink', symbol: 'LINK', flag: '🪙' },
  { code: 'XLM', name: 'Stellar', symbol: 'XLM', flag: '🪙' },
  { code: 'DOGE', name: 'Dogecoin', symbol: 'Ð', flag: '🪙' }];

}

// Get all currency information by code
function getCurrencyInfo(currencyCode) {
  const allCurrencies = getPopularCurrencies();
  return allCurrencies.find((currency) => currency.code === currencyCode) ||
  { code: currencyCode, name: currencyCode, symbol: currencyCode, flag: '🌐' };
}

// Calculate percentage change between two values
function calculatePercentChange(oldValue, newValue) {
  if (oldValue === 0) return 0;
  const change = (newValue - oldValue) / oldValue * 100;
  return change.toFixed(2);
}

// Generate random colors for charts
function generateChartColors(count) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    const hue = i * 137 % 360; // Use golden angle approximation for even distribution
    colors.push(`hsl(${hue}, 70%, 60%)`);
  }
  return colors;
}

// Debounce function to limit how often a function is called
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Load supported currencies from the API and update the currency list
async function loadSupportedCurrencies() {
  try {
    // This function would typically be called during app initialization
    const apiCurrencies = await fetchAvailableCurrencies();

    // Create a map of our predefined currencies for reference
    const predefinedCurrencies = {};
    getPopularCurrencies().forEach((currency) => {
      predefinedCurrencies[currency.code] = currency;
    });

    // Combine API currencies with our predefined currencies
    // prioritizing our predefined data for flags and symbols
    const combinedCurrencies = {};

    // Add all currencies from the API
    Object.keys(apiCurrencies).forEach((code) => {
      const name = apiCurrencies[code];
      if (predefinedCurrencies[code]) {
        // Use our predefined data if available
        combinedCurrencies[code] = predefinedCurrencies[code];
      } else {
        // For API currencies not in our list, create a basic entry
        combinedCurrencies[code] = {
          code: code,
          name: name,
          symbol: code,
          flag: '🌐'
        };
      }
    });

    console.log('Supported currencies loaded from API:', Object.keys(combinedCurrencies).length);
    return combinedCurrencies;
  } catch (error) {
    console.error('Error loading supported currencies:', error);
    // Return our predefined list as fallback
    return getPopularCurrencies().reduce((acc, curr) => {
      acc[curr.code] = curr;
      return acc;
    }, {});
  }
}
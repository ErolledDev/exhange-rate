// Functions for handling URL parameters

// Get URL parameters from current URL
function getUrlParams() {
  const searchParams = new URLSearchParams(window.location.search);
  const params = {};

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
}

// Generate URL with current conversion parameters
function generateConversionUrl(amount, fromCurrency, toCurrency) {
  const url = new URL(window.location.href);
  url.search = ''; // Clear existing params

  const searchParams = new URLSearchParams();
  searchParams.set('amount', amount);
  searchParams.set('from', fromCurrency);
  searchParams.set('to', toCurrency);

  url.search = searchParams.toString();
  return url.toString();
}

// Update URL without page reload
function updateUrlWithoutReload(amount, fromCurrency, toCurrency) {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams();

  searchParams.set('amount', amount);
  searchParams.set('from', fromCurrency);
  searchParams.set('to', toCurrency);

  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
}

// Copy current URL to clipboard
function copyUrlToClipboard(amount, fromCurrency, toCurrency) {
  const url = generateConversionUrl(amount, fromCurrency, toCurrency);

  // Use modern clipboard API with fallback
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(url).
    then(() => true).
    catch(() => {
      // Fallback if clipboard API fails
      return fallbackCopyToClipboard(url);
    });
  } else {
    return fallbackCopyToClipboard(url);
  }
}

// Fallback for older browsers
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (e) {
    console.error('Failed to copy:', e);
  }

  document.body.removeChild(textArea);
  return Promise.resolve(success);
}
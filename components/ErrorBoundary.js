class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50" data-id="mlva3yqsb" data-path="components/ErrorBoundary.js">
          <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center" data-id="i74dbes47" data-path="components/ErrorBoundary.js">
            <div className="text-red-500 mb-4" data-id="1y201bxz5" data-path="components/ErrorBoundary.js">
              <i className="fas fa-exclamation-circle text-5xl" data-id="5kg5xopzg" data-path="components/ErrorBoundary.js"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2" data-id="2948tg011" data-path="components/ErrorBoundary.js">Something went wrong</h2>
            <p className="text-gray-600 mb-6" data-id="6ns0wrtci" data-path="components/ErrorBoundary.js">
              We're sorry, but an error occurred while trying to display this content.
            </p>
            <div className="flex justify-center" data-id="d0wup87n6" data-path="components/ErrorBoundary.js">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none transition-colors" data-id="s4m544w21" data-path="components/ErrorBoundary.js">

                Refresh the page
              </button>
            </div>
            {process.env.NODE_ENV === 'development' &&
            <div className="mt-6 p-4 bg-gray-100 rounded-md text-left overflow-auto" data-id="5yc998kym" data-path="components/ErrorBoundary.js">
                <h3 className="text-sm font-bold text-gray-700 mb-2" data-id="raflh4ovr" data-path="components/ErrorBoundary.js">Error Details:</h3>
                <p className="text-xs text-gray-600 whitespace-pre-wrap" data-id="tdgacox1i" data-path="components/ErrorBoundary.js">
                  {this.state.error && this.state.error.toString()}
                </p>
                <div className="mt-2" data-id="itxg2dqhu" data-path="components/ErrorBoundary.js">
                  <p className="text-xs text-gray-600 whitespace-pre-wrap" data-id="cwj4fh9sn" data-path="components/ErrorBoundary.js">
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>);

    }

    return this.props.children;
  }
}
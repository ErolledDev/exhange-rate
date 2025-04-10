const { useState, useEffect, useRef } = React;

function CurrencyChart({ historicalData, baseCurrency, targetCurrency }) {
  const [chartData, setChartData] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // We'll use a simple chart implementation with canvas
  useEffect(() => {
    if (!historicalData || !canvasRef.current) return;

    // Process the data for the chart
    processChartData();

    // Clean up the chart instance on unmount
    return () => {
      if (chartInstanceRef.current) {





        // Cleanup if we were using a chart library
      }};}, [historicalData, baseCurrency, targetCurrency, selectedPeriod]);const processChartData = () => {if (!historicalData || historicalData.length === 0) {
      setChartData(null);
      return;
    }

    // Filter data based on the selected period
    let filteredData = [...historicalData];

    if (selectedPeriod === '7d') {
      filteredData = historicalData.slice(0, 7);
    } else if (selectedPeriod === '1m') {
      filteredData = historicalData.slice(0, 30);
    } else if (selectedPeriod === '3m') {
      filteredData = historicalData.slice(0, 90);
    }

    // Reverse to have dates in ascending order
    filteredData.reverse();

    const labels = filteredData.map((entry) => entry.date);
    const values = filteredData.map((entry) => {
      const rates = entry.rates || {};
      return rates[targetCurrency] || 0;
    });

    // Set chart data
    setChartData({
      labels,
      values
    });

    // Draw the chart
    drawChart(labels, values);
  };

  const drawChart = (labels, values) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set canvas dimensions
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;

    // Find min and max values
    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);
    const valueRange = maxValue - minValue || 1;

    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw data points and line
    if (values.length > 1) {
      ctx.beginPath();
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;

      // First point
      const x0 = padding + 0 * (width - 2 * padding) / (labels.length - 1);
      const y0 = height - padding - (values[0] - minValue) / valueRange * (height - 2 * padding);
      ctx.moveTo(x0, y0);

      // Connect the points
      for (let i = 1; i < values.length; i++) {
        const x = padding + i * (width - 2 * padding) / (labels.length - 1);
        const y = height - padding - (values[i] - minValue) / valueRange * (height - 2 * padding);
        ctx.lineTo(x, y);
      }

      ctx.stroke();

      // Draw data points
      for (let i = 0; i < values.length; i++) {
        const x = padding + i * (width - 2 * padding) / (labels.length - 1);
        const y = height - padding - (values[i] - minValue) / valueRange * (height - 2 * padding);

        ctx.beginPath();
        ctx.fillStyle = '#3b82f6';
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Draw x-axis labels (dates)
      ctx.fillStyle = '#6b7280';
      ctx.font = '10px Arial';
      ctx.textAlign = 'center';

      for (let i = 0; i < labels.length; i += Math.ceil(labels.length / 7)) {
        const x = padding + i * (width - 2 * padding) / (labels.length - 1);
        const y = height - padding + 15;

        const date = new Date(labels[i]);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
        ctx.fillText(formattedDate, x, y);
      }

      // Draw y-axis labels (values)
      ctx.textAlign = 'right';
      const steps = 5;

      for (let i = 0; i <= steps; i++) {
        const value = minValue + valueRange * i / steps;
        const y = height - padding - i * (height - 2 * padding) / steps;

        ctx.fillText(value.toFixed(4), padding - 5, y + 3);
      }
    }
  };

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-id="m89pa1uph" data-path="components/CurrencyChart.js">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4" data-id="3otk8gs2x" data-path="components/CurrencyChart.js">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0" data-id="dydqixmls" data-path="components/CurrencyChart.js">
          {baseCurrency} to {targetCurrency} Historical Chart
        </h2>
        
        <div className="flex space-x-2" data-id="hxxre2g1r" data-path="components/CurrencyChart.js">
          <button
            onClick={() => handlePeriodChange('7d')}
            className={`px-3 py-1 text-sm rounded-md ${
            selectedPeriod === '7d' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
            } data-id="q1raodo3i" data-path="components/CurrencyChart.js">

            7D
          </button>
          <button
            onClick={() => handlePeriodChange('1m')}
            className={`px-3 py-1 text-sm rounded-md ${
            selectedPeriod === '1m' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
            } data-id="qpt8syzxj" data-path="components/CurrencyChart.js">

            1M
          </button>
          <button
            onClick={() => handlePeriodChange('3m')}
            className={`px-3 py-1 text-sm rounded-md ${
            selectedPeriod === '3m' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
            } data-id="w0xqv1dq9" data-path="components/CurrencyChart.js">

            3M
          </button>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 h-72 flex items-center justify-center" data-id="s581z4567" data-path="components/CurrencyChart.js">
        {!historicalData || historicalData.length === 0 ?
        <div className="text-center text-gray-500" data-id="82j9wcpi8" data-path="components/CurrencyChart.js">
            <i className="fas fa-chart-line text-gray-300 text-4xl mb-2" data-id="w89bssb9q" data-path="components/CurrencyChart.js"></i>
            <p data-id="5m6jj4o0w" data-path="components/CurrencyChart.js">No historical data available</p>
          </div> :

        <canvas
          ref={canvasRef}
          className="w-full h-full"
          width={800}
          height={300} data-id="3oa9j8jsd" data-path="components/CurrencyChart.js">
        </canvas>
        }
      </div>
      
      {chartData && chartData.values.length > 0 &&
      <div className="mt-4 text-sm text-gray-500" data-id="x7399f3o1" data-path="components/CurrencyChart.js">
          <div className="flex justify-between" data-id="80iiovwrq" data-path="components/CurrencyChart.js">
            <span data-id="yjj3qa73q" data-path="components/CurrencyChart.js">Start: {chartData.labels[0]}</span>
            <span data-id="9e57dyhdv" data-path="components/CurrencyChart.js">End: {chartData.labels[chartData.labels.length - 1]}</span>
          </div>
          <div className="flex justify-between mt-1" data-id="x6ngxfziy" data-path="components/CurrencyChart.js">
            <span data-id="35oiiq29x" data-path="components/CurrencyChart.js">
              Low: {Math.min(...chartData.values).toFixed(4)} {targetCurrency}
            </span>
            <span data-id="fcae7izr4" data-path="components/CurrencyChart.js">
              High: {Math.max(...chartData.values).toFixed(4)} {targetCurrency}
            </span>
          </div>
        </div>
      }
    </div>);

}
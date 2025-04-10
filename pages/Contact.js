const { useState, useEffect } = React;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  useEffect(() => {
    // Update SEO when component mounts
    if (window.seoHelpers) {
      window.seoHelpers.updateSEO('contact');
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For now, just simulate successful submission
      // In a real app, you would connect to a backend API
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Thank you! Your message has been sent successfully." }
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);

    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "An error occurred. Please try again later." }
      });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in" data-id="kmm9vlb73" data-path="pages/Contact.js">
      <div className="bg-white rounded-lg shadow-md p-6" data-id="awzowybgq" data-path="pages/Contact.js">
        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-id="hoy6rvui0" data-path="pages/Contact.js">Contact Us</h1>
        <p className="text-gray-600 mb-6" data-id="x4kcdlynz" data-path="pages/Contact.js">
          Have questions about currency exchange or need help with our tools? 
          We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-id="m6eknrth4" data-path="pages/Contact.js">
          <div data-id="u73oknl87" data-path="pages/Contact.js">
            <form onSubmit={handleSubmit} className="space-y-4" data-id="eq61zmrzq" data-path="pages/Contact.js">
              <div data-id="7gbniwe41" data-path="pages/Contact.js">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1" data-id="99pomc7zw" data-path="pages/Contact.js">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name" data-id="wuiqnaetg" data-path="pages/Contact.js" />

              </div>
              
              <div data-id="gcb2x25q5" data-path="pages/Contact.js">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1" data-id="vi5l4i0jk" data-path="pages/Contact.js">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your.email@example.com" data-id="zaes2xwlh" data-path="pages/Contact.js" />

              </div>
              
              <div data-id="omdbz3ctn" data-path="pages/Contact.js">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1" data-id="zjjj9xvi1" data-path="pages/Contact.js">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="What's this about?" data-id="d8nryii2w" data-path="pages/Contact.js" />

              </div>
              
              <div data-id="l467t23ct" data-path="pages/Contact.js">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1" data-id="clpox460d" data-path="pages/Contact.js">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="5"
                  placeholder="How can we help you?" data-id="enlj4w8hi" data-path="pages/Contact.js">
                </textarea>
              </div>
              
              <div className="flex items-center" data-id="020cryp8i" data-path="pages/Contact.js">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`} data-id="z27aidqhd" data-path="pages/Contact.js">

                  {status.submitting ?
                  <>
                      <span className="inline-block animate-spin mr-2" data-id="04zsw8xmb" data-path="pages/Contact.js">
                        <i className="fas fa-circle-notch" data-id="s9z8g2nwp" data-path="pages/Contact.js"></i>
                      </span>
                      Sending...
                    </> :
                  'Send Message'}
                </button>
                
                {status.info.msg &&
                <div className={`ml-4 text-sm ${status.info.error ? 'text-red-500' : 'text-green-500'}`} data-id="39aj829nh" data-path="pages/Contact.js">
                    {status.info.msg}
                  </div>
                }
              </div>
            </form>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg" data-id="vy1wige7q" data-path="pages/Contact.js">
            <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="vskj2ga1f" data-path="pages/Contact.js">Get in Touch</h2>
            
            <div className="space-y-4" data-id="j5xy0lfmt" data-path="pages/Contact.js">
              <div className="flex items-start" data-id="e5hbj90iw" data-path="pages/Contact.js">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-500" data-id="ijiufani3" data-path="pages/Contact.js">
                  <i className="fas fa-map-marker-alt" data-id="9k9b51soz" data-path="pages/Contact.js"></i>
                </div>
                <div className="ml-4" data-id="c0a3shx4s" data-path="pages/Contact.js">
                  <h3 className="text-lg font-medium text-gray-900" data-id="aeed500k7" data-path="pages/Contact.js">Our Office</h3>
                  <p className="text-gray-600" data-id="zv0yiagno" data-path="pages/Contact.js">
                    1234 Currency Street<br data-id="ozitnwf7q" data-path="pages/Contact.js" />
                    Financial District<br data-id="ua3kjrtm4" data-path="pages/Contact.js" />
                    New York, NY 10004<br data-id="b4fcy49mq" data-path="pages/Contact.js" />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start" data-id="l0w8dwjqq" data-path="pages/Contact.js">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-500" data-id="8kppu46iy" data-path="pages/Contact.js">
                  <i className="fas fa-envelope" data-id="rxa1byabe" data-path="pages/Contact.js"></i>
                </div>
                <div className="ml-4" data-id="zbzv43n4t" data-path="pages/Contact.js">
                  <h3 className="text-lg font-medium text-gray-900" data-id="f4aphd9vl" data-path="pages/Contact.js">Email Us</h3>
                  <p className="text-gray-600" data-id="kkmfzq1cm" data-path="pages/Contact.js">
                    General Inquiries: <a href="mailto:info@globalexchange.com" className="text-blue-600 hover:underline" data-id="pmhah7oxl" data-path="pages/Contact.js">info@globalexchange.com</a><br data-id="30i51huu3" data-path="pages/Contact.js" />
                    Support: <a href="mailto:support@globalexchange.com" className="text-blue-600 hover:underline" data-id="j3a61rbs3" data-path="pages/Contact.js">support@globalexchange.com</a><br data-id="os9xoxeqi" data-path="pages/Contact.js" />
                    Business: <a href="mailto:business@globalexchange.com" className="text-blue-600 hover:underline" data-id="kidw8znj0" data-path="pages/Contact.js">business@globalexchange.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start" data-id="4gys4y6ki" data-path="pages/Contact.js">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-500" data-id="ejxfto07u" data-path="pages/Contact.js">
                  <i className="fas fa-phone" data-id="ldxcsrhnh" data-path="pages/Contact.js"></i>
                </div>
                <div className="ml-4" data-id="xzox4801i" data-path="pages/Contact.js">
                  <h3 className="text-lg font-medium text-gray-900" data-id="ufr98kqlv" data-path="pages/Contact.js">Call Us</h3>
                  <p className="text-gray-600" data-id="gn460owcq" data-path="pages/Contact.js">
                    Phone: +1 (123) 456-7890<br data-id="jht935xgc" data-path="pages/Contact.js" />
                    Toll-free: 1-800-CURRENCY<br data-id="f7jgo2v9f" data-path="pages/Contact.js" />
                    Fax: +1 (123) 456-7891
                  </p>
                </div>
              </div>
              
              <div className="flex items-start" data-id="ul1xow91r" data-path="pages/Contact.js">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-blue-500" data-id="pd2rvdf75" data-path="pages/Contact.js">
                  <i className="fas fa-clock" data-id="jzvx987lu" data-path="pages/Contact.js"></i>
                </div>
                <div className="ml-4" data-id="omo36p5hg" data-path="pages/Contact.js">
                  <h3 className="text-lg font-medium text-gray-900" data-id="3h5szvwff" data-path="pages/Contact.js">Hours of Operation</h3>
                  <p className="text-gray-600" data-id="hq0ccqzgq" data-path="pages/Contact.js">
                    Monday - Friday: 9:00 AM - 5:00 PM EST<br data-id="ywcn4tij7" data-path="pages/Contact.js" />
                    Saturday: 10:00 AM - 2:00 PM EST<br data-id="12bmnrxxl" data-path="pages/Contact.js" />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6" data-id="pj41r0zny" data-path="pages/Contact.js">
              <h3 className="text-lg font-medium text-gray-900 mb-3" data-id="9kv7hs4oo" data-path="pages/Contact.js">Connect With Us</h3>
              <div className="flex space-x-4" data-id="rmjslqlvn" data-path="pages/Contact.js">
                <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors" data-id="2bgbwd8no" data-path="pages/Contact.js">
                  <i className="fab fa-facebook-f" data-id="jm1jbf5dh" data-path="pages/Contact.js"></i>
                </a>
                <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition-colors" data-id="kndumu1ue" data-path="pages/Contact.js">
                  <i className="fab fa-twitter" data-id="dtgx9gtg9" data-path="pages/Contact.js"></i>
                </a>
                <a href="#" className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors" data-id="1fiuic2ot" data-path="pages/Contact.js">
                  <i className="fab fa-instagram" data-id="eojhs89w2" data-path="pages/Contact.js"></i>
                </a>
                <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition-colors" data-id="pc80l7sva" data-path="pages/Contact.js">
                  <i className="fab fa-linkedin-in" data-id="i9w1bv24r" data-path="pages/Contact.js"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6" data-id="ilf590fba" data-path="pages/Contact.js">
        <h2 className="text-xl font-semibold text-gray-800 mb-4" data-id="o3tm22ba0" data-path="pages/Contact.js">Our Location</h2>
        <div className="h-96 bg-gray-200 rounded-lg overflow-hidden" data-id="htfngtr4w" data-path="pages/Contact.js">
          {/* Placeholder for Google Maps iframe */}
          <div className="w-full h-full flex items-center justify-center bg-gray-200" data-id="1hje8epvv" data-path="pages/Contact.js">
            <div className="text-center" data-id="u554idfeu" data-path="pages/Contact.js">
              <i className="fas fa-map-marked-alt text-5xl text-gray-400 mb-3" data-id="cllm57mpp" data-path="pages/Contact.js"></i>
              <p className="text-gray-600" data-id="cihzocnig" data-path="pages/Contact.js">Interactive map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>);

}
const { useEffect } = React;

function About() {
  useEffect(() => {
    // Update SEO when component mounts
    if (window.seoHelpers) {
      window.seoHelpers.updateSEO('about');
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  // Team members data
  const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Former investment banker with over 15 years of experience in currency markets. Established Global Exchange to make currency information accessible to everyone.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Tech innovator with a background in financial software development. Leads our engineering team to build robust and accurate currency tools.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Chief Financial Analyst',
    bio: 'Economist and financial analyst who oversees our currency data integrity and provides insights on market trends and economic indicators.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'David Okafor',
    role: 'Head of User Experience',
    bio: 'Award-winning UX designer passionate about creating intuitive financial tools that make complex information easy to understand.',
    image: 'https://randomuser.me/api/portraits/men/22.jpg'
  }];


  return (
    <div className="space-y-8 animate-fade-in" data-id="t96yydu0j" data-path="pages/About.js">
      {/* About Us */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden" data-id="2v9b2bnda" data-path="pages/About.js">
        <div className="p-6" data-id="6vtfu02ip" data-path="pages/About.js">
          <h1 className="text-2xl font-bold text-gray-800 mb-4" data-id="34l4lzwqk" data-path="pages/About.js">About Global Exchange</h1>
          <p className="text-gray-600 mb-6" data-id="brp7trk91" data-path="pages/About.js">
            Since 2010, Global Exchange has been a trusted provider of currency exchange information and conversion tools, 
            helping millions of users worldwide make informed financial decisions.
          </p>
          
          <div className="prose max-w-none" data-id="refl7ay7i" data-path="pages/About.js">
            <h2 className="text-xl font-semibold mt-6 mb-3" data-id="0pcrksg3d" data-path="pages/About.js">Our Mission</h2>
            <p data-id="w01r0dngn" data-path="pages/About.js">
              Our mission is to empower individuals and businesses with accurate, accessible currency exchange information.
              We believe that transparent, real-time financial data should be available to everyone, regardless of their
              financial expertise or background. By providing reliable exchange rates, user-friendly conversion tools, and
              educational resources, we aim to help our users navigate the complex world of international currencies with confidence.
            </p>
            
            <h2 className="text-xl font-semibold mt-6 mb-3" data-id="txnshivu2" data-path="pages/About.js">Our Story</h2>
            <p data-id="1alxz974e" data-path="pages/About.js">
              Global Exchange was founded in 2010 by a team of finance professionals and technology innovators who recognized
              a need for a simple, reliable currency information platform. What began as a basic currency converter has grown
              into a comprehensive resource trusted by travelers, expatriates, businesses, and financial professionals worldwide.
            </p>
            <p data-id="o46uju1zp" data-path="pages/About.js">
              Over the years, we've continuously expanded our offerings and refined our technology to deliver the most accurate,
              up-to-date currency information possible. Today, our platform processes millions of currency conversions monthly and
              serves users from over 190 countries.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-blue-600 text-white px-6 py-8" data-id="moeccs8vk" data-path="pages/About.js">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center" data-id="0wzpg5cuy" data-path="pages/About.js">
            <div className="p-4" data-id="lhpkydvis" data-path="pages/About.js">
              <div className="text-4xl font-bold mb-2" data-id="ogfzt6usm" data-path="pages/About.js">10M+</div>
              <div className="text-blue-100" data-id="6y4htg4jh" data-path="pages/About.js">Monthly Users</div>
            </div>
            <div className="p-4" data-id="q3xlr8cux" data-path="pages/About.js">
              <div className="text-4xl font-bold mb-2" data-id="0v9p7vzgb" data-path="pages/About.js">150+</div>
              <div className="text-blue-100" data-id="aavubph1j" data-path="pages/About.js">Currencies Supported</div>
            </div>
            <div className="p-4" data-id="y99zv4jck" data-path="pages/About.js">
              <div className="text-4xl font-bold mb-2" data-id="848zhpw60" data-path="pages/About.js">13</div>
              <div className="text-blue-100" data-id="fuahr90cs" data-path="pages/About.js">Years of Service</div>
            </div>
            <div className="p-4" data-id="hfb5soijo" data-path="pages/About.js">
              <div className="text-4xl font-bold mb-2" data-id="5spgp7nr7" data-path="pages/About.js">190+</div>
              <div className="text-blue-100" data-id="wy7inqfqd" data-path="pages/About.js">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="bg-white rounded-lg shadow-md p-6" data-id="xrvtqd26b" data-path="pages/About.js">
        <h2 className="text-2xl font-bold text-gray-800 mb-6" data-id="lvidmlw3r" data-path="pages/About.js">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="iemfk276w" data-path="pages/About.js">
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors" data-id="o9ccbyhz4" data-path="pages/About.js">
            <div className="text-blue-500 text-4xl mb-4" data-id="cb1ahrdda" data-path="pages/About.js">
              <i className="fas fa-chart-line" data-id="77xmwr9qv" data-path="pages/About.js"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-id="majmaqpe1" data-path="pages/About.js">Accuracy</h3>
            <p className="text-gray-600" data-id="ycsyjilnx" data-path="pages/About.js">
              We're committed to providing the most accurate currency data possible, sourcing our information from trusted financial institutions and updating our rates frequently.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors" data-id="g05j78y09" data-path="pages/About.js">
            <div className="text-blue-500 text-4xl mb-4" data-id="q3buagpuo" data-path="pages/About.js">
              <i className="fas fa-lock" data-id="y8n41867t" data-path="pages/About.js"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-id="5tsgqg998" data-path="pages/About.js">Trust</h3>
            <p className="text-gray-600" data-id="qhh1zzjf3" data-path="pages/About.js">
              Transparency in our data sources and methodologies builds trust with our users. We clearly communicate what our data represents and when it was last updated.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors" data-id="yfa25zqgp" data-path="pages/About.js">
            <div className="text-blue-500 text-4xl mb-4" data-id="df4gm4mcx" data-path="pages/About.js">
              <i className="fas fa-universal-access" data-id="0ehvbljs8" data-path="pages/About.js"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-id="r8xjz84od" data-path="pages/About.js">Accessibility</h3>
            <p className="text-gray-600" data-id="5ugltjbx6" data-path="pages/About.js">
              Financial tools should be accessible to everyone. We design our platform to be user-friendly regardless of financial expertise, device, or ability.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors" data-id="hdntnvan5" data-path="pages/About.js">
            <div className="text-blue-500 text-4xl mb-4" data-id="vmvwa59jw" data-path="pages/About.js">
              <i className="fas fa-bolt" data-id="mmgdyils6" data-path="pages/About.js"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-id="uif0pgeti" data-path="pages/About.js">Speed</h3>
            <p className="text-gray-600" data-id="wz83bbuy2" data-path="pages/About.js">
              In the fast-moving world of currency exchange, timing matters. Our platform is optimized for quick loading and real-time updates.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors" data-id="kdmnw6tfb" data-path="pages/About.js">
            <div className="text-blue-500 text-4xl mb-4" data-id="do8exlo42" data-path="pages/About.js">
              <i className="fas fa-graduation-cap" data-id="gv7safwvs" data-path="pages/About.js"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-id="ww6lcq2mk" data-path="pages/About.js">Education</h3>
            <p className="text-gray-600" data-id="2eamngzxi" data-path="pages/About.js">
              Beyond providing data, we're committed to helping our users understand currency markets through guides, articles, and learning resources.
            </p>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors" data-id="yhheq0ipe" data-path="pages/About.js">
            <div className="text-blue-500 text-4xl mb-4" data-id="spser0are" data-path="pages/About.js">
              <i className="fas fa-globe" data-id="kdal0c3cs" data-path="pages/About.js"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2" data-id="iq7sw3uz1" data-path="pages/About.js">Global Perspective</h3>
            <p className="text-gray-600" data-id="bh2cucgk8" data-path="pages/About.js">
              We serve a worldwide audience and design our tools with an international outlook, respecting the diversity of our global user base.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div className="bg-white rounded-lg shadow-md p-6" data-id="nt3bqg5rs" data-path="pages/About.js">
        <h2 className="text-2xl font-bold text-gray-800 mb-6" data-id="6uo2iopis" data-path="pages/About.js">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-id="tespbwz8h" data-path="pages/About.js">
          {teamMembers.map((member, index) =>
          <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-id="nrzx3cee3" data-path="pages/About.js">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" data-id="2x8sbn4d9" data-path="pages/About.js" />
              <div className="p-4" data-id="vns2ir94h" data-path="pages/About.js">
                <h3 className="text-lg font-semibold text-gray-800" data-id="9n464ljxf" data-path="pages/About.js">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2" data-id="h8aq2xje5" data-path="pages/About.js">{member.role}</p>
                <p className="text-gray-600 text-sm" data-id="sgvsw46a3" data-path="pages/About.js">{member.bio}</p>
                <div className="mt-3 flex space-x-2" data-id="2wbi7r5ny" data-path="pages/About.js">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" data-id="5tr0laot8" data-path="pages/About.js">
                    <i className="fab fa-linkedin" data-id="gjh4vpflh" data-path="pages/About.js"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors" data-id="e5v2q498n" data-path="pages/About.js">
                    <i className="fab fa-twitter" data-id="6bqjql8j3" data-path="pages/About.js"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-800 transition-colors" data-id="1emqv0vi6" data-path="pages/About.js">
                    <i className="fas fa-envelope" data-id="9nzsr032h" data-path="pages/About.js"></i>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-8 text-white" data-id="9fw9g2pkt" data-path="pages/About.js">
        <h2 className="text-2xl font-bold mb-8 text-center" data-id="sdg8g0txs" data-path="pages/About.js">What Our Users Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-id="54abx3l6y" data-path="pages/About.js">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm" data-id="1h2kaoenw" data-path="pages/About.js">
            <div className="text-yellow-300 mb-3" data-id="mtl5nbeqq" data-path="pages/About.js">
              <i className="fas fa-star" data-id="po3b71cir" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="tdkatogv0" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="41p2gpqwn" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="kax9hfsv3" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="mzzkj3jnd" data-path="pages/About.js"></i>
            </div>
            <p className="italic mb-4" data-id="ltpm114yc" data-path="pages/About.js">
              "Global Exchange has been an invaluable tool for my international business. The accurate rates and historical data help me make informed decisions about when to execute transactions."
            </p>
            <div className="flex items-center" data-id="6vt58iwll" data-path="pages/About.js">
              <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-blue-800 font-bold mr-3" data-id="p4602dhuw" data-path="pages/About.js">JM</div>
              <div data-id="lvvs39nzc" data-path="pages/About.js">
                <div className="font-medium" data-id="i3pvd91jy" data-path="pages/About.js">James Morrison</div>
                <div className="text-sm text-blue-100" data-id="gn1bppzz0" data-path="pages/About.js">Business Owner</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm" data-id="y6audcma1" data-path="pages/About.js">
            <div className="text-yellow-300 mb-3" data-id="fxirbma8r" data-path="pages/About.js">
              <i className="fas fa-star" data-id="dkccsv8ge" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="oty6myjmq" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="vld2cq0o3" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="2cyc12xah" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="m6cigbaap" data-path="pages/About.js"></i>
            </div>
            <p className="italic mb-4" data-id="yqoz9qhto" data-path="pages/About.js">
              "As a frequent traveler, I rely on Global Exchange before every trip. The interface is intuitive, and I appreciate being able to check historical trends to plan my currency exchanges."
            </p>
            <div className="flex items-center" data-id="25n6knwgo" data-path="pages/About.js">
              <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-blue-800 font-bold mr-3" data-id="pdmbq2crl" data-path="pages/About.js">LP</div>
              <div data-id="o8ohn125c" data-path="pages/About.js">
                <div className="font-medium" data-id="ww2t6tojj" data-path="pages/About.js">Lisa Patel</div>
                <div className="text-sm text-blue-100" data-id="9xbbar9kx" data-path="pages/About.js">International Consultant</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm" data-id="1pxi1x21i" data-path="pages/About.js">
            <div className="text-yellow-300 mb-3" data-id="x8vm1h5qy" data-path="pages/About.js">
              <i className="fas fa-star" data-id="2uob9vcxm" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="vkl274f0r" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="jhd6wm0h7" data-path="pages/About.js"></i>
              <i className="fas fa-star" data-id="0eryhbste" data-path="pages/About.js"></i>
              <i className="fas fa-star-half-alt" data-id="j7zwb91bf" data-path="pages/About.js"></i>
            </div>
            <p className="italic mb-4" data-id="ithvxfdhy" data-path="pages/About.js">
              "I'm a finance student and Global Exchange has been an excellent resource for my research on currency markets. The historical data visualization tools are especially helpful."
            </p>
            <div className="flex items-center" data-id="wrpq00t6f" data-path="pages/About.js">
              <div className="w-10 h-10 rounded-full bg-blue-300 flex items-center justify-center text-blue-800 font-bold mr-3" data-id="w06lw36qd" data-path="pages/About.js">RK</div>
              <div data-id="xroteiy20" data-path="pages/About.js">
                <div className="font-medium" data-id="wj8cewq0o" data-path="pages/About.js">Robert Kim</div>
                <div className="text-sm text-blue-100" data-id="324h69jq8" data-path="pages/About.js">Economics Student</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-white rounded-lg shadow-md p-8 text-center" data-id="ni5ox4r4m" data-path="pages/About.js">
        <h2 className="text-2xl font-bold text-gray-800 mb-4" data-id="8msg03pm1" data-path="pages/About.js">Have Questions or Feedback?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto" data-id="tsu89a4lz" data-path="pages/About.js">
          We're always looking to improve our service and would love to hear from you. Whether you have
          suggestions, questions, or just want to say hello, our team is here for you.
        </p>
        <a
          href="#/contact"
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
          }}
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors" data-id="2739zh50q" data-path="pages/About.js">

          Contact Our Team
        </a>
      </div>
    </div>);

}
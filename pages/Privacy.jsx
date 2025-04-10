const { useEffect } = React;

function Privacy() {
  useEffect(() => {
    // Update SEO when component mounts
    if (window.seoHelpers) {
      window.seoHelpers.updateSEO('privacy');
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-8 animate-fade-in" data-id="lj2sgudqs" data-path="pages/Privacy.js">
      <div className="bg-white rounded-lg shadow-md p-6" data-id="h7lrazejq" data-path="pages/Privacy.js">
        <h1 className="text-2xl font-bold text-gray-800 mb-4" data-id="neqtpv4a9" data-path="pages/Privacy.js">Privacy Policy</h1>
        <p className="text-gray-600 mb-6" data-id="0wq60avw4" data-path="pages/Privacy.js">
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <div className="prose max-w-none" data-id="kr1u0xix2" data-path="pages/Privacy.js">
          <p data-id="h92z8omrt" data-path="pages/Privacy.js">
            This Privacy Policy describes how Global Exchange ("we", "our", or "us") collects, uses, and shares
            your personal information when you visit or use our website.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="6b566dafg" data-path="pages/Privacy.js">Information We Collect</h2>
          <p data-id="s63nnxcyl" data-path="pages/Privacy.js">
            When you visit Global Exchange, we may collect certain information about your device, including information
            about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            Additionally, as you browse the site, we collect information about the individual web pages that you view,
            what websites or search terms referred you to our site, and information about how you interact with the site.
            We refer to this automatically collected information as "Device Information."
          </p>
          
          <h3 className="text-lg font-medium mt-4 mb-2" data-id="h71ut4tez" data-path="pages/Privacy.js">We collect Device Information using the following technologies:</h3>
          <ul className="list-disc pl-6 my-3" data-id="q29r3tgyp" data-path="pages/Privacy.js">
            <li data-id="xvyt3mmwt" data-path="pages/Privacy.js">
              <strong data-id="6fhv29bou" data-path="pages/Privacy.js">Cookies:</strong> Data files that are placed on your device and often include an anonymous unique identifier.
              For more information about cookies and how to disable them, visit <a href="http://www.allaboutcookies.org" className="text-blue-600 hover:underline" data-id="feki6202k" data-path="pages/Privacy.js">http://www.allaboutcookies.org</a>.
            </li>
            <li data-id="yamz1nryz" data-path="pages/Privacy.js">
              <strong data-id="r4pj5o209" data-path="pages/Privacy.js">Log files:</strong> Track actions occurring on the site, and collect data including your IP address,
              browser type, Internet service provider, referring/exit pages, and date/time stamps.
            </li>
            <li data-id="6vxpm9zs0" data-path="pages/Privacy.js">
              <strong data-id="wd1c6o4ha" data-path="pages/Privacy.js">Web beacons, tags, and pixels:</strong> Electronic files used to record information about how you browse the site.
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="40rsz4qfx" data-path="pages/Privacy.js">How We Use Your Information</h2>
          <p data-id="jms7tbekd" data-path="pages/Privacy.js">
            We use the Device Information we collect to help us screen for potential risk and fraud, and more generally
            to improve and optimize our site (for example, by generating analytics about how our users browse and
            interact with the site, and to assess the success of our marketing and advertising campaigns).
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="duulz47ms" data-path="pages/Privacy.js">Sharing Your Information</h2>
          <p data-id="5qjdgck5b" data-path="pages/Privacy.js">
            We share your Personal Information with third parties to help us use your Personal Information, as described above.
            We use Google Analytics to help us understand how our users use Global Exchange.
            You can read more about how Google uses your Personal Information here:
            <a href="https://www.google.com/intl/en/policies/privacy/" className="text-blue-600 hover:underline ml-1" data-id="b16hz1g7u" data-path="pages/Privacy.js">
              https://www.google.com/intl/en/policies/privacy/
            </a>
          </p>
          <p className="mt-3" data-id="araqyhz58" data-path="pages/Privacy.js">
            You can also opt-out of Google Analytics here:
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline ml-1" data-id="ta7c4h3h7" data-path="pages/Privacy.js">
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>
          <p className="mt-3" data-id="thkueewbs" data-path="pages/Privacy.js">
            We may also share your Personal Information to comply with applicable laws and regulations, to respond to
            a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="nxdy8yd7q" data-path="pages/Privacy.js">Behavioral Advertising</h2>
          <p data-id="uvrcm637o" data-path="pages/Privacy.js">
            We use your Personal Information to provide you with targeted advertisements or marketing communications
            we believe may be of interest to you. For more information about how targeted advertising works, you can visit
            the Network Advertising Initiative's educational page at
            <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" className="text-blue-600 hover:underline ml-1" data-id="o0jaad2mq" data-path="pages/Privacy.js">
              http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
            </a>
          </p>
          
          <h3 className="text-lg font-medium mt-4 mb-2" data-id="4jqp0bkmn" data-path="pages/Privacy.js">You can opt out of targeted advertising by:</h3>
          <ul className="list-disc pl-6 my-3" data-id="4re29dfn8" data-path="pages/Privacy.js">
            <li data-id="2lx5i29wb" data-path="pages/Privacy.js">
              <a href="https://www.facebook.com/settings/?tab=ads" className="text-blue-600 hover:underline" data-id="jvvjkcikq" data-path="pages/Privacy.js">FACEBOOK</a>
            </li>
            <li data-id="99agjxsc7" data-path="pages/Privacy.js">
              <a href="https://www.google.com/settings/ads/anonymous" className="text-blue-600 hover:underline" data-id="s6x5jj2og" data-path="pages/Privacy.js">GOOGLE</a>
            </li>
            <li data-id="80pnyhfwp" data-path="pages/Privacy.js">
              <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" className="text-blue-600 hover:underline" data-id="zchaffaue" data-path="pages/Privacy.js">BING</a>
            </li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="4y41xf6ds" data-path="pages/Privacy.js">Do Not Track</h2>
          <p data-id="xpw00p4z3" data-path="pages/Privacy.js">
            Please note that we do not alter our site's data collection and use practices when we see a Do Not Track signal from your browser.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="gbhc2zfps" data-path="pages/Privacy.js">Your Rights</h2>
          <p data-id="in9itwuhe" data-path="pages/Privacy.js">
            If you are a European resident, you have the right to access personal information we hold about you and to ask that your
            personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
          </p>
          <p className="mt-3" data-id="plmv19r89" data-path="pages/Privacy.js">
            Additionally, if you are a European resident, note that we are processing your information in order to fulfill
            contracts we might have with you, or otherwise to pursue our legitimate business interests listed above.
            Please note that your information will be transferred outside of Europe, including to Canada and the United States.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="mcbl1908f" data-path="pages/Privacy.js">Data Retention</h2>
          <p data-id="8x1ahhdhf" data-path="pages/Privacy.js">
            When you use the site, we will maintain your information for our records unless and until you ask us to delete this information.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="i4tyotv5k" data-path="pages/Privacy.js">Changes</h2>
          <p data-id="s8i0jgt7o" data-path="pages/Privacy.js">
            We may update this privacy policy from time to time in order to reflect, for example, changes to our
            practices or for other operational, legal or regulatory reasons.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="r1dubw75z" data-path="pages/Privacy.js">Children's Privacy</h2>
          <p data-id="k2h9z2ntw" data-path="pages/Privacy.js">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal
            information from children under 13. If you are a parent or guardian and believe that your child has
            provided us with personal information, please contact us so that we can delete the information.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3" data-id="7ewvuma5z" data-path="pages/Privacy.js">Contact Us</h2>
          <p data-id="gein2pwnt" data-path="pages/Privacy.js">
            For more information about our privacy practices, if you have questions, or if you would like to make a
            complaint, please contact us by e-mail at privacy@globalexchange.com or by mail using the details provided below:
          </p>
          <p className="mt-2" data-id="r04czsfnx" data-path="pages/Privacy.js">
            Global Exchange<br data-id="j8cl9vp90" data-path="pages/Privacy.js" />
            1234 Currency Street, Financial District, NY 10004, United States
          </p>
        </div>
      </div>
    </div>);

}
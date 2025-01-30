import React, { useState } from 'react';

function LocalForVocal() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [highlightForm, setHighlightForm] = useState(false); // State to highlight form

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation if needed
    if (name && mobile && message) {
      setSubmitted(true);  // Set the state to true when form is submitted successfully
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleStartSellingClick = () => {
    setHighlightForm(true); // Highlight the form when the button is clicked
  };

  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="bg-gray-100 p-5 rounded-lg drop-shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Support Local Products with Pk-Mart</h1>

        {/* Section Explaining How Pk-Mart Supports Local Vendors */}
        <section className="bg-gray-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold text-center">How Pk-Mart Promotes Local Handmade Products</h2>
          <p className="mt-4 text-lg text-center">
            Pk-Mart is dedicated to empowering local artisans, small businesses, and vendors by giving them a platform to showcase their handmade products. Here's how we do it:
          </p>
          <ul className="mt-4 list-disc ml-8">
            <li><strong>Supporting Local Communities:</strong> By purchasing locally made goods, you help boost the local economy, create jobs, and support ethical practices.</li>
            <li><strong>Showcasing Craftsmanship:</strong> Each product tells a story of skill, tradition, and passion, from handmade jewelry to locally grown produce.</li>
            <li><strong>Transparency & Sustainability:</strong> Our platform encourages vendors to use eco-friendly packaging and promote sustainable practices.</li>
            <li><strong>Promoting Local Culture:</strong> Pk-Mart helps preserve and promote local traditions and crafts that might otherwise be overlooked in a globalized market.</li>
          </ul>
        </section>

        {/* How You Can Get Involved Section */}
        <section className="bg-gray-50 p-6 rounded-lg mt-8">
          <h2 className="text-2xl font-semibold text-center">How You Can Get Involved</h2>
          <p className="mt-4 text-lg text-center">
            There are many ways you can support local businesses and products:
          </p>

          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold">Are You a Local Vendor?</h2>
            <p className="mt-4 text-lg">
              Join the Pk-Mart community and start selling your locally-made products to a broader audience. Reach more customers and grow your business with us.
            </p>
            <button
              className="mt-4 bg-green-500 text-white rounded-lg px-6 py-2 hover:bg-green-700"
              onClick={handleStartSellingClick} // Trigger the form highlight
            >
              Start Selling Locally
            </button>
          </div>

          {/* Contact Form for Local Vendors */}
          <div
            id="sellingForm"
            className={`mt-8 ${highlightForm ? 'border-4 border-yellow-500 bg-yellow-100' : ''}`} // Conditional styling when highlighted
            style={{ display: 'block' }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-center">Seller Information</h3>
              
              {submitted && (
                <div className="bg-green-200 text-center text-lg py-2 mb-4 rounded-md text-green-700">
                  Submission Successful! Thank you for contacting us.
                </div>
              )}
              
              <div className="mt-4">
                <label className="block">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Mobile Number</label>
                <input
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 mt-2 border rounded-md"
                  rows="4"
                  required
                />
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-700"
                >
                  Send Information
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LocalForVocal;

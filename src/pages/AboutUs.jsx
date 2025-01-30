import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="bg-gray-100 p-5 rounded-lg drop-shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>

        <p className="text-lg">
          Welcome to our store! We are a passionate team of individuals dedicated to providing you with the
          best products and services. Our goal is to bring you quality, innovation, and a shopping experience
          that exceeds your expectations.
        </p>

        <h2 className="text-xl font-semibold mt-6">Our Story</h2>
        <p className="mt-2">
          Our journey began in <strong>2025</strong> when our founder, <strong>Mr-Srivastava</strong>, decided to create a business
          that would bring high-quality products at affordable prices. Starting small, we quickly built a loyal
          customer base by offering exceptional customer service and carefully curated products. Since then,
          we've continued to expand our product selection and aim to serve our customers better every day.
        </p>

        <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
        <p className="mt-2">
          Our mission is to be a one-stop shop where customers can find everything they need. We aim to build
          long-term relationships with our customers by offering top-notch products, excellent customer service,
          and a seamless shopping experience.
        </p>

        <h2 className="text-xl font-semibold mt-6">Why Choose Us?</h2>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Quality Products:</strong> We hand-pick the best items to ensure you get only the highest quality products.</li>
          <li><strong>Customer-Centric Service:</strong> Our customer support team is always here to help with any questions or issues.</li>
          <li><strong>Affordable Prices:</strong> We believe in offering competitive prices without compromising quality.</li>
          <li><strong>Fast Shipping:</strong> We aim to get your products to you as quickly as possible, ensuring timely deliveries.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Meet Our Founder</h2>
        

        <p className="mt-2">
          <strong>Priyanshu Srivastava</strong>, the founder of our company, had a vision to create a business that not only
          provided great products but also delivered a memorable experience to each customer. With a background
          in e-commerce and a passion for quality,  Mr Srivastava launched this company with the goal of making online shopping
          a hassle-free experience for everyone.
        </p>

        <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
        <p className="mt-2">
          If you have any questions or feedback, don’t hesitate to get in touch with us. We’re here to help!
        </p>
        <p className="mt-2">
          Email: <strong>priyanshu07264@gmail.com</strong>
        </p>
        <p className="mt-2">
          Phone: <strong>(+91) 7857842441</strong>
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

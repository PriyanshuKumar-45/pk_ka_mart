import React from 'react';

function ReturnPolicy() {
  return (
    <div className="container mx-auto px-4 mt-5">
      <div className="bg-gray-100 p-5 rounded-lg drop-shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-center mb-4">Return Policy</h1>

        <p className="text-lg">
          Thank you for shopping with us! We strive to ensure our customers are happy with their purchases.
          If you're not completely satisfied with your order, we’re here to help.
        </p>

        <h2 className="text-xl font-semibold mt-6">Eligibility for Returns</h2>
        <p className="mt-2">
          To be eligible for a return, your item must meet the following criteria:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>The item must be unused and in the same condition as you received it.</li>
          <li>It must be in the original packaging.</li>
          <li>Return requests must be made within 30 days of receiving the product.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">How to Initiate a Return</h2>
        <p className="mt-2">
          To initiate a return, please follow these steps:
        </p>
        <ol className="list-decimal pl-6 mt-2">
          <li>Contact our customer service team at <strong>support@example.com</strong> to request a return.</li>
          <li>Provide your order number and the reason for the return.</li>
          <li>Once your return request is approved, you will receive instructions for returning the item.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6">Refunds</h2>
        <p className="mt-2">
          Once we receive and inspect your returned item, we will notify you of the status of your refund.
          If your return is approved, we will initiate a refund to your original payment method.
        </p>
        <p className="mt-2">
          Please note that shipping costs are non-refundable, and you will be responsible for paying the return shipping costs.
        </p>

        <h2 className="text-xl font-semibold mt-6">Exchanges</h2>
        <p className="mt-2">
          If you need to exchange your item for a different size or color, please contact us. We can guide you through the process.
        </p>

        <h2 className="text-xl font-semibold mt-6">Non-Returnable Items</h2>
        <p className="mt-2">
          Certain items are non-returnable, including but not limited to:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Gift cards</li>
          <li>Perishable items (e.g., food, flowers)</li>
          <li>Personalized or custom-made products</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
        <p className="mt-2">
          If you have any questions regarding our return policy or need assistance, please don’t hesitate to contact our customer support team:
        </p>
        <p className="mt-2">
          Email: <strong>priyanshu07264@gmail.com</strong>
        </p>
        <p className="mt-2">
          Phone: <strong>(+91)7857842441</strong>
        </p>
      </div>
    </div>
  );
}

export default ReturnPolicy;

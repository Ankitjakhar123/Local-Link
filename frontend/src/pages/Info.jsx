import React from "react";
import { useParams } from "react-router-dom";

const infoContent = {
  
  
  faqs: {
    title: "Frequently Asked Questions",
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Welcome to our FAQs section. We’ve compiled a list of questions that we’re frequently asked by our customers. Our aim is to address your concerns with clear and concise answers.
        </p>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Q1: What is Local Link?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Local Link is a comprehensive platform designed to connect you with trusted home services and essential products. Whether you need repairs, professional services, or quality products, we bring them all under one roof.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Q2: How do I place an order?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Placing an order is easy! Simply browse our collection, add your chosen items to the cart, and proceed to checkout. You can select from various payment options, including online payments and cash on delivery.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Q3: What services do you offer?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Our services range from home repairs, cleaning, and installation services to a wide variety of home products. Each service provider is vetted to ensure quality and reliability.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Q4: How can I track my order?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Once your order is placed, you can track its progress in real time through your user dashboard. We update our tracking system frequently to ensure you’re always in the loop.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Q5: Who do I contact for support?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            For any inquiries or support, you can reach out to our customer service team via email at <a href="mailto:support@locallink.com" className="text-blue-600 dark:text-blue-400 underline">support@locallink.com</a> or call us at +91-XXXXXXXXXX.
          </p>
        </div>
      </div>
    ),
  },
  "refund-policy": {
    title: "Refund Policy",
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          At Local Link, we take pride in ensuring that our customers are completely satisfied with their purchase. If you find that a product or service does not meet your expectations, please review our refund policy below.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Eligibility for Refunds</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Refund requests must be made within 7 days of purchase.</li>
          <li>Products must be returned in their original condition with all tags intact.</li>
          <li>Services may be eligible for partial refunds if not completed as agreed.</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Refund Process</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Once a refund request is approved, please allow 5-7 business days for the amount to reflect in your account. We process refunds using the same method of payment used for the initial purchase.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Exceptions & Non-refundable Items</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Please note that digital services, custom orders, and personalized items are non-refundable. If you have any concerns, do not hesitate to contact our support team.
        </p>
      </div>
    ),
  },
  terms: {
    title: "Terms & Conditions",
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          By using Local Link, you agree to the following terms and conditions. We encourage you to read them carefully as they govern your use of our platform.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">User Responsibilities</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Users must be at least 18 years old to use our services.</li>
          <li>You are responsible for maintaining the confidentiality of your account information.</li>
          <li>All transactions must be conducted in good faith and for legitimate purposes.</li>
        </ul>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Service Limitations</h2>
        <p className="text-gray-700 dark:text-gray-300">
          While we strive to ensure the best possible service, Local Link is not responsible for any indirect or unforeseen losses incurred through the use of our platform. We reserve the right to modify or discontinue services without prior notice.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Governing Law</h2>
        <p className="text-gray-700 dark:text-gray-300">
          These terms and conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from these terms will be subject to the jurisdiction of Indian courts.
        </p>
      </div>
    ),
  },
  privacy: {
    title: "Privacy Policy",
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Your privacy is important to us at Local Link. We are committed to protecting the personal information you share with us.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Information Collection</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We collect personal information that you provide during registration, ordering, and other interactions on our site. This may include your name, email address, phone number, and payment details.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Information Usage</h2>
        <p className="text-gray-700 dark:text-gray-300">
          The data we collect is used to process transactions, improve our services, and provide personalized experiences. We do not share your personal information with third parties without your consent, except as required by law.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Data Security</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We implement robust security measures to protect your data from unauthorized access, alteration, or disclosure. However, no system is completely secure; you agree to use our platform at your own risk.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Rights</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You have the right to access, update, or request the deletion of your personal information. For any privacy-related concerns, please contact us at <a href="mailto:support@locallink.com" className="text-blue-600 dark:text-blue-400 underline">support@locallink.com</a>.
        </p>
      </div>
    ),
  },
  "how-it-works": {
    title: "How It Works",
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Local Link is designed to simplify your experience when booking home services or purchasing essential products. Here’s a step-by-step guide on how our platform works:
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">1. Browse Our Catalog</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Explore a curated selection of services and products. Our user-friendly interface makes it easy to find exactly what you need.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">2. Select and Customize</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Once you choose a service or product, you can customize your order according to your specific requirements. Detailed descriptions and reviews help you make informed decisions.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">3. Place Your Order</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Add your selections to the cart and proceed to checkout. Our secure payment system ensures a smooth transaction every time.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">4. Real-time Tracking</h2>
        <p className="text-gray-700 dark:text-gray-300">
          After your order is confirmed, you can track its progress in real time. We update our tracking system frequently, so you’re never left wondering.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">5. Enjoy Our Services</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Once the service is rendered or the product delivered, enjoy the benefits of a seamless experience. Our customer support is always here to help if you need any assistance.
        </p>
      </div>
    ),
  },
  "our-mission": {
    title: "Our Mission",
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          Our Mission is at the heart of everything we do. It all started during the Entrepreneurship Development Program (EDP), where our founder witnessed firsthand the struggles faced by everyday people in accessing reliable home services and essential products.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          At EDP, we learned that innovation is not just about technology—it’s about solving real problems. The program ignited a passion in us to create a platform that connects trusted local providers with customers who deserve convenience, quality, and reliability.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Over the years, Local Link has grown from a spark of inspiration into a full-fledged solution that supports local businesses and empowers communities. We believe in the power of technology to bridge gaps, foster trust, and create a better everyday life.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Our Journey</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Our journey has been filled with challenges, learnings, and successes. From the initial idea conceived during EDP to the comprehensive platform we have today, every step has been driven by a commitment to excellence and customer satisfaction.
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Innovation:</strong> Constantly evolving to meet the changing needs of our customers.
          </li>
          <li>
            <strong>Trust:</strong> Partnering with only verified and reliable service providers.
          </li>
          <li>
            <strong>Community:</strong> Empowering local businesses and fostering growth in our communities.
          </li>
          <li>
            <strong>Excellence:</strong> Striving for perfection in every service and product we offer.
          </li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          Our mission remains clear: to transform the way home services and essential products are accessed in India. With innovation, trust, and community at our core, we continue to push the boundaries of what’s possible. Join us on our journey to create a smarter, more connected future.
        </p>
      </div>
    ),
  },
};

const Info = () => {
  // Use the URL parameter (e.g., /info/faqs) to decide which section to display
  const { type } = useParams();
  const section = infoContent[type];

  if (!section) {
    return (
      <div className="max-w-4xl mx-auto p-5 pt-20">
        <h1 className="text-2xl font-semibold text-red-500 dark:text-red-400">404 - Page Not Found</h1>
        <p className="dark:text-gray-300">The information you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-5 pt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold">{section.title}</h1>
      </header>

      {/* Content Area */}
      <article className="prose prose-lg">{section.content}</article>

      {/* Footer */}
      <footer className="mt-10 border-t pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Local Link. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Info;

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function About() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-black-900 dark:text-black mb-4">
          About Us – AgriSupply
        </h1>

        <p className="mb-3 text-black-500 dark:text-black-400 first-line:uppercase first-line:tracking-widest 
        first-letter:text-7xl first-letter:font-bold first-letter:text-black-900 dark:first-letter:text-black-100 
        first-letter:me-3 first-letter:float-start">
          Welcome to AgriSupply, a revolutionary platform designed to bridge the gap between farmers and fertilizer 
          manufacturers. Our mission is to streamline the agricultural supply chain, ensuring that high-quality 
          fertilizers reach farmers efficiently and affordably.
        </p>

        <h2 className="text-2xl font-semibold text-black-900 dark:text-white mt-6 mb-2">Our Vision</h2>
        <p className="text-black-500 dark:text-black-400">
          We envision a future where farmers have easy access to the best fertilizers, improving crop yields and 
          promoting sustainable farming practices. By leveraging technology, we aim to simplify the process of 
          fertilizer procurement and inventory management, empowering farmers to make informed decisions for 
          their agricultural needs.
        </p>

        <h2 className="text-2xl font-semibold text-black-900 dark:text-white mt-6 mb-2">What We Do</h2>
        <ul className="list-disc list-inside text-black-500 dark:text-black-400">
          <li>
            <strong>For Farmers:</strong> We provide a user-friendly platform for farmers to explore, compare, and purchase 
            fertilizers directly from manufacturers. Farmers can track their orders, make secure payments, and share feedback on products.
          </li>
          <li>
            <strong>For Manufacturers:</strong> We offer an efficient marketplace for fertilizer manufacturers to list their 
            products, manage inventory, and directly connect with farmers, eliminating intermediaries and reducing costs.
          </li>
          <li>
            <strong>For Administrators:</strong> Our system ensures seamless management of users, transactions, and inventory, 
            ensuring transparency and reliability in the agricultural supply chain.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-black-900 dark:text-white mt-6 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-black-500 dark:text-black-400">
          <li><strong>Direct Farmer-Manufacturer Interaction –</strong> Eliminates unnecessary middlemen, reducing costs.</li>
          <li><strong>Efficient Inventory Management –</strong> Keeps track of available fertilizers and restocking needs.</li>
          <li><strong>Seamless Order & Payment System –</strong> Secure transactions with real-time order tracking.</li>
          <li><strong>Farmer Feedback & Ratings –</strong> Helps improve product quality and farmer satisfaction.</li>
          <li><strong>Data-Driven Insights –</strong> Provides manufacturers with demand trends for better production planning.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black-900 dark:text-white mt-6 mb-2">Why Choose AgriSupply?</h2>
        <p className="text-black-500 dark:text-black-400">
          We are committed to enhancing the agricultural sector by integrating smart technology solutions with traditional 
          farming practices. Our platform is secure, transparent, and farmer-friendly, ensuring a seamless experience 
          for both farmers and manufacturers.
        </p>

        <p className="text-black-900 dark:text-white font-semibold text-lg mt-6">
          Empowering Farmers. Supporting Growth. Transforming Agriculture.
        </p>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default About;
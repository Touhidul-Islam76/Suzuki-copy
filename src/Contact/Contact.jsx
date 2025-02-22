import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [showNotification, setShowNotification] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const OnSubmit = (e) => {
        e.preventDefault();
        setShowNotification(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');

    }
    useEffect(() => {
        if (showNotification) {
          const timer = setTimeout(() => {
            setShowNotification(false);
          }, 3000);
          return () => clearTimeout(timer);
        }
      }, [showNotification]);
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center mb-8">
        Provide your information below, and we'll reach out to you soon
        </p>
        <form className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-semibold">
                Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
                onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-2 font-semibold">
              Massage
            </label>
            <textarea
              id="message"
              value={message}
                onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Write your query here"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={OnSubmit}
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
          {showNotification && (
        <div className=" animate-slide-in fixed top-20 right-10 bg-green-500  text-white px-6 py-3 rounded-md shadow-lg text-lg flex items-center gap-2 animate-slide-in">
          🎉 Your form has been submitted successfully!
          <span className="ml-4 text-sm opacity-75">(Auto closing in 3s...)</span>
        </div>
      )}
        </form>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Head Office</h2>
          <p>Address: 387, TEJGAON I/A, DHAKA-1208</p>
          <p>Call: 16638</p>
          <p>Email: info@suzuki.com.bd</p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">MANUFACTURING UNIT</h2>
          <p>Address: Boro Bhabanipur, KASHIMPUR, GAZIPUR</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

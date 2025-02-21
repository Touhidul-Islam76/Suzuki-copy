import React from "react";
import {Link} from "react-router-dom"

const dealers = [
  { id: 1, name: "Suzuki Dealer Dhaka", location: "Dhaka", phone: "+880123456789" },
  { id: 2, name: "Suzuki Dealer Chittagong", location: "Chittagong", phone: "+880987654321" },
  { id: 3, name: "Suzuki Dealer Sylhet", location: "Sylhet", phone: "+880192837465" },
];

const DealerCard = ({ dealer }) => (
  <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-200">
    <h3 className="text-xl font-semibold">{dealer.name}</h3>
    <p className="text-gray-600">{dealer.location}</p>
    <p className="text-gray-800 font-medium">📞 {dealer.phone}</p>
  </div>
);

export default function DealerPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-700 p-4 text-white text-center text-2xl font-bold">
        Suzuki Dealers
      </nav>
      
      {/* Hero Section */}
      <div className="bg-blue-500 text-white py-10 text-center mb-6">
        <h1 className="text-3xl font-bold">Find a Suzuki Dealer Near You</h1>
      </div>
      <div className='go-back text-center'>
        <Link to='/' className='text-center text-3xl border-2 border-gray-800 p-3 rounded-lg hover:bg-black hover:text-white transition-all duration-500'> Go back </Link>
      </div>
      
      {/* Dealer List */}
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dealers.map((dealer) => (
          <DealerCard key={dealer.id} dealer={dealer} />
        ))}
      </div>
      <div className='dealr-map'>
      <iframe className='w-[100%] p-8 h-[80vh]' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29245.74011255488!2d90.4944935!3d23.6144619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1740125889824!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

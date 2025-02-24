'use client'
import react , { useState } from 'react';
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { supabase } from './supabaseClient';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!email) return alert("Please enter an email.");
  
    try {
      // Insert the email into the Supabase database
      const { data, error } = await supabase
        .from('emails')
        .insert([{ email }]);
        toast.success("Email successfully saved!");

      // Log the full response for debugging
      console.log('Data:', data);
      console.log('Error:', error);
       
      if (error) {
        throw error; // if an error occurs, it will be thrown here
      }
  
      setEmail(''); // Clear the email input
    } catch (error) {
      // Log the error if it's undefined
      console.error('Error saving email:', error);
      alert('Error saving email: ' + (error.message || 'Unknown error'));
    }
  };
  
  return (
    <div className="bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-4xl  p-8 ">
        {/* Header Section */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="font-extrabold text-3xl text-blue-600">Skillswap</h1>
          <p className="cursor-pointer text-blue-500 hover:underline">
            Become a Handyman
          </p>
        </header>

        {/* Main Content */}
        <main className="text-center">
          <h1 className="text-2xl font-extrabold text-gray-700 tracking-tight lg:text-5xl mb-6 mt-20">
            Find the Perfect Handyman <br /> for Your Needs!
          </h1>

          {/* Search Section */}
          <div className="flex items-center gap-3 justify-center flex-wrap  mt-12">
            <div className="relative w-full max-w-md flex-shrink-0">
              <input
                type="text"
                placeholder="What service do you need?..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <span className="absolute inset-y-0 left-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M16.65 9.35a7.3 7.3 0 11-14.6 0 7.3 7.3 0 0114.6 0z"
                  />
                </svg>
              </span>
            </div>

            <button className="bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition">
              Find Handyman
            </button>
          </div>

          {/* How It Works Section */}
          <section className="mt-28">
            <h2 className="text-3xl font-semibold text-gray-800  pb-2">
              How It Works
            </h2>

            <div className="flex flex-wrap gap-8 justify-center mt-12">
              {[
                { id: 1, title: "Post Your Job", description: "Tell us what you need." },
                { id: 2, title: "Get Offers", description: "Handymen near you will send quotes." },
                { id: 3, title: "Choose the Best Fit", description: "Compare reviews, prices, and profiles." },
                { id: 4, title: "Job Done Right", description: "Hire with confidence and enjoy the results." },
              ].map((step) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full font-bold ${
                      step.id === 1
                        ? "bg-blue-500 text-white"
                        : "border-2 border-blue-500 text-blue-500"
                    }`}
                  >
                    {step.id}
                  </div>

                  <div className="text-start">
                    <h3 className="text-lg font-semibold text-gray-600">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 w-[200px]">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className=" mt-16 ">
            <div className="flex flex-col items-center ">
                      <h2 className="text-3xl font-semibold text-gray-800 mt-28 pb-2">
            🚀 Be the First to Access Africa's New Handyman Marketplace!
            </h2>
            <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-md mx-auto">
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <button onClick={handleSubmit} className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg w-full">
    Sign up today
  </button>
</div>


            </div>
            <ToastContainer />

          </section>
        </main>
      </div>
    </div>
  );
}


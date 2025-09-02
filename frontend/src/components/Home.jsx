import React from 'react'
import img from "../assets/Header (1).png"
import img2 from "../assets/img3.png"

import { useNavigate } from 'react-router-dom'

import { Calendar, User, Search, Star } from "lucide-react";
import { useauth } from '../contextproviders/authcontext';

const Home = () => {
 

  const navigate=useNavigate();
  return (
    <div className=''>
      <div className='pt-20'></div>Home
      {/* Header/herosection */}
      <div className='flex  '>
         <div className='w-[50%] flex items-center'>
          <div className='pl-20'>
          <h1 className='text-5xl  font-bold leading-tight text-gray-900'>
            Medical Care Now <br />
            Simplified For <span className='text-blue-600'>Everyone</span>
          </h1>

          <p className='mt-6 text-gray-600 text-lg max-w-md'>
            Health carely is a new way to get health insurance quotes. 
            We offer tools similar to those provided by insurance companies 
            for free and prices are based on donations and not restrictive 
            health plan networks.
          </p>

          <button onClick={()=>{
            navigate("/login")
          }} className='mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition'>
            Contact Us
          </button>
          </div>
        </div>
        <div className=' text-right'>
          <img src={img} className="size-[95%] inline-block right-0" alt="" />
        </div>

      </div>

      <div className="py-16 bg-white text-center">
      {/* Title */}
      <p className="text-blue-600 font-medium">Fast Solutions</p>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2">
        step by step to get your solutions
      </h2>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12">
        
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition">
          <Search className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Check health complaints</h3>
          <p className="text-gray-500 text-sm mt-2">
            Check the disease so you can easily choose the right specialist
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition">
          <User className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Choose doctor Specialist</h3>
          <p className="text-gray-500 text-sm mt-2">
            Choose a specialist according to your disease complaints
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition">
          <Calendar className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Make a Schedule</h3>
          <p className="text-gray-500 text-sm mt-2">
            Make a schedule with the doctor concerned so you can start the examination
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6 text-left hover:shadow-xl transition">
          <Star className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="font-semibold text-lg">Get your Solutions</h3>
          <p className="text-gray-500 text-sm mt-2">
            After conducting an examination with a specialist we can help find the right healing method
          </p>
        </div>
      </div>
    </div>
     <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
      
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-blue-600 font-medium">Find Doctor</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Find the right doctor according <br /> to your complaint
        </h2>
        <p className="text-gray-600 leading-relaxed">
          HealthCare.ly is a free, health app that goes beyond matching you with
          doctors. It actively helps you find the right doctor based on your
          medical and personal needs and connects you with your HealthCarely
          community for ongoing support throughout your journey to healthier
          living.
        </p>

        {/* Features */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full">
              ✓
            </span>
            <p className="text-gray-700">
              100% free app designed to help you find the right doctor for you.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full">
              ✓
            </span>
            <p className="text-gray-700">
              Available 900 doctors specialist
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          See the Doctors
        </button>
      </div>

      {/* Right Section (Doctor Image) */}
              <div className=' text-right'>
          <img src={img} className="inline-block right-0" alt="" />
        </div>
    </div>


    {/* last section */}

    <div className="py-16 bg-white text-center">
      {/* Section Heading */}
      <p className="text-blue-600 font-medium">Our Rating</p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
        We’re employee benefit at <br /> 7500+ hospital
      </h2>

      {/* Rating Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
          <h3 className="text-3xl font-bold text-gray-900">900+</h3>
          <p className="mt-2 font-semibold text-gray-700">Verified Specialist</p>
          <p className="text-gray-500 text-sm">Highly Verified</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
          <h3 className="text-3xl font-bold text-gray-900">45000+</h3>
          <p className="mt-2 font-semibold text-gray-700">Happy Customers</p>
          <p className="text-gray-500 text-sm">High Performance</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600">
          <h3 className="text-3xl font-bold text-gray-900">99,7%</h3>
          <p className="mt-2 font-semibold text-gray-700">Positive Feedback</p>
          <p className="text-gray-500 text-sm">Customers Approve</p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home
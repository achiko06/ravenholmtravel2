import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidChevronsLeft } from 'react-icons/bi'

const Holidays = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-center text-center">
            <p className="text-2xl lg:text-6xl text-gray-800 mt-12">
               UNDER CONSTRUCTION
            </p>
        </div>
        <Image src="/images/aircraftimg.png" alt="aircraft-image" width="300" height="300" />
        <div className="flex flex-col items-center justify-center text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-12">
                Page Not Found
            </p>
            <p className="md:text-lg lg:text-xl text-gray-600 mt-8 px-2">
                Sorry, the page you are looking for is under construction.
            </p>
            <Link 
                href="/" 
                className="flex items-center space-x-2 bg-secondary hover:bg-lightGold hover:scale-110 text-black px-4 py-2 mt-12 rounded-xl transition duration-700" 
                title="Return Home"
            >
                <BiSolidChevronsLeft className="h-5 w-5"/>
                <span>Return Home</span>
            </Link>
        </div>
    </div>
  )
}

export default Holidays
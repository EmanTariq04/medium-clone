import React from 'react'
import Link from 'next/link';


function Header() {
    return (
      <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex mt-2 items-center space-x-5">
          <Link href="/">
            <img
              className="w-44 object-contain cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg"
              alt="logo"
            />
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
            <h3>Our Story</h3>
            <h3>Memebership</h3>
            <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Write</h3>
          </div>
        </div>
  
        <div className="flex items-center space-x-5 text-green-600">
          <h3>Sign In</h3>
          <h3 className="border px-4 py-1 rounded-full border-green-600">Get Started</h3>
        </div>
      </header>
    );
  }
  
  export default Header;
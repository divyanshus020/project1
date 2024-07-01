import React, { useState } from 'react';

const Sidenavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'UPDATE CUSTOMER', path: '#' },
    { name: 'DELETE ALL WORKING', path: '#' },
    // { name: 'Services', path: '#' },
  ];

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <button className="md:hidden p-2  text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'} Menu
        </button>
        {/* Main content goes here */}
      </div>
      <div className={`h-screen w-30 border-2 border-black rounded text-black  transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out fixed right-0 top-0`}>
        {/* <div className="p-4 text-xl font-bold">My App</div> */}
        <ul className="mt-4">
          {navLinks.map((link, index) => (
            <li key={index} className="px-4 font-bold border-2 rounded-full border-black m-2 py-2 hover:bg-gray-500 cursor-pointer">
              {link.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidenavbar;

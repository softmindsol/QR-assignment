import React from 'react';
import { IoArrowBack, IoNotificationsOutline, IoPersonCircleOutline } from 'react-icons/io5';

const Header = () => {
  return (
    // The header is sticky to the very top of the page
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="rounded-md bg-blue-500 px-2 py-1 text-sm font-bold text-white">
          PRO
        </div>
        <IoArrowBack size={24} className="text-gray-600" />
      </div>
      <div className="flex items-center gap-4">
        <IoNotificationsOutline size={24} className="text-gray-600" />
        <IoPersonCircleOutline size={24} className="text-gray-600" />
      </div>
    </header>
  );
};

export default Header;



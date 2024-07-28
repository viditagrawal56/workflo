import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div>
        <h1 className="text-2xl font-bold">Good morning, Joe!</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Create new task
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="/path/to/avatar.jpg"
            alt="Joe Gardner"
            className="w-10 h-10 rounded-full"
          />
          <span>Joe Gardner</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

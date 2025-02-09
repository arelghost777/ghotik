import React from 'react'
import { Link } from 'react-router-dom';

const FailToConnect = ({fetchData}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <div className="text-6xl font-bold text-red-600 mb-4"><i className="fa solid fa-wifi"></i></div>
      <p className="text-2xl text-gray-700 mb-8">No internet access. Make sure your device is connected to an Internet network and try again</p>
      <button
        onClick={fetchData}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Refresh
      </button>
    </div>
  );
};

export default FailToConnect;
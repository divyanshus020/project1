// src/components/WorkingSheet.js
import React from 'react';

const WorkingSheet = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <table className="min-w-full border-collapse border border-gray-400">
        <thead>
            <th colSpan="6" className="border border-gray-400 px-4 py-2">WORKING SHEET</th>
          <tr>
            <th className="border border-gray-400 px-4 py-2">SL NO</th>
            <th className="border border-gray-400 px-4 py-2">PARTY NAME</th>
            <th colSpan="2" className="border border-gray-400 px-4 py-2">REMARKS</th>
          </tr>
          <tr>
            <th className="border border-gray-400 px-4 py-2"></th>
            <th className="border border-gray-400 px-4 py-2"></th>
            <th className="border border-gray-400 px-4 py-2">MARKETING PERFORMANCE</th>
            <th className="border border-gray-400 px-4 py-2">SALES PERFORMANCE</th>
            <th className="border border-gray-400 px-4 py-2">MONTH</th>
            <th className="border border-gray-400 px-4 py-2">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td className="border border-gray-400 px-4 py-2"></td>
            <td colSpan="2" className="border border-gray-400 px-4 py-2"></td>
            <td colSpan="2" className="border border-gray-400 px-4 py-2"></td>
          </tr>
          <tr>
            <td colSpan="6" className="border border-gray-400 px-4 py-2">REMARKS</td>
          </tr>
          <tr>
            <td colSpan="2" className="border border-gray-400 px-4 py-2">SOCIAL MEDIA</td>
            <td colSpan="2" className="border border-gray-400 px-4 py-2">TELE MARKETING</td>
            <td colSpan="2" className="border border-gray-400 px-4 py-2"></td>
          </tr>
          <tr>
            <td colSpan="2" className="border border-gray-400 px-4 py-2">FOLLOW-UP / UNFOLLOW-UP</td>
            <td colSpan="2" className="border border-gray-400 px-4 py-2"></td>
            <td colSpan="2" className="border border-gray-400 px-4 py-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkingSheet;

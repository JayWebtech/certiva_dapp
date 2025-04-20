import React from "react";

const DashboardCard = ({ title, value }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md bg-[#A3FF50] text-black h-[112px]`}
    >
      <div className="text-sm font-medium mb-2">{title}</div>
      <div className="text-2xl font-bold">{value.toLocaleString()}</div>
    </div>
  );
};

export default DashboardCard;

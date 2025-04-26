import React from "react";
import DashboardCard from "@/components/dashboard/DashboardCard";

const Dashboard = () => {
  const dashboardStats = [
    {
      title: "Total Degrees Issued",
      value: 721000,
      bgColor: "bg-green-500",
    },
    {
      title: "Degrees Verified",
      value: 12000,
      bgColor: "bg-green-500",
    },
    {
      title: "Revoked Degrees",
      value: 1156,
      bgColor: "bg-green-500",
    },
    {
      title: "Failed Verification",
      value: 239000,
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-8">
          {dashboardStats.map((stat) => (
            <DashboardCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
    </div>
  );
};

export default Dashboard;

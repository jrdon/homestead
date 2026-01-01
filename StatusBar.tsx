import React from "react";

const StatusBar: React.FC = () => {
  return (
    <div className="h-10 bg-gray-800 text-white flex items-center justify-between px-4">
      <span>Status: Online</span>
      <span>Last updated: {new Date().toLocaleTimeString()}</span>
    </div>
  );
};

export default StatusBar;
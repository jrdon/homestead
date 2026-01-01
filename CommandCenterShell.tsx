import React, { ReactNode } from "react";

interface CommandCenterShellProps {
  children: ReactNode;
}

const CommandCenterShell: React.FC<CommandCenterShellProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default CommandCenterShell;
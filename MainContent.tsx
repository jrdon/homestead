import React, { ReactNode } from "react";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="flex-1 p-4 overflow-auto">
      {children}
    </main>
  );
};

export default MainContent;
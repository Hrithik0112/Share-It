import React from "react";
import SideNav from "./_components/SideNav";

function layout({ children }) {
  return (
    <div>
      <div className="hidden h-full md:w-64 flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}

export default layout;

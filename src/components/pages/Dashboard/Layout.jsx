// import React from "react";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import { Outlet, useLocation } from "react-router-dom";
// import { useUserContext } from "../../../Lib/const/UserContext";

// export default function Layout() {
// //   const location = useLocation();
// //   const role = location.state?.role || "USER"; 
// //   const profilePic = location.state?.profilePic;
// //   const name = location.state?.name;
//   const { user } = useUserContext(); // Destructure user from useUserContext

//   return (
//     <div className="flex flex-row bg-[#EEF2F5] h-screen w-screen overflow-hidden">
//       {/* Sidebar is always shown */}
//       <Sidebar role={user.role} />
//       <div className="flex flex-col flex-1">
//         {/* Header is always shown */}
//         <Header role={user.role} profilePic={user.profilePic} name={user.name} />
//         <div className="flex-1 min-h-0 pl-10 overflow-auto py-9">
//           <Outlet context={{ role: user.role, profilePic: user.profilePic, name: user.name }}/>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../../../Lib/const/UserContext";

export default function Layout() {
  const { user } = useUserContext(); // Destructure user from useUserContext

  return (
    <div className="flex flex-row bg-[#EEF2F5] h-screen w-screen overflow-hidden">
      {/* Sidebar is always shown */}
      <Sidebar role={user.role} />
      <div className="flex flex-col flex-1">
        {/* Header is always shown */}
        <Header role={user.role} profilePic={user.profilePic} name={user.name} />
        <div className="flex-1 min-h-0 pl-10 overflow-auto py-7">
          <Outlet context={{ role: user.role, profilePic: user.profilePic, name: user.name }}/>
        </div>
      </div>
    </div>
  );
}

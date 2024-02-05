import "./sidebar.css";
import {
  Home,
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  CalendarMonth,
  // AttachMoney,
  TextSnippet,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  // const viewHeight = window.outerHeight;
  // const menuItem = [
  //   {
  //     path: "/",
  //     name: "dashboard",
  //     icon: <Home />,
  //   },
  //   {
  //     path: "/",
  //     name: "analytics",
  //     icon: <Timeline />,
  //   },
  //   {
  //     path: "/",
  //     name: "sales",
  //     icon: <TrendingUp />,
  //   },
  // ];
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    // <div className="sidebar">
    <div className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="sidebarWrapper">
        <div
          className="sidebarMenu"
          // style={{ width: isOpen ? "300px" : "50px" }}
        >
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                {/* <Home className="sidebarIcon" onClick={toggle} /> */}
                <Home className="sidebarIcon" />
                Home
              </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Meeting Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Board
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Meetings
              </li>
            </Link>
            <Link to="/meeting-types" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Meeting Types
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Schedule Meeting
              </li>
            </Link>
            <Link to="/document" className="link">
              <li className="sidebarListItem">
                <TextSnippet className="sidebarIcon" />
                Documents
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/calendar" className="link">
              <li className="sidebarListItem">
                <CalendarMonth className="sidebarIcon" />
                Calendar
              </li>
            </Link>
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <Link to="/chat" className="link">
              <li className="sidebarListItem">
                <ChatBubbleOutline className="sidebarIcon" />
                Messages
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Settings className="sidebarIcon" />
              Settings
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>

    // <div className="container">
    //   <div className="sidebar">
    //     <div className="top_section">
    //       <h1 className="logo">Logo</h1>
    //       <div className="bars">
    //         <PermIdentity />
    //       </div>
    //     </div>
    //     {menuItem.map((item, index) => (
    //       <NavLink
    //         to={item.path}
    //         key={index}
    //         className="link"
    //         activeClassName="active"
    //       >
    //         <div className="icon">{item.icon}</div>
    //         <div className="link_text">{item.name}</div>
    //       </NavLink>
    //     ))}
    //   </div>
    //   <main>{children}</main>
    // </div>
  );
}

// import React, { useState } from "react";
// import "./sidebar.css";
// import {
//   // MenuIcon,
//   Menu,
//   Home,
//   LineStyle,
//   Timeline,
//   TrendingUp,
//   PermIdentity,
//   Storefront,
//   CalendarMonth,
//   // AttachMoney,
//   TextSnippet,
//   BarChart,
//   MailOutline,
//   DynamicFeed,
//   ChatBubbleOutline,
//   WorkOutline,
//   Report,
//   Settings,
// } from "@mui/icons-material";
// import { NavLink } from "react-router-dom";

// const Sidebar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const menuItem = [
//     {
//       path: "/",
//       name: "Dashboard",
//       icon: <Home />,
//     },
//     {
//       path: "/users",
//       name: "Analytics",
//       icon: <Timeline />,
//     },
//     {
//       path: "/users",
//       name: "Sales",
//       icon: <TrendingUp />,
//     },
//     {
//       path: "/users",
//       name: "Users",
//       icon: <PermIdentity />,
//     },
//     // {
//     //   path: "/",
//     //   name: "Products",
//     //   icon: <PermIdentity />,
//     // },
//     {
//       path: "/document",
//       name: "Documents",
//       icon: <Storefront />,
//     },
//     {
//       path: "/users",
//       name: "Reports",
//       icon: <TextSnippet />,
//     },
//     {
//       path: "/calendar",
//       name: "Calendar",
//       icon: <BarChart />,
//     },
//     {
//       path: "/chat",
//       name: "Mail",
//       icon: <CalendarMonth />,
//     },
//     {
//       path: "/chat",
//       name: "Feedback",
//       icon: <MailOutline />,
//     },
//     {
//       path: "/chat",
//       name: "Messages",
//       icon: <DynamicFeed />,
//     },
//     {
//       path: "/",
//       name: "Manage",
//       icon: <ChatBubbleOutline />,
//     },
//     {
//       path: "/",
//       name: "Settings",
//       icon: <Settings />,
//     },
//     {
//       path: "/",
//       name: "Report",
//       icon: <Report />,
//     },
//   ];
//   return (
//     <div className="container">
//       <div
//         style={{
//           width: isOpen ? "200px" : "50px",
//           height: "100vh",
//           flex: isOpen ? "1" : "0",
//         }}
//         className="sidebar"
//       >
//         <div className="top_section">
//           <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
//             Logo
//           </h1>
//           <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
//             <Menu onClick={toggle} />
//           </div>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             // activeclassName="active"
//           >
//             <div className="icon">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="link_text"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Sidebar;

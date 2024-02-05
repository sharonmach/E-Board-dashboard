import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  MenuOutlined,
  SettingsOutlined,
  TimelineOutlined,
  ChatBubbleOutline,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
// import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
// import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
// import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
// import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// function App() {
//   const { collapseSidebar } = useProSidebar();
export default function Sidebarr() {
  const { collapseSidebar } = useProSidebar();

  const StyledLink = styled(Link)`
    text-decoration: none;
  `;
  const menuItemStyle = {
    textAlign: "center",
    margin: "18px 0", // Add some margin at the top and bottom
  };

  return (
    <div style={({ height: "100%" }, { display: "flex" })}>
      <Sidebar style={{ height: "100%" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlined />}
            onClick={() => {
              collapseSidebar();
            }}
            // style={{ textAlign: "center" }}
            style={menuItemStyle}
          >
            {" "}
            <h2>E-Board</h2>
          </MenuItem>

          <StyledLink to="/">
            <MenuItem icon={<HomeOutlined />}>Home</MenuItem>
          </StyledLink>
          <StyledLink to="/meetings">
            <MenuItem icon={<ReceiptOutlined />}>Meeting Analytics</MenuItem>
          </StyledLink>
          {/* <MenuItem icon={<HelpOutlineOutlined />}>Meeting Types</MenuItem> */}
          <StyledLink to="/meeting-types">
            <MenuItem icon={<CalendarTodayOutlined />}>
              Schedule Meeting
            </MenuItem>
          </StyledLink>
          <div style={{ borderBottom: "1px solid #ddd" }}></div>

          {/* <MenuItem icon={<ContactsOutlined />}>Sales</MenuItem> */}
          {/* <StyledLink to="/users">
            <MenuItem icon={<ReceiptOutlined />}>Board</MenuItem>
          </StyledLink> */}
          <SubMenu icon={<PeopleOutlined />} label="Board">
            <StyledLink to="/users">
              <MenuItem icon={<PeopleOutlined />}>View Members</MenuItem>
            </StyledLink>
            <StyledLink to="/newUser">
              <MenuItem icon={<PeopleOutlined />}>Add new users</MenuItem>
            </StyledLink>
            {/* <MenuItem icon={<PeopleOutlined />}>Item 3</MenuItem> */}
          </SubMenu>

          {/* <MenuItem icon={<HelpOutlineOutlined />}>Meetings</MenuItem> */}
          <div style={{ borderBottom: "1px solid #ddd" }}></div>
          <StyledLink to="/document">
            <MenuItem icon={<HelpOutlineOutlined />}>Documents</MenuItem>
          </StyledLink>
          <StyledLink to="/chat">
            <MenuItem icon={<ChatBubbleOutline />}>Messages</MenuItem>
          </StyledLink>
          <StyledLink to="/calendar">
            <MenuItem icon={<CalendarTodayOutlined />}>Calendar</MenuItem>
          </StyledLink>
          <div style={{ borderBottom: "1px solid #ddd" }}></div>
          <MenuItem icon={<CalendarTodayOutlined />}>Manage</MenuItem>
          <MenuItem icon={<SettingsOutlined />}>Settings</MenuItem>
          <MenuItem icon={<TimelineOutlined />}>Report</MenuItem>
        </Menu>
      </Sidebar>
      {/* <main>
        <h1 style={{ color: "white", marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
      </main> */}
    </div>
  );
}

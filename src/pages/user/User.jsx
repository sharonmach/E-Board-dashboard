import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Edit User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="sharon" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Sharon Macharia" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="sharon@gmail.com" />
        </div>
        {/* <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div> */}
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+254 746 56 33 75" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Nairobi | Kenya" />
        </div>
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select className="newUserSelect" name="role" id="role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>

        <button className="newUserButton">Edit User</button>
        <button className="cancelButton">Cancel</button>
        {/* <Button className="newUserButton" variant="contained">
          Add
        </Button> */}
      </form>
    </div>
  );
}

import "./meeting.css";
import React from "react";
import {
  FormControl,
  OutlinedInput,
  InputLabel,
  Select,
  MenuItem,
  Breadcrumbs,
  Typography,
  Link,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useTheme } from "@mui/material/styles";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function NewUser() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="newUser">
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 5 }}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Meetings
        </Link>
        <Typography color="text.primary">New Meeting</Typography>
      </Breadcrumbs>

      <form className="newUserForm">
        {/* <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="sharon" />
        </div> */}

        <FormControl fullWidth>
          {/* <InputLabel id="demo-multiple-name-label">Meeting</InputLabel> */}
          <label>Meeting</label>
          {/* <InputLabel id="demo-simple-select-label">Meeting</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Meeting"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Board Meeting</MenuItem>
            <MenuItem value={20}>Onboarding Meeting</MenuItem>
            <MenuItem value={30}>Progress Updates</MenuItem>
            <MenuItem value={30}>Training Sessions</MenuItem>
            <MenuItem value={30}>Planning Meetings</MenuItem>
            <MenuItem value={30}>
              Innovation and Brainstorming Meetings
            </MenuItem>
          </Select>
        </FormControl>

        <div className="newUserItem">
          <label>Attendee Name:</label>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Attendees"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Sharon Macharia</MenuItem>
            <MenuItem value={20}>Benjamin Mutuku</MenuItem>
            <MenuItem value={30}>Grace Kimani</MenuItem>
            <MenuItem value={30}>Albert Joe</MenuItem>
            <MenuItem value={30}>Sylvia Muthoni</MenuItem>
            <MenuItem value={30}>
              Innovation and Brainstorming Meetings
            </MenuItem>
          </Select>
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Attendees"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Sharon Macharia</MenuItem>
            <MenuItem value={20}>Benjamin Mutuku</MenuItem>
            <MenuItem value={30}>Grace Kimani</MenuItem>
            <MenuItem value={30}>Albert Joe</MenuItem>
            <MenuItem value={30}>Sylvia Muthoni</MenuItem>
            <MenuItem value={30}>
              Innovation and Brainstorming Meetings
            </MenuItem>
          </Select>
        </div>
        <div className="newUserItem">
          <label>Date</label>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Attendees"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Sharon Macharia</MenuItem>
            <MenuItem value={20}>Benjamin Mutuku</MenuItem>
            <MenuItem value={30}>Grace Kimani</MenuItem>
            <MenuItem value={30}>Albert Joe</MenuItem>
            <MenuItem value={30}>Sylvia Muthoni</MenuItem>
            <MenuItem value={30}>
              Innovation and Brainstorming Meetings
            </MenuItem>
          </Select>
        </div>
        <div className="newUserItem">
          <label>Time</label>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Attendees"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Sharon Macharia</MenuItem>
            <MenuItem value={20}>Benjamin Mutuku</MenuItem>
            <MenuItem value={30}>Grace Kimani</MenuItem>
            <MenuItem value={30}>Albert Joe</MenuItem>
            <MenuItem value={30}>Sylvia Muthoni</MenuItem>
            <MenuItem value={30}>
              Innovation and Brainstorming Meetings
            </MenuItem>
          </Select>
        </div>

        {/* <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Sharon Macharia" />
        </div> */}
        <div className="formButton2">
          <button className="newUserButton2">Add Meeting</button>
          <button className="cancelButton2">Cancel</button>
        </div>

        {/* <Button className="newUserButton" variant="contained">
          Add
        </Button> */}
      </form>
    </div>
  );
}

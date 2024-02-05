// import React from "react";
import {
  Avatar,
  FormControlLabel,
  Checkbox,
  TextField,
  Grid,
  Paper,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1976d2",
  };
  const btnStyle = {
    margin: "8px 0",
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            {" "}
            {/* Added 'item' to the Grid */}
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
          </Grid>
          <Grid item>
            {" "}
            {/* Added 'item' to the Grid */}
            <h2>Log In</h2>
          </Grid>
        </Grid>
        {/* <TextField label="Username" placeholder="username" />
         */}
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          // autoComplete="current-password"
          variant="standard"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <TextField
          id="standard-text-input"
          label="User name"
          type="text"
          // autoComplete="current-password"
          variant="standard"
          fullWidth
          required
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={<Checkbox name="checkbox" color="primary" />}
          label="Remember me"
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={btnStyle}
          fullWidth
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot Password</Link>
        </Typography>
        <Typography>
          Do you have an account?
          <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

// import React from 'react'
import { TextField, Grid, Paper, Button, Stack } from "@mui/material";

export default function SignUp() {
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
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid sx={{ mb: 2 }}>
              <h2>Create a new Account</h2>
            </Grid>
          </Grid>
          {/* <TextField label="Username" placeholder="username" />
           */}
          <Stack spacing={2} direction="row" sx={{ mb: 4 }}>
            <TextField
              type="text"
              variant="outlined"
              label="First Name"
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              label="Last Name"
              fullWidth
              required
            />
          </Stack>
          <TextField
            type="email"
            variant="outlined"
            label="Email"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Password"
            required
            fullWidth
            sx={{ mb: 3 }}
          />
          <TextField
            type="password"
            variant="outlined"
            label="Confirm Password"
            required
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={btnStyle}
            fullWidth
          >
            Sign Up
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

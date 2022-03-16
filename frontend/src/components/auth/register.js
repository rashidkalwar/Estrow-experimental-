import axiosInstance from "../../utils/axios";
import { Copyright, UseDisclaimer, PasswordField } from "./misc";
// import { useNavigate } from "react-router-dom";

//MaterialUI
import { useState } from "react";
import {
  TextField,
  Link,
  Grid,
  Box,
  Avatar,
  Button,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function SignUp() {
  // const history = useNavigate();

  const initialFormData = Object.freeze({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      //triming white spaces
      [e.target.name]: e.target.value.trim(),
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);

    axiosInstance
      .post(`user/create/`, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        // history.push("/login");
        // console.log(response);
        // console.log(response.data);
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: "primary.main", color: "white" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                error={Boolean(false)}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                error={errors.username ? true : false}
                label="Username"
                name="username"
                autoComplete="name"
                onChange={handleChange}
                helperText={errors.username?.[0]}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                error={errors.email ? true : false}
                onChange={handleChange}
                helperText={errors.email?.[0]}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordField
                required
                error={errors.password ? true : false}
                onChange={handleChange}
                helperText={errors.password?.[0]}
              />
            </Grid>
            <Grid item xs={12}>
              <UseDisclaimer />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </Container>
  );
}

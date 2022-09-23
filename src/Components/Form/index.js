import { Visibility, VisibilityOff } from "@mui/icons-material";
import TestPhoto from "./test.png";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import {
  CustomButton,
  CustomizedTextField,
  Image,
  Typography,
} from "../../globalStyles";
import { ButtonsSection, TextFieldsWrapper } from "./style";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Input = styled("input")({
  display: "none",
});

const schema = yup.object({
  userName: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Capital and small, number and special charechter @#$"
    ),
  userType: yup.string().required(),
});

const SignupForm = () => {
  const params = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState(TestPhoto);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: "Manager",
      profilePicture: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      axios
        .post(
          `https://test.helpmytoken.com/api/users${
            params.id ? `/${params.id}` : ""
          }`,
          {
            first_name: values.firstName,
            last_name: values.lastName,
            userName: values.userName,
            password: values.password,
            email: values.email,
            avatar: values.profilePicture,
          }
        )
        .then(() => {
          alert("updated");
          navigate("/");
        })
        .catch(() => alert("error"));
    },
  });

  const getUserData = async () => {
    if (params.id) {
      const response = await axios.get(
        `https://test.helpmytoken.com/api/users/${params.id}`
      );
      const data = response.data.payload;
      formik.setValues({
        ...formik.values,
        userName: data.username,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
      });
    }
  };

  useEffect(() => {
    getUserData();
  }, [params.id]);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid xs={12} md={8}>
            <Box>
              <Typography
                fontSize={24}
                fontWeight={500}
                style={{
                  justifyContent: "start",
                }}
              >
                New User Details
              </Typography>
              <Divider sx={{ my: 2, borderBottomWidth: "medium" }} />
            </Box>
            <TextFieldsWrapper>
              <CustomizedTextField
                id="userName"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
                label="User Name"
              />
              <FormControl
                sx={{ m: 1, width: "350px ", minWidth: 320 }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-confirmPassword">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  label="password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText sx={{ color: "red" }}>
                  {formik.touched.password && formik.errors.password}
                </FormHelperText>
              </FormControl>

              <CustomizedTextField
                id="firstName"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                label="First Name"
              />
              <CustomizedTextField
                id="lastName"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                label="Last Name"
              />
              <CustomizedTextField
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
              />
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="userType"
                value={formik.values.userType}
                onChange={formik.handleChange}
                sx={{
                  margin: "10px",
                }}
              >
                <FormControlLabel
                  value="Manager"
                  control={<Radio />}
                  label="Manager"
                />
                <FormControlLabel
                  value="Employee"
                  control={<Radio />}
                  label="Employee"
                />
              </RadioGroup>
            </TextFieldsWrapper>
          </Grid>
          <Grid xs={12} md={4}>
            <Box>
              <Typography
                fontSize={24}
                fontWeight={500}
                style={{
                  justifyContent: "start",
                }}
              >
                Profile Picture
              </Typography>
              <Divider sx={{ my: 2, borderBottomWidth: "medium" }} />
            </Box>
            <Stack spacing={2}>
              <Box sx={{ width: "100%" }}>
                <Image
                  width="100%"
                  height="300px"
                  background={`url(${avatar}) center center no-repeat`}
                  margin="5px 0"
                />
              </Box>
              <label htmlFor="profileImage" style={{ width: "100%" }}>
                <Input
                  accept="image/*"
                  id="profileImage"
                  name="image"
                  multiple
                  type="file"
                  onChange={async (e) => {
                    if (!e.target.files.length) return;
                    setAvatar(URL.createObjectURL(e.target.files[0]));
                    formik.setFieldValue(
                      "profilePicture",
                      e.target.files[0].name
                    );
                  }}
                />
                <Button
                  size="large"
                  sx={{
                    width: "100%",
                    color: "#808080",
                    backgroundColor: "#F2F2F2",
                    "&:hover": {
                      backgroundColor: "#F2F2F2",
                      textTransform: "none",
                      borderRadius: 0,
                      boxShadow: "none",
                    },
                    textTransform: "none",
                    borderRadius: 0,
                    boxShadow: "none",
                  }}
                  variant="contained"
                  component="span"
                >
                  Upload
                </Button>
              </label>
            </Stack>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2, borderBottomWidth: "medium" }} />
        <ButtonsSection>
          <CustomButton type="submit" fullWidth variant="contained">
            {params.id ? "Edit User" : "Add User"}
          </CustomButton>

          <CustomButton
            fullWidth
            variant="contained"
            component="label"
            onClick={() => navigate("/")}
          >
            cancel
          </CustomButton>
        </ButtonsSection>
      </form>
    </>
  );
};

export default SignupForm;

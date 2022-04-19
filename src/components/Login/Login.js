import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import InputIcon from "../UI/InputIcon/InputIcon";
import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";

function Login() {
  const [workspace, setWorkspace] = useState(10);
  const [language, setLanguage] = useState(10);
  function workspaceHandler(e) {
    e.preventDefault();
    setWorkspace(e.target.value);
  }

  function languageHandler(e) {
    e.preventDefault();
    setLanguage(e.target.value);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className="login__container" maxWidth={false}>
        <Box className="login__box">
          <div className="login__title">
            <span className="login__title-wrapper">Monitoring</span>
          </div>
          <form className="login__form">
            <InputIcon label="Username" icon={<PersonIcon />} />
            <InputIcon label="Password" icon={<KeyIcon />} />
            <FormControl className="login__select">
              <InputLabel>Workspace</InputLabel>
              <Select
                label="Workspace"
                value={workspace}
                onChange={workspaceHandler}
              >
                <MenuItem value={10}>Global</MenuItem>
              </Select>
            </FormControl>
            <FormControl className="login__select">
              <InputLabel>Language</InputLabel>
              <Select
                label="Language"
                value={language}
                onChange={languageHandler}
              >
                <MenuItem value={10}>English</MenuItem>
              </Select>
            </FormControl>
            <Button variant="outlined">Login</Button>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Login;

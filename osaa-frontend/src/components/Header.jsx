import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
export default () => (
  <>
  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Activity Allocator
      </Typography>
    </Toolbar>
  </AppBar>
  <nav>
      <NavLink key="userpools" to="user-pool">User Pools</NavLink>
      <NavLink key="choicesets" to="choice-set">Choice Sets</NavLink>
  </nav>
</>
)
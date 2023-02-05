import { Box, Typography } from "@mui/material";
import MakeUserPool from "./MakeUserPool";
import UserPool from "./UserPool";

export default (props)=> (
  <div align="center">
  <Typography align="center">Home {props.location}</Typography>
  {/*<UserPool poolId="poolId1" />*/}
  {props.children}
  </div>
)
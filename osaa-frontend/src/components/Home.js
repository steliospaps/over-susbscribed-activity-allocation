import { Box, Typography } from "@mui/material";
import MakeUserPool from "./MakeUserPool";
import UserPool from "./UserPool";

export default ()=> (
  <div align="center">
  <Typography align="center">Home</Typography>
  <UserPool poolId="poolId1" />
  </div>
)
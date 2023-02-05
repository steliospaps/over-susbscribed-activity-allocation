import { Box, InputAdornment } from "@mui/material";
import TextField from '@mui/material/TextField';

export default ()=>(
    <Box
      component="form"
      sx={{
        
        maxWidth: '100%',
      }}
    >
      <div>
        <TextField
          fullWidth
          label="Name of User Pool"
          required
          id="name"
        />
        

      </div>
    </Box>
  
)
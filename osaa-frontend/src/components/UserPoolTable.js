import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default (props) => (
  
  <TableContainer component={Paper}>
    <Table>
          <TableHead>
            <TableRow>
              <TableCell>External Id</TableCell>
              <TableCell>Credentials</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            //TODO: limit or paginate
            //TODO: export to clipboard?
            //https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
            Object.values(props.users).map((item,index)=>(
              <TableRow key={index}>
                <TableCell>{item.extId}</TableCell>
                <TableCell><a href={encodeURI(window.location.origin+'/login/'+item.credential)}>login as {item.extId}</a> </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
  
)
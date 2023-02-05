import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";



export default (props) => (
  
  <TableContainer >
    <Table>
          <TableHead>
            <TableRow key={'header'}>
              <TableCell>Id</TableCell>
              <TableCell>Choice</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            //TODO: limit or paginate
            //TODO: export to clipboard?
            //https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
            Object.entries(props.choices)
            .map(([index,item])=> {
              const res = {index:index, ...item}
              //console.log("returning ",res)
              return res
            })
            .sort(
              (a,b)=>{
                const aa = a.name.toLowerCase()
                const bb = b.name.toLowerCase()
                if(aa>bb) {return 1}
                if(aa<bb) {return -1}
                return 0
              }
            )
            .map((item,index)=>(
              <TableRow key={index}>
                <TableCell>{item.index}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </TableContainer>
  
)
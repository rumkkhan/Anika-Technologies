import {React, useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { API } from '../../Api-directory/Rest_API';

const RepositoryList = () => {
    const [repositories,setRepositories] = useState([]);
    useEffect(() => {
        GetListOfRepositoriesResponse();
    },[])

  const GetListOfRepositoriesResponse = async() => {
    await API.getAllRepositories().then(res => {
        if(res?.status === 200){
            setRepositories(res?.data);
        }
    })
  }  
    return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Repositories table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Stars</TableCell>
            <TableCell align="right">Forks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories?.length > 0 ? repositories.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.watchers}</TableCell>
              <TableCell align="right">{row.forks}</TableCell>

            </TableRow> 
          )): "No data"}
        </TableBody>
      </Table>
    </TableContainer>
    </>)
}

export default RepositoryList;


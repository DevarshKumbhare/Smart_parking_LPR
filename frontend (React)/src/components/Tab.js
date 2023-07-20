import { Box, Button, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
//import 'bootstrap'
//import { getData } from '../services/gettable';
import { myAxios } from '../services/helper';
import './tab.css'

const Tab = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // useEffect(() => {
  //   myAxios.get("/api/v1/student").then((response) => {
  //     setData(response.data);
  //     setLoading(false);
  //     setError(false);
  //   });
  // }, []);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Error occured</div>;
  // }
  const filterData = (data) => {
    return data.filter((item) => item.status === false);
  };

  const handleClick = () => {
    myAxios.get("/api/v1/student").then((response) => {
      setData(response.data);
      filterData(response.data);
      setLoading(false);
      setError(false);
    });
  }

  return (
    <div>
      <TableHead className='table'>
        <tr sx={{m: 5}}>
          <th>Serial Number</th>
          <th>Slot Number</th>
          <th>License Plate</th>
        </tr>
      </TableHead>
      <TableBody className='table'>
        {data.map((item, index) => (
          <TableRow className="row" key={index}>
            <TableCell className='cell'>{item.id}</TableCell>
            <TableCell>{item.parking_spot}</TableCell>
            <TableCell>{item.license_plate}</TableCell>
          </TableRow>
        ))}
        
      </TableBody>
      <Box>
      <Button type="submit" variant='contained' onClick={handleClick}>Update Table</Button>
      </Box>
  </div>
  );
};

export default Tab;

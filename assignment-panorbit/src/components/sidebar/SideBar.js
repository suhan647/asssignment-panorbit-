import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { Stack } from '@mui/system';
import '../../App.css'
import { NavLink } from 'react-router-dom';
import {  useSelector } from 'react-redux'


function SideBar() {

  const id = useSelector((state) => state.id.idofuser)
  // console.log('id', id);

  return (
    <>
      <div className='container'>
        <div style={{width:'100%'}}>
          <Card sx={{ width:'250px',height:"550px", borderRadius:'20px', backgroundColor:'#0047AB' }}>
            <CardContent sx={{color:'#c0c0c0'}}>
              <Box className='sidebar_contents'>
                <Stack spacing={2} sx={{paddingLeft:'20px'}} variant='bold'>

                  <Typography className='contents' activeclassname='active'>
                  <NavLink to={`/profiledetails/${id}`} className='sidebar_link'>Profile</NavLink>
                  </Typography>
                  <Divider color='#D3D3D3' variant="inset"/>

                  <Typography className='contents' activeclassname='active'>
                    <NavLink to='/postdetails' className='sidebar_link'>Posts </NavLink>
                  </Typography>
                  <Divider color='#D3D3D3' variant="inset"/>

                  <Typography className='contents' activeclassname='active'>
                    <NavLink to='/gallery' className='sidebar_link'>Gallery </NavLink>
                  </Typography>
                  <Divider color='#D3D3D3' variant="inset"/>

                  <Typography className='contents' activeclassname='active'>
                    <NavLink to='/todo' className='sidebar_link'>ToDo </NavLink>
                  </Typography>
                  <Divider color='#D3D3D3' variant="inset"/>

                </Stack>
              </Box>
            </CardContent>  
          </Card>
        </div>
      </div>
    </>
  )
}

export default SideBar

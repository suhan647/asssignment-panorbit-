import React from 'react'
import {  Box, Divider, Grid } from '@mui/material'
import SideBar from '../sidebar/SideBar'
import ToggleUser from './ToggleUser'

function PostsDetails() {
  return (
    <>
    <Grid container>

      <Grid item xs={2.5} md={2.5} lg={2.5}>
      <SideBar />
      </Grid>


      <Grid className='divider_container'  item xs={4} md={4} lg={4}>
        <div style={{marginBottom:'20px'}}>
     <b className='heading' >Posts</b>
     </div>
     <Divider  />
      </Grid>

      <Grid className='divider_container2' item xs={5} md={5} lg={5}>
      <Box className='map_section'>
      <ToggleUser/>
      </Box>
      <Divider  />

      {/* <Grid item item xs={2} md={2} lg={2}> */}
      <Box sx={{display:"flex", alignItems:'center', mt:"200px", fontSize:"30px",p:'0px',ml:'0px', color:'grey'}}>
        <h1>Coming Soon</h1>
      </Box>

      {/* </Grid> */}

      </Grid> 
    </Grid>

    </>
  )
}

export default PostsDetails
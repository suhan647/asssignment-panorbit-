import {  Box, Divider, Grid } from '@mui/material'
import React from 'react'
import SideBar from '../sidebar/SideBar'
import ToggleUser from './ToggleUser'

function GalleryScreen() {
  return (
    <>
    <Grid container>

<Grid item xs={2.5} md={2.5} lg={2.5}>
<SideBar />
</Grid>


<Grid className='divider_container'  item xs={4} md={4} lg={4}>
  <div style={{marginBottom:'20px'}}>
<b className='heading' >Gallery</b>
</div>
<Divider  />
</Grid>

<Grid className='divider_container2' item xs={5} md={5} lg={5}>
<Box className='map_section'>
<ToggleUser/>
</Box>
<Divider  />

<Box sx={{display:"flex", alignItems:'center', mt:"200px", fontSize:"30px",p:'0px',ml:'0px', color:'grey'}}>
  <h1>Coming Soon</h1>
</Box>

</Grid>


</Grid>

    </>
  )
}

export default GalleryScreen
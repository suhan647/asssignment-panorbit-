import React from 'react'
import { Avatar, Box, Divider, Grid, Stack } from '@mui/material'
import SideBar from '../sidebar/SideBar'

function PostsDetails() {
  return (
    <>
    <Grid container>

      <Grid item xs={2.5} md={2.5} lg={2.5}>
      <SideBar />
      </Grid>


      <Grid className='divider_container'  item xs={4} md={4} lg={4}>
        <div style={{marginBottom:'20px'}}>
     <b className='heading' >Profile</b>
     </div>
     <Divider  />
      </Grid>

      <Grid className='divider_container2' item xs={5} md={5} lg={5}>
      <Box className='map_section'>
      <Stack direction="row" spacing={2} sx={{display:'flex', alignItems:'center', marginBottom:'20px'}} >
      <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Box>User Name</Box>
      </Stack>
      </Box>
      <Divider  />
      </Grid>

    </Grid>

    </>
  )
}

export default PostsDetails
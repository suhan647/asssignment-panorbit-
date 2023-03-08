import React from 'react'
import '../../App.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


function LandingPage() {
  return (
   <>
   <div className='background_img'>
  <div className='card_div'>
   <Card sx={{ width:'400px', borderRadius:'20px' }}>
      <CardContent>

        <Box sx={{backgroundColor:'#D3D3D3', height:"10vh", alignItems:'center', display:"flex", justifyContent:'center'}}>
        <Typography sx={{ fontSize: 18, display:'flex', justifyContent:"center"}} color="text.secondary" gutterBottom>
           Select An Account        
        </Typography>
        </Box>
        
        <Box className='users_list'>
        <Stack direction="column" spacing={2}>

      <span className='avatar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p style={{padding:'15px'}}>Lean Graham</p>
        </span>
        <Divider />

        <span className='avatar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p style={{padding:'15px'}}>Lean Graham</p>
        </span>
        <Divider />
        
        <span className='avatar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p style={{padding:'15px'}}>Lean Graham</p>
        </span>
        <Divider />

        <span className='avatar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p style={{padding:'15px'}}>Lean Graham</p>
        </span>
        <Divider />

        <span className='avatar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p style={{padding:'15px'}}>Lean Graham</p>
        </span>
        <Divider />

        <span className='avatar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p style={{padding:'15px'}}>Lean Graham</p>
        </span>
        <Divider />

        <span className='avatar'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p style={{padding:'15px'}}>Lean Graham</p>
        </span>
        <Divider />
      
    </Stack>
        </Box>

      </CardContent>
      
    </Card>
    </div>


   </div>

   </>
  )
}

export default LandingPage
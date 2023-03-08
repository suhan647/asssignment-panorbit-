import React, { useEffect, useState } from 'react'
import '../../App.css'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import {userId} from '../../redux/slices/IdSlice';


function LandingPage() {

  const [users, setUsers] = useState('')

  const dispatch = useDispatch()


  //users names and pictures
  async function UsersList(){
    try {
      let data = await axios.get('https://panorbit.in/api/users.json')
    // console.log(data.data.users);
    setUsers(data.data.users)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    UsersList()
  },[])

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

        {users ? users.map((user) => {
          // dispatch(userId(user.id))
          return (
            <>
            <NavLink className='link' to={`/profiledetails/${user.id}`}  onClick={() => dispatch(userId(user.id))} >
            <span className='avatar' key={user.id}>
             <Avatar alt="User Image" src={user.profilepicture} />
             <p style={{padding:'15px'}}>{user.name}</p>
           </span>
           </NavLink>
        <Divider />
            </>
          );
        }) :
        <h3 style={{display:"flex", justifyContent:'center'}}>Loading ....</h3>}
       
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
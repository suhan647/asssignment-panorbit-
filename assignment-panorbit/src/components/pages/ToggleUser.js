import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Box, Button, Stack } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userId } from '../../redux/slices/IdSlice';

export default function ToggleUser() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [userDetails, setUserDetails] = React.useState('')
  const [newUser, setNewUser] = React.useState('')
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const id = useSelector((state) => state.id.idofuser)
  // let lc = localStorage.getItem("userid")
  // console.log('lc', lc);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);

  };

 
  async function getUserDetails() {
    try {
      let data = await axios.get('https://panorbit.in/api/users.json')
      let result = data.data.users.find((user) => user.id === parseInt(id))
      setNewUser(data.data.users)
      console.log("result",result);
      setUserDetails([result]);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getUserDetails()

  
  },[id])


  function ToggleUser(id){
   console.log(id);
   navigate(`/profiledetails/${id}`)
   dispatch(userId(id))
   handleClose()
  }


  return (
    <div>

      {userDetails ? userDetails.map((user) => {
         return<>
         
         <Stack aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} 
        direction="row" 
        spacing={2} 
        sx={{display:'flex', alignItems:'center', marginBottom:'20px'}} >

      <Avatar sx={{ width: 24, height: 24 }} alt={user.name} src={user.profilepicture} />
      <Box>{user.name}</Box>

      </Stack>
      
      <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
<MenuItem>
        <Box sx={{width:'100%',paddingX:'50px'}}>
        
          <Avatar sx={{ display:'flex', marginLeft:'10px',width: 70, height: 70 }} alt={user.name} src={user.profilepicture} />
          <b>{user.name}</b><br/>
        <small><b style={{color:"grey", fontSize:'10px'}}>{user.email  }</b></small>
        </Box>
       
        </MenuItem>
        
       
        {newUser ? newUser.map((users) => {
          return <>
           <MenuItem >


<Box sx={{height:"30px"}} onClick={()=>{ToggleUser(users.id)}}>
<Box sx={{display:"flex", height:"30px", overflow:'scroll', alignItems:'center'}}>
<Avatar sx={{ display:'flex', marginLeft:'10px',width: 30, height: 30 }} alt={users.name} src={users.profilepicture} />
<small>{users.name}</small>
</Box>
</Box>
</MenuItem>
          </>
        }) : <p>Loading...</p>}

        <MenuItem>
        <div style={{display:'flex', justifyContent:'center'}}> 
        <Button variant='contained' sx={{backgroundColor:"red"}} onClick={()=>{navigate('/')}}>signout</Button>
        </div>
        </MenuItem>
</Menu>

      </>
      }) : <p>Loading...</p>}
    </div>
  );
}
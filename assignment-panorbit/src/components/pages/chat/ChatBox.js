import React, { useEffect, useState } from 'react';
import { Avatar, Button, Popover, TextField } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import axios from 'axios';

const ChatBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const open = Boolean(anchorEl);
  
  const handleClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedUser(null);
    setMessage('');
  };
  
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
  
  const handleSendMessage = () => {
    // Perform the action of sending the message
    console.log(`Sending message '${message}' to ${selectedUser.name}`);
    handleClose();
  };
  
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const response = await axios.get('https://panorbit.in/api/users.json');
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Button
        onClick={(event) => handleClick(event, null)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'blue',
          color: 'whitesmoke',
          padding: '10px',
        }}
      >
        <ModeCommentIcon />
        Chat
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{ position: 'absolute', bottom: '70px' }}
      >
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              onClick={(event) => handleClick(event, user)}
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '5px',
                padding: '2px',
                cursor: 'pointer',
              }}
            >
              <Avatar
                alt={user.name}
                src={user.profilepicture}
                sx={{ width: 24, height: 24 }}
              />
              <small style={{ marginLeft: '10px' }}>{user.name}</small>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}

        {selectedUser && (
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              padding:'10px'
            }}
          >
            <TextField
              label={`Message ${selectedUser.name}`}
              variant="outlined"
              multiline
              rows={3}
              value={message}
              onChange={handleInputChange}
              style={{ marginBottom: '20px' }}
            />
            <Button onClick={handleSendMessage} variant="contained">
              Send
            </Button>
          </div>
        )}
      </Popover>
    </>
  );
};

export default ChatBox;

import React, { useState } from 'react';
import { IconButton, Popover } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

const ChatBox = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        {/* <ModeCommentIcon /> */}
        ssss
      </IconButton>
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
        style={{ position: 'absolute', bottom: '70px'  }}
      >
        <div style={{padding:'40px'}}>
          Popup Content
        </div>
        <div>
          Popup Content
        </div>
        <div>
          Popup Content
        </div>
        <div>
          Popup Content
        </div>
        <div>
          Popup Content
        </div>
      </Popover>
    </>
  );
};

export default ChatBox;

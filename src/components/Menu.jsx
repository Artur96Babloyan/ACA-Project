import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import data from './data'

const ITEM_HEIGHT = 48;
export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton edge="start "
        color="inherit"
        aria-label="menu"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu style={{ marginTop: '50px' }}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {data.map((option) => (
          <MenuItem key={option.id} onClick={handleClose}>
            <a href={option.name} style={{ textDecoration: 'none', color: ' #3f51b5', fontWeight: 'bold' }} > {option.name}</a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
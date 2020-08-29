import React from 'react';
import { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Editcard from './EditCard'
import Deletecard from './DeleteCard'
import Addcard from './AddCard'
const ITEM_HEIGHT = 48;


export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isEditOpen, setIseditopen] = useState(null)
  const [isDeleteOpen, setIsdeleteopen] = useState(null)
  const [isAddOpen, setIsaddopen] = useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onChangeEditOpen = () => {
    setIseditopen(!isEditOpen)
    setAnchorEl(null);
  }
  const onChangeAddOpen = () => {
    setIsaddopen(!isAddOpen)
    setAnchorEl(null);
  }
  const onChangeDeleteOpen = () => {
    setIsdeleteopen(!isDeleteOpen)
    setAnchorEl(null);
  }
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
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

        <MenuItem onClick={onChangeAddOpen}>
          add
          </MenuItem>
        <MenuItem onClick={onChangeEditOpen}>
          edit
          </MenuItem>
        <MenuItem onClick={onChangeDeleteOpen}>
          delete
          </MenuItem>

      </Menu>
      {isEditOpen && <Editcard onClose={onChangeEditOpen} productName={props.productName} priceValue={props.priceValue} sectionName={props.sectionName} />}
      {isDeleteOpen && <Deletecard onClose={onChangeDeleteOpen} productName={props.productName} sectionName={props.sectionName} />}
      {isAddOpen && <Addcard onClose={onChangeAddOpen} sectionName={props.sectionName} />}
    </div>
  );
}
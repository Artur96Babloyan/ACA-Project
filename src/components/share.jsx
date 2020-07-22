import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export default function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton aria-label="share">
            <ShareIcon
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
      </ShareIcon>
      </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <a href='https://www.instagram.com/accounts/login/?hl=ru' style={{ textDecoration: 'none', color: 'black' }}><img style={{width:'20px',height:'20px',margin:3,marginTop:10 }}src='https://d3frsattnbx5l6.cloudfront.net/1532688803714-instagram-94fd767f257b.png' onClick={handleClose} />
                    </a>
                    <a href='https://www.instagram.com/accounts/login/?hl=ru' style={{ textDecoration: 'none', color: 'black' }}> <ListItemText primary="Instagram" onClick={handleClose} /></a>
                </StyledMenuItem>
                <StyledMenuItem>
                    <a href='https://www.facebook.com/' style={{ textDecoration: 'none', color: '#3f51b5' }}><FacebookIcon onClick={handleClose} /></a>
                    <a href='https://www.facebook.com/' style={{ textDecoration: 'none', color: 'black' }}> <ListItemText primary="Facebook" onClick={handleClose} /></a>
                </StyledMenuItem>
                <StyledMenuItem>
                    <a href='https://twitter.com/explore' style={{ textDecoration: 'none', color: '#3f51b5' }}><TwitterIcon onClick={handleClose} /></a>
                    <a href='https://twitter.com/explore' style={{ textDecoration: 'none', color: 'black' }}> <ListItemText primary="Twitter" onClick={handleClose} /></a>
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
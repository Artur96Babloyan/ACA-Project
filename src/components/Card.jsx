import React, { useState, useEffect } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red, green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from "react-router-dom";
import Menus from './share'
import TransitionsModal from './BuyModal/Modal'
import { IconCount } from './data'
import { useContext } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
  },

  media: {
    height: 0,
    paddingTop: '56.25%',
  },

  expandOpen: {
    transform: 'rotate(160deg)',
  },
  avatar: {
    backgroundColor: '#1f5aba',
  },
}));


function OurCard(props) {
  const classes = useStyles();
  let [color, setColor] = useState('')
  let [id, setId] = useState(0)
  let [showModal, setShowModal] = useState(false)

  const handleExpandClick = () => {
    setShowModal(showModal = !showModal)
    setId(id = props.value.id)
  };
  const changeColor = () => {
    setColor(color = color === '' ? red[500] : '')
    props.count.onChange(color, props.count)
  }
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <a href={props.value.name} style={{ color: 'white', textDecoration: 'none' }} >
            <Avatar aria-label="recipe" className={classes.avatar}>
              {props.value.name[0]}
            </Avatar>
          </a>
        }

        title={props.value.name}
        subheader="September 14, 2016"
      />
      <a href={props.value.name} style={{ textDecoration: 'none' }}>
        <CardMedia
          className={classes.media}
          image={props.value.img}
        />
      </a>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.value.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {props.history.location.pathname === '/' ? <a href={props.value.name}
          style={{ textDecoration: 'none' }}>
          <IconButton onClick={handleExpandClick} aria-label="add to favorites">
            More
            </IconButton>
        </a> : <>
            <IconButton onClick={handleExpandClick} aria-label="add to favorites">
              Купить
              </IconButton>
            {showModal && <div>
              <TransitionsModal dataId={id} open={showModal} />
            </div>}
            <IconButton onClick={changeColor} aria-label="add to favorites">
              <FavoriteIcon style={{ color }} />
            </IconButton>
          </>}

        <Menus />
      </CardActions>
    </Card>

  );

}
export default withRouter(OurCard)
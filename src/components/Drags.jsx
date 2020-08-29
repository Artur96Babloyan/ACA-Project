import React from 'react';
import OurCard from './Card'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IconCount } from './data'
import { useContext } from 'react';
import uuid from 'react-uuid'
import './App.css'
const useStyles = makeStyles(() => ({

    paper: {
        height: 140,
        width: 100,
    },

}));
export default function Drags(props) {
    const count = useContext(IconCount)
    const classes = useStyles();
    return (
        <div id='responsiveCards'>
            <Grid container justify="center">
                {props.ndata.map((value) => (
                    <Grid key={uuid()} >
                        <OurCard className={classes.paper} name={props.name} value={value} count={count} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
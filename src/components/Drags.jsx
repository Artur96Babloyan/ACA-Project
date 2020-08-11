import React, { useState, useEffect } from 'react';
import mercedes from './Medicines'
import OurCard from './Card'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { IconCount } from './data'
import { useContext } from 'react';
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
        <div>
            <Grid container justify="center">
                {props.ndata.map((value) => (
                    <Grid key={value} >
                        <OurCard className={classes.paper} name={props.name} value={value} count={count} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
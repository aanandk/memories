import React, { useEffect, useState } from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts'
import memories from './images/memories.png'
import useStyles from './styles';

const App = () => {
    // const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        // console.log(getPosts())
        dispatch(getPosts())
    }, [currentId, dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className='' src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
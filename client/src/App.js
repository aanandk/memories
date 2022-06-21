import React, { useEffect } from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts'
// import memories from './images/memories.png'
// import useStyles from './styles';

const App = () => {
    // const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(getPosts())
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className='' position="static" color="inherit">
                <Typography className='' variant="h2" align="center">Memories</Typography>
                {/* <img className='' src={memories} alt="memories" height="60" /> */}
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;
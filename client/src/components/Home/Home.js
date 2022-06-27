import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Grid, Grow } from "@material-ui/core";

import useStyles from '../../styles'
import Posts from '../Posts/Posts';
import Form from "../Form/Form";
import { getPosts } from "../../actions/posts";

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    // const authData = useSelector(state => state.auth.authData)
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        // console.log(getPosts())
        dispatch(getPosts())
    }, [currentId, dispatch]);

    // useEffect(() => {
    //     dispatch(ge)
    // })

    return (
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
    )
}

export default Home;
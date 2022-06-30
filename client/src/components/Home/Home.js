import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppBar, Button, Container, Grid, Grow, Paper, TextField } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import ChipInput from 'material-ui-chip-input';

import useStyles from '../../styles'
import Posts from '../Posts/Posts';
import Form from "../Form/Form";
import { getPostBySearch } from "../../actions/posts";
import Pagination from "../Pagination";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const navigate = useNavigate();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    // const authData = useSelector(state => state.auth.authData)
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const searchPost = () => {
        if (search.trim() || tags) {
            // dispatch -> fetch search post
            dispatch(getPostBySearch({ search, tags: tags.join(',') }))
            navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            navigate('/');
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
            // search post
            searchPost();
        }
    }

    const handleAddChip = (tag) => {
        console.log(tag)
        alert('handleAddChip')
        setTags([...tags, tag])
    };

    const handleDeleteChip = (tagToDelete) => setTags(tags.filter(tag => tag !== tagToDelete));

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container className={classes.gridContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} style={{ padding: '16px', marginBottom: '1rem', borderRadius: '4px' }} position="static" color="inherit">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Memories"
                                fullWidth
                                onKeyPress={handleKeyPress}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                value={tags}
                                // defaultValue={["foo", "bar"]}
                                onAdd={(chip) => handleAddChip(chip)}
                                onDelete={(chip, index) => handleDeleteChip(chip, index)}
                                onChange={handleAddChip}
                                label="Search Tags"
                                variant="outlined"
                            />
                            <Button onClick={searchPost} className={classes.searchButton} color="primary" variant="contained">Search</Button>
                        </AppBar>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {(!searchQuery && !tags.length) && (
                            <Paper elevation={6} className={classes.pagination} style={{ marginTop: '1rem', padding: '16px' }}>
                                <Pagination page={page} />
                            </Paper>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
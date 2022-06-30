import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './styles';
import { getPosts } from '../actions/posts';

const Paginate = ({ page }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { numberOfPages } = useSelector(state => state.posts);
    // console.log("useSelector(state => state.posts)", useSelector(state => state.posts), page, numberOfpages)
    useEffect(() => {
        // console.log(getPosts())
        if (page)
            dispatch(getPosts(page))
    }, [dispatch, page]);

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={Number(page) || 1}
            variant="outlined"
            color="primary"
            renderItem={item => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
            )}
        />
    );

}

export default Paginate;
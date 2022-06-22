import { useEffect, useState } from 'react';
import { Button, Paper, TextField, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData))
        }

        handleClear();
    }

    const handleClear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing ' : 'Creating'} a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} fullWidth={true} />
                <TextField name="title" variant="outlined" label="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} fullWidth={true} />
                <TextField name="message" variant="outlined" label="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} fullWidth={true} />
                <TextField name="tags" variant="outlined" label="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} fullWidth={true} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth={true}>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={handleClear} fullWidth={true}>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
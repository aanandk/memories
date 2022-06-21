import { useState } from 'react';
import { Button, Paper, TextField, Typography } from "@mui/material";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }

    const handleClear = () => {

    }

    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} fullWidth={true} />
                <TextField name="title" variant="outlined" label="Title" value={postData.titile} onChange={(e) => setPostData({ ...postData, title: e.target.value })} fullWidth={true} />
                <TextField name="message" variant="outlined" label="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} fullWidth={true} />
                <TextField name="tags" variant="outlined" label="Tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} fullWidth={true} />
                <div>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button variant='contained' color='primary' size='large' type='submit' fullWidth={true}>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={handleClear} fullWidth={true}>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
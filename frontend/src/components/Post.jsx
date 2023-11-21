import { Card, CardMedia, Typography, Box, Divider, IconButton, TextField, FormControl, Button  } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";
import { useDispatch,  useSelector } from 'react-redux'; 
import * as sessionActions from '../store/sessionSlice'; 

const Post = ({ post }) => { 
    const { id: postId, createdAt, description, likes, picturePath, Comments, User: { username: authorUsername, picturePath: authorPicturePath } } = post; 
    const formattedDate = `${createdAt.slice(5, 7)}/${createdAt.slice(8,10)}/${createdAt.slice(2, 4)}`; 
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch(); 
    const [comments, setComments] = useState(Comments); 
    const [newComment, setNewComment] = useState(''); 

    const handleNewCommentPost = async() => { 
        // dispatch redux post-new-comment thunk
        await dispatch(sessionActions.postNewComment({ userId: user.id, postId, description: newComment }))
            // unwrap promise returned from post-new-comment thunk in order to handle failed requests at component level
            .unwrap()
            // hande successful post-new-comment requests by updating local storage (triggering a re-render) and clearing textfield
            .then((res) => { 
                const { updatedPostComments } = res;
                setComments(updatedPostComments)
                setNewComment('');  
            })
            // handle errors returned from failed post-new-comment request
            .catch(async backendValidationErrors => {
                alert(backendValidationErrors) 
            });
    }; 

    const updateNewCommentTextfield = (event) => { 
        setNewComment(event.target.value); 
    };

    return (
        <Card variant="outlined"
        sx={{
            display: 'flex',
            flexDirection: {
            xs: 'column', // mobile
            sm: 'row', // tablet and up
            },
            justifyContent: 'center', 
            alignItems: 'center', 
            width: 1, 
        }}
        >
            <CardMedia
                component="img"
                src={`/${picturePath}.jpeg`}
                sx={{ 
                    width: 1/2, 
                    maxWidth: 'md',
                }}
            />
            <Box>
                <Box> 
                    <CardMedia
                        component="img"
                        src={`/${authorPicturePath}.jpeg`}
                        sx={{
                            width: 32, 
                            height: 32, 
                        }}
                    />

                    <Typography>
                        { authorUsername }
                    </Typography>
                </Box>

                <Divider />

                <Box>
                    <Box>
                        <Typography>
                            { description }
                        </Typography>

                        <Typography>
                            { formattedDate }
                        </Typography>
                    </Box>
                    <Box>
                        {comments.map((comment) => {
                            return (
                            <Box key={`comment-${comment.id}`}>
                                <a href={`/profile/${comment.userId}`}>
                                    <img
                                    src={`/${comment.User.picturePath}.jpeg`}
                                    alt='profile'
                                    width='32'
                                    />
                                </a>

                                <Typography>{comment.description}</Typography> 
                            </Box>)
                        })}
                    </Box>
                </Box>

                <Divider />
                <Box> 
                    <IconButton>
                        <FavoriteBorder />
                    </IconButton>

                    <Typography>
                        {`${likes} likes`}
                    </Typography>
                </Box>

                <FormControl>
                    <TextField value={newComment} onChange={updateNewCommentTextfield}/>
                    <Button onClick={handleNewCommentPost} disabled={!newComment.trim().length}>POST</Button>
                </FormControl>
            </Box>
        </Card>
    )
}

export default Post;

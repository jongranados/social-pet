import { Card, CardMedia, Typography, Box, Divider, IconButton, TextField, FormControl, Button  } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useState } from "react";
import { useDispatch,  useSelector } from 'react-redux'; 
import * as sessionActions from '../store/sessionSlice'; 

const Post = ({ post }) => { 
    const { id: postId, createdAt, description, picturePath, Comments, Likes: likes, User: { username: authorUsername, picturePath: authorPicturePath } } = post; 
    const formattedDate = `${createdAt.slice(5, 7)}/${createdAt.slice(8,10)}/${createdAt.slice(2, 4)}`; 
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch(); 
    const [comments, setComments] = useState(Comments); 
    const [newComment, setNewComment] = useState(''); 
    const isLiked = likes.find((like) => user.id === like.User.id); 
    
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

    const handleUpdateLikes = async() => { 
        if (isLiked) { 
            // dispatch redux delete-like thunk
            await dispatch(sessionActions.deletePostLike({ postId, likeId: isLiked.id }))
                // unwrap promise returned from delete-like thunk in order to handle failed requests at component level
                .unwrap()
                // handle errors returned from failed delete-like request
                .catch(async backendValidationErrors => {
                    alert(backendValidationErrors) 
                });
        } else { 
            // dispatch redux post-new-like thunk
            await dispatch(sessionActions.createPostLike({ postId, userId: user.id }))
                // unwrap promise returned from post-new-like thunk in order to handle failed requests at component level
                .unwrap()
                // handle errors returned from failed post-new-like request
                .catch(async backendValidationErrors => {
                    alert(backendValidationErrors) 
                });

        }
    }

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
            alignItems: 'top', 
            width: 1, 
            gap: 2
        }}
        >
            <CardMedia
                component="img"
                src={`/${picturePath}.jpeg`}
                sx={{ 
                    width: 1/2, 
                    maxWidth: 'md',
                    ratio: 1/1
                }}
            />
            <Box>
                <Box
                    sx={{
                        display: 'flex', 
                        flexDirection: 'row', 
                        mt: 2, 
                        mb: 1, 
                    }}
                > 
                    <CardMedia
                        component="img"
                        src={`/${authorPicturePath}`}
                        sx={{
                            width: 32, 
                            height: 32, 
                            borderRadius: '50%'
                        }}
                    />

                    <Typography ml={1}>
                        { authorUsername }
                    </Typography>
                </Box>

                <Divider />

                <Box>
                    <Box>
                        <Typography>
                            { description }
                        </Typography>

                        <Typography fontSize={12} color={'gray'}>
                            { formattedDate }
                        </Typography>
                    </Box>
                    <Box>
                        {comments.map((comment) => {
                            return (
                            <Box key={`comment-${comment.id}`}
                                sx={{
                                    my: 2, 
                                    display: 'flex', 
                                    flexDirection: 'row'
                                }}

                            >
                                <a href={`/profile/${comment.userId}`}>
                                    <img
                                    src={`/${comment.User.picturePath}`}
                                    alt='profile'
                                    width='32'
                                    height='32'
                                    />
                                </a>

                                <Typography ml={1}>{comment.description}</Typography> 
                            </Box>)
                        })}
                    </Box>
                </Box>

                <Divider />
                <Box> 
                    <IconButton onClick={handleUpdateLikes}>
                        {isLiked ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>

                    <Typography>
                        {`${likes.length} likes`}
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

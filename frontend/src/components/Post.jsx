import { Card, CardMedia, Typography, Box, Divider, IconButton, TextField, FormControl, Button, Link  } from "@mui/material";
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
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'start', 
                alignItems: 'top', 
                maxWidth: 'lg', 
                width: 1, 
                // border: '2px solid green',
            }}
        >
            {/* left side of card */}
            <Box
                sx={{
                    display: 'flex',
                    width: 1, 
                    aspectRatio: '1', 
                    overflow: 'hidden', 
                    // border: '5px solid cyan', 
                }}
            > 
                <CardMedia component="img" src={`/${picturePath}.jpeg`} />
            </Box>
            
            {/* right side of card */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    flexGrow: 1, 
                    width: { xs: 1, md: 1/3 },                                        
                    overflow: 'hidden', 
                    // border: '5px solid pink',
                }}
            >
                {/* container for post info and comments */}
                <Box
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        flexGrow: 1, 
                        maxHeight: 'auto', 
                        overflow: 'hidden', 
                        // border: '3px dashed magenta',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            p: 2, 
                            // border: '3px solid black', 
                        }}
                    > 
                        <CardMedia
                            component="img"
                            src={`/${authorPicturePath}`}
                            sx={{
                                width: 32, 
                                height: 32, 
                                borderRadius: '50%',
                                // border: '1px solid orange'
                            }}
                        />


                        <Box mx={2} border='2px solid green'>
                            <Link href={`/profile/${user.id}`} color='inherit' sx={{ textDecoration: 'none', fontWeight: 'bold' }}>{ authorUsername }</Link>
                        </Box>    

                    </Box>
                    
                    <Divider flexItem />

                    {/* comments section */}
                    <Box 
                        sx={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            flexGrow: 1,
                            overflowY: "auto", 
                            height: '100%', 
                            maxHeight: { xs: 250, md: 550 }, 
                            gap: { xs: 1, md: 2}, 
                            pt: 2, 
                            // border: '3px solid black',
                        }}
                    >                        
                    
                        {/* <Divider /> */}

                        <Box
                            sx={{ 
                                display: 'flex', 
                                flexDirection: 'row', 
                                px: 2,
                                // border: '3px solid orange',                     
                            }}
                        >
                            <Link href={`/profile/${user.id}`}> 
                                <CardMedia
                                    component="img"
                                    src={`/${authorPicturePath}`}
                                    sx={{
                                        width: 32, 
                                        height: 32, 
                                        borderRadius: '50%',
                                        // border: '1px solid orange'
                                    }}
                                />                  
                            </Link>

                            <Box 
                                ml={2}
                                sx={{
                                    // border: '1px solid red'
                                }}
                            >
                                <Typography >{ description }</Typography> 
                                <Typography fontSize={12} color={'gray'}>Posted: { formattedDate }</Typography>
                            </Box>
                        </Box>

                        {comments.map((comment) => {
                            return (
                                <Box key={`comment-${comment.id}`}
                                    sx={{
                                        display: 'flex', 
                                        flexDirecion: 'row', 
                                        px: 2, 
                                        // border: '3px solid orange',  
                                    }}
                                >
                                    <Link href={`/profile/${comment.userId}`}> 
                                        <CardMedia
                                            component="img"
                                            src={`/${comment.User.picturePath}`}
                                            sx={{
                                                width: 32, 
                                                height: 32, 
                                                borderRadius: '50%',
                                            }}
                                        />                  
                                    </Link>

                                    <Typography ml={2}
                                        sx={{ 
                                            // border: '3px solid red', 
                                        }}
                                    >
                                        {comment.description}
                                    </Typography> 
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
     
                {/* container for post's interactive features */}
                <Box
                    sx={{ 
                        // border: '3px dashed magenta', 
                    }}
                > 
                    <Divider />

                    <Box
                        sx={{
                            display: 'flex', 
                            flexDirection: 'row',
                            alignItems: 'center', 
                            justifyContent: 'left', 
                            gap: 1, 
                            my: 1, 
                            p: 0, 
                            // border: '3px solid green', 
                        }} 
                    >
                        <IconButton 
                            onClick={handleUpdateLikes}
                            sx={{ p: 0, ml: 1.7}}
                        >
                            {isLiked ? <Favorite sx={{ fontSize: '24px', color: 'red' }} /> : <FavoriteBorder sx={{ fontSize: '24px' }} />}
                        </IconButton>

                        <Typography>
                            {`${likes.length} likes`}
                        </Typography>
                    </Box>

                    <FormControl fullWidth 
                        sx={{
                            // border: '3px solid green'
                        }}
                    >
                        <TextField value={newComment} sx={{ px: 2}} onChange={updateNewCommentTextfield}/>
                        <Button onClick={handleNewCommentPost} disabled={!newComment.trim().length}>POST</Button>
                    </FormControl>
                </Box>
            </Box>
        </Card>
    )
}

export default Post;

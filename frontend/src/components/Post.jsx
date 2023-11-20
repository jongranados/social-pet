import { Card, CardMedia, Typography, Box, Divider, IconButton, TextField, FormControl, Button  } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useState } from "react";

const Post = ({ post }) => { 
    const { createdAt, description, likes, picturePath, Comments: comments, User: {username: authorUsername, picturePath: authorPicturePath } } = post; 
    const formattedDate = `${createdAt.slice(5, 7)}/${createdAt.slice(8,10)}/${createdAt.slice(2, 4)}`; 
    const [newComment, setNewComment] = useState(''); 

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
                    <Button>POST</Button>
                </FormControl>
            </Box>
        </Card>
    )
}

export default Post;

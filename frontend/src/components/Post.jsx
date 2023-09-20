import { Card, CardMedia, Typography, Box, Divider, IconButton, TextField, FormControl, Button  } from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const Post = ({ post }) => { 
    const { createdAt, description, likes, picturePath, Comments: comments, User: {username: authorUsername, picturePath: authorPicturePath } } = post; 
    const formattedDate = `${createdAt.slice(5, 7)}/${createdAt.slice(8,10)}/${createdAt.slice(2, 4)}`; 

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
                src={`http://localhost:3000/${picturePath}.jpeg`}
                sx={{ 
                    width: 1/2, 
                    maxWidth: 'md',
                }}
            />
            <Box>
                <Box> 
                    <CardMedia
                        component="img"
                        src={`http://localhost:3000/${authorPicturePath}.jpeg`}
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
                        {comments.map((comment) => <Typography key={`comment-${comment.id}`}>{comment.description}</Typography>)}
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
                    <TextField />
                    <Button>POST</Button>
                </FormControl>
            </Box>
        </Card>
    )
}

export default Post;

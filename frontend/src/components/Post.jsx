import { Card, CardMedia, Typography, Box, Divider, IconButton, TextField, FormControl, Button  } from "@mui/material";
import placeholder from './placeholder.png'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const Post = () => { 

    return (
        <Card variant="outlined"
        sx={{
            display: 'flex',
            flexDirection: {
            xs: 'column', // mobile
            sm: 'row', // tablet and up
            },
        }}
        >
            <CardMedia
                component="img"
                src={placeholder}
            />
            <Box>
                <Box> 
                    <CardMedia
                        component="img"
                        src={placeholder}
                    />

                    <Typography>
                        username
                    </Typography>
                </Box>

                <Divider />

                <Box>
                    <Box>
                        <Typography>
                            This is a description of a picture. This is a description of a picture. This is a description of a picture. This is a description of a picture. This is a description of a picture. This is a description of a picture. This is a description of a picture. This is a description of a picture. This is a description of a picture. This is a description of a picture. This is a description of a picture. 
                        </Typography>

                        <Typography>
                            MM/DD/YY
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. 
                        </Typography>
                        <Typography>
                            This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. 
                        </Typography>
                        <Typography>
                            This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. 
                        </Typography>
                        <Typography>
                            This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. This is a comment. 
                        </Typography>
                    </Box>
                </Box>

                <Divider />
                <Box> 
                    <IconButton>
                        <FavoriteBorder />
                    </IconButton>

                    <Typography>
                        ### likes
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

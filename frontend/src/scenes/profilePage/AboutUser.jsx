import { Box, CardMedia, Divider, Typography, Stack } from "@mui/material";

const AboutUser = ({ user }) => { 
    const { picturePath, firstName, lastName, username, location, bio, species, breed, gotchaDate } = user; 
    const gotchaDateFormatted = `${gotchaDate.slice(5,7)}/${gotchaDate.slice(8,10)}/${gotchaDate.slice(0,4)}`; 

    return (
        <>
            <Box
                sx={{
                    display: 'flex', 
                    flexDirection: 'row'
                }}
            > 
                <CardMedia
                    component="img"
                    src={`/${picturePath}`}
                    sx={{
                        width: 250, 
                        height: 250, 
                    }}
                />

                <Stack>
                    <Typography>
                        { username }
                    </Typography>
                    <Typography>
                        { firstName + ' ' + lastName[0] + '.' }
                    </Typography>

                    <Typography>
                        { species + ' • ' + breed }
                    </Typography>
                    <Typography>
                        { '📍 ' + location }
                    </Typography>
                    <Typography>
                        { '🎂 ' + gotchaDateFormatted }
                    </Typography>
                    <Typography>
                        { bio }
                    </Typography>

                </Stack>
            </Box>
            
            <Divider />

            <Box>
                <Box>
                    <Typography>
                        {/* { description } */}
                    </Typography>

                    <Typography>
                        {/* { formattedDate } */}
                    </Typography>
                </Box>
                <Box>

                </Box>
            </Box>
        </>
    )
}; 

export default AboutUser; 

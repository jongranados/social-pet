import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from '@mui/material';
import { Formik } from 'formik'; 

const Form = () => { 
    const theme = useTheme(); 
    const { palette } = theme; 
    const matchesMobileDevice = useMediaQuery('(max-width:600px)'); 

    return(
        <Formik>
            {({
                handleBlur, 
                handleChange, 
            }) => (
                <form>
                    <Box
                        display='grid'
                        gap='30px'
                        gridTemplateColumns='repeat(2, minmax(0, 1fr))'
                        sx={{
                            '& > div': { gridColumn: matchesMobileDevice ? 'span 2' : undefined }
                        }}
                    >
                    <TextField
                        label='Username or email address'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='credential'
                        sx={{ gridColumn: 'span 1' }}
                    />
                    <TextField
                        label='Password'
                        type='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name='password'
                        sx={{ gridColumn: 'span 1' }}
                    />
                    </Box>

                    {/* BUTTONS */}
                    <Button
                        fullWidth
                        type='submit'
                        sx={{
                            margin: '2rem 0', 
                            padding: '1rem', 
                            backgroundColor: palette.primary.main,
                            color: palette.background.alt, 
                            '&:hover': { color: palette.primary.main }
                        }}
                    >
                        LOGIN
                    </Button>

                </form>
            )}
        </Formik>
    )
    
}; 

export default Form; 

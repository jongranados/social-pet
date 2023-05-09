import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';


import { Box, Button, useMediaQuery, Typography, useTheme } from '@mui/material';


const SignupForm = () => {
    const theme = useTheme();
    const { palette } = theme;
    const matchesMobileDevice = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate(); 

    return (
        <Formik>
            {() => (
                <form>
                    <Box
                        display='grid'
                        gap='30px'
                        gridTemplateColumns='repeat(2, minmax(0, 1fr))'
                        sx={{
                            '& > div': { gridColumn: matchesMobileDevice ? 'span 2' : undefined }
                        }}
                    >
                    </Box>

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
                        SIGNUP
                    </Button>

                    <Typography
                        onClick={() => navigate('/')}
                        sx={{
                            textDecoration: 'underline',
                            color: palette.primary.main,
                            '&:hover': {
                                cursor: 'pointer',
                                color: palette.primary.light
                            },
                        }}
                    >
                        Already have an account? Login here!
                    </Typography>
                </form>
            )}
        </Formik>
    )

};

export default SignupForm; 

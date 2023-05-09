import { Formik } from 'formik';


import { Box, Button, useMediaQuery, useTheme } from '@mui/material';


const SignupForm = () => {
    const theme = useTheme();
    const { palette } = theme;
    const matchesMobileDevice = useMediaQuery('(max-width:600px)');

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

                </form>
            )}
        </Formik>
    )

};

export default SignupForm; 

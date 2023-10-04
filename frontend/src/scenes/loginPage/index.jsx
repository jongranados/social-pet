import { Box, Typography, useTheme, useMediaQuery, Alert, AlertTitle } from '@mui/material'; 
import Form from './LoginForm'; 
import FormBanner from 'components/FormBanner';

const LoginPage = () => {
    const theme = useTheme(); 
    const matchesMobileDevice = useMediaQuery('(max-width: 1000px)'); 
    
    return (
        <Box>
            <FormBanner />
            <Box
                width={matchesMobileDevice ? '93%' : '50%'}
                padding='2rem'
                margin='2rem auto'
                borderRadius='1.5rem'
                backgroundColor={theme.palette.background.alt}
            >
                <Typography
                    fontWeight='500'
                    variant='h4'
                    sx={{ marginBottom: '1.5rem' }}
                >
                    Pets: unite! Humans: out of sight! 
                </Typography>
                <Form /> 
            </Box>
            <Box> 
                <Alert severity='info' sx={{ width: matchesMobileDevice ? '93%' : '50%', mx:'auto', my: matchesMobileDevice ? 2 : 15 }}>
                    <AlertTitle sx={{ fontSize: 16}}>Welcome! Thanks for stopping by.</AlertTitle>
                    <Typography>
                        I'm currently working on the front-end so bear with me on the UI/UX. Most of the functionality should be implemented by the time you see this (🤞), though, so take it for a spin! You can create a new account or log into my dog's for a more representative experience:
                    </Typography>
                    <Typography sx={{ my: 1 }}>
                        <Box component='span' sx={{ fontWeight: 'bold'}}>• username: </Box> peonythepony
                    </Typography>
                    <Typography sx={{ my: 1 }}>
                        <Box component='span' sx={{ fontWeight: 'bold'}}>• password: </Box> password2
                    </Typography>
                </Alert>
            </Box>
        </Box>
    )
};

export default LoginPage; 

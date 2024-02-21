import { Box, Typography, useTheme, useMediaQuery, Alert, AlertTitle } from '@mui/material'; 
import Form from './LoginForm'; 
import FormBanner from 'components/FormBanner';

const LoginPage = () => {
    const theme = useTheme(); 
    const matchesMobileDevice = useMediaQuery('(max-width: 1000px)'); 
    
    return (
        <Box 
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                height: 1,
                
            }}
        
        >
            <FormBanner />
            <Box
                width={matchesMobileDevice ? '93%' : '50%'}
                padding='2rem'
                margin='2rem auto'
                borderRadius='1.5rem'
                backgroundColor='white'
                border='1px solid lightGray'    
            >
                <Typography
                    fontWeight='500'
                    variant='h4'
                    sx={{ marginBottom: '1.5rem' }}
                    color={theme.palette.primary.main}
                >
                    Pets: unite! Humans: out of sight! 
                </Typography>
                <Form /> 
            </Box>
            <Box
                sx={{
                    position: 'fixed', 
                    bottom: 0, 
                    py: 2,
                    width: 1,
                }}
            > 
                <Alert severity='info' sx={{ width: matchesMobileDevice ? '93%' : '50%', mx:'auto', my: matchesMobileDevice ? 0 : 15 }}>
                    <AlertTitle sx={{ fontSize: 16}}>Hey! 👋 Thanks for stopping by.</AlertTitle>
                    <Typography>
                        You can test things out by creating a new account or logging into my dog's: 
                    </Typography>
                    <Typography sx={{ my: 1 }}>
                        <Box component='span' sx={{ fontWeight: 'bold'}}>• username: </Box> havanalacubana
                    </Typography>
                    <Typography sx={{ my: 1 }}>
                        <Box component='span' sx={{ fontWeight: 'bold'}}>• password: </Box> password
                    </Typography>
                </Alert>
            </Box>
        </Box>
    )
};

export default LoginPage; 

import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'; 
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
        </Box>
    )
};

export default LoginPage; 

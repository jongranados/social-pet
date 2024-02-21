import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'; 
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
                margin='10rem auto'
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
        </Box>
    )
};

export default LoginPage; 

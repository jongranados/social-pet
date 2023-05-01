import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'; 
import Form from './Form'; 

const LoginPage = () => {
    const theme = useTheme(); 
    const matchesMobileDevice = useMediaQuery('(max-width: 1000px)'); 
    
    return (
        <Box>
            <Box
                width='100%'
                backgroundColor={theme.palette.background.alt}
                padding='1rem 6%'
                textAlign='center'
            >
                <Typography
                    fontWeight='bold'
                    fontSize='32px'
                    color='primary'
                >
                     Social Pets
                </Typography>
                <Typography
                    fontSize='18px'
                >
                    🐱🐶🐰🐭🐹🦊🐻🐻‍❄️🐼🐨🐷🐮🐸🐯🦁
                </Typography>
            </Box>

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

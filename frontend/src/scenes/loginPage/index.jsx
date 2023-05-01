import { Box, Typography } from '@mui/material'; 
import Form from './Form'; 

const LoginPage = () => {    
    return (
        <Box>
            <Box>
                <Typography>
                     Social Pets
                </Typography>
                <Typography>
                    🐱🐶🐰🐭🐹🦊🐻🐻‍❄️🐼🐨🐷🐮🐸🐯🦁
                </Typography>
            </Box>

            <Box>
                <Typography>
                    Pets: unite! Humans: out of sight! 
                </Typography>
                <Form /> 
            </Box>
        </Box>

    )
};

export default LoginPage; 

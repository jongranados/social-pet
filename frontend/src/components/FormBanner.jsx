import { Box, Typography, useTheme } from '@mui/material';

const FormBanner = () => {
    const theme = useTheme();

    return (
        <Box
            width='100%'
            backgroundColor={theme.palette.primary.main}
            padding='1rem 6%'
            textAlign='center'
        >
            <Typography
                fontWeight='bold'
                fontSize='32px'
                color='white'
            >
                Social Pets
            </Typography>
            <Typography
                fontSize='18px'
            >
                🐱🐶🐰🐭🐹🦊🐻🐻‍❄️🐼🐨🐷🐮🐸🐯🦁
            </Typography>
        </Box>
    )
};

export default FormBanner; 

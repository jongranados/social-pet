import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Form from './SignupForm';
import FormBanner from 'components/FormBanner';

const SignupPage = () => {
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

export default SignupPage; 

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from '@mui/material';

import { Formik } from 'formik'; 
import { initialLoginValues, loginValidationSchema } from 'validations';
import * as sessionActions from 'store/sessionSlice';

const LoginForm = () => { 
    const theme = useTheme(); 
    const { palette } = theme; 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const matchesMobileDevice = useMediaQuery('(max-width:600px)'); 

    // submission handler passed to form via Formik's provided handleSubmit prop
    const handleFormSubmit = async(values, onSubmitProps) => { 
        // destructure submitted form values; Formik provides submission handler with submitted values via 'values' object
        const { credential, password } = values; 

        // dispatch redux login thunk upon form submission
        await dispatch(sessionActions.login({ credential, password }))
            // unwrap promise returned from login thunk in order to handle failed login request attempt at component level
            .unwrap()
            // hande successful login request by navigating home
            .then(() => { 
                navigate('/');  
            })
            // handle errors returned from failed login request attempt
            .catch(async backendValidationErrors => {
                alert(backendValidationErrors)
                onSubmitProps.resetForm(); 
            });
    };

    return(
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={ initialLoginValues } 
            validationSchema={ loginValidationSchema }        
        >
            {({
                values,
                errors,
                touched, 
                handleBlur, 
                handleChange, 
                handleSubmit, 
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display='grid'
                        gap='30px'
                        gridTemplateColumns='repeat(2, minmax(0, 1fr))'
                        sx={{
                            '& > div': { gridColumn: matchesMobileDevice ? 'span 2' : undefined }
                        }}
                    >
                    <TextField
                        label='Username or email address'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.credential}
                        name='credential'
                        error={Boolean(touched.credential) && Boolean(errors.credential)}
                        helperText={touched.credential && errors.credential}
                        sx={{ gridColumn: 'span 1' }}
                    />
                    <TextField
                        label='Password'
                        type='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name='password'
                        error={Boolean(touched.password) && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn: 'span 1' }}
                    />
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
                        LOGIN
                    </Button>
                    <Typography
                        onClick={() => navigate('/signup')}
                        sx={{
                            textDecoration: 'underline',
                            color: palette.primary.main,
                            '&:hover': { 
                                cursor: 'pointer', 
                                color: palette.primary.light
                            },
                        }}
                    >
                        Don't have an account? Sign up here! 
                    </Typography>
                </form>
            )}
        </Formik>
    )
}; 

export default LoginForm; 

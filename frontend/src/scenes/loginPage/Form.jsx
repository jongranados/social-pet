import { useDispatch } from 'react-redux';

import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material';

import { Formik } from 'formik'; 
import { initialLoginValues, loginValidationSchema } from 'validations';
import * as sessionActions from 'store/sessionSlice';

const Form = () => { 
    const theme = useTheme(); 
    const { palette } = theme; 
    const dispatch = useDispatch(); 
    const matchesMobileDevice = useMediaQuery('(max-width:600px)'); 

    const handleFormSubmit = async(values, onSubmitProps) => { 
        const { credential, password } = values; 

        await dispatch(sessionActions.login({ credential, password }))
            .unwrap()
            .catch(async backendValidationErrors => alert(backendValidationErrors));

        onSubmitProps.resetForm(); 
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
                setFieldValue, 
                resetForm, 
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

                    {/* BUTTONS */}
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

                </form>
            )}
        </Formik>
    )
    
}; 

export default Form; 

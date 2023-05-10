import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Box, Button, useMediaQuery, Typography, useTheme, TextField } from '@mui/material';

import { Formik } from 'formik';
import { initialSignupValues, signupValidationSchema } from 'validations';

import * as sessionActions from '../../store/sessionSlice'


const SignupForm = () => {
    const theme = useTheme();
    const { palette } = theme;
    const matchesMobileDevice = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 

    // submission handler passed to form via Formik's provided handleSubmit prop
    const handleFormSubmit = async (values, onSubmitProps) => {
        console.log('in here')
        console.log(values); 
        // destructure submitted form values; Formik provides submission handler with submitted values via 'values' object
        const { 
            firstName,
            lastName,
            username,
            email,
            password,
            // picturePath,
            gotchaDate,
            species,
            breed,
            location,
            bio,    
         } = values;

        // dispatch redux signup thunk upon form submission
        const signupSuccessful = await dispatch(sessionActions.signup({ 
            firstName,
            lastName,
            username,
            email,
            password,
            picturePath: 'test',
            gotchaDate,
            species,
            breed,
            location,
            bio,    
         }))
            // unwrap promise returned from signup thunk in order to handle failed signup request attempt at component level
            .unwrap()
            // handle errors returned from failed signup request attempt
            .catch(async backendValidationErrors => alert(backendValidationErrors));

        // redirect home upon successful signup request attempt or reset form upon failed attempt
        if (signupSuccessful) {
            navigate('/home');
        } else { 
            // onSubmitProps.resetForm();
        }
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialSignupValues}
            validationSchema={signupValidationSchema} 
        >
            {({ 
                values,
                errors,
                touched, 
                handleBlur, 
                handleChange, 
                handleSubmit
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
                        label='First Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.firstName}
                        name='firstName'
                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Last Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name='lastName'
                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Username'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username}
                        name='username'
                        error={Boolean(touched.username) && Boolean(errors.username)}
                        helperText={touched.username && errors.username}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Email'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name='email'
                        error={Boolean(touched.email) && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Gotcha Date: YYYY-MM-DD'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.gotchaDate}
                        name='gotchaDate'
                        error={Boolean(touched.gotchaDate) && Boolean(errors.gotchaDate)}
                        helperText={touched.gotchaDate && errors.gotchaDate}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Species'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.species}
                        name='species'
                        error={Boolean(touched.species) && Boolean(errors.species)}
                        helperText={touched.species && errors.species}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Breed'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.breed}
                        name='breed'
                        error={Boolean(touched.breed) && Boolean(errors.breed)}
                        helperText={touched.breed && errors.breed}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Location'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.location}
                        name='location'
                        error={Boolean(touched.location) && Boolean(errors.location)}
                        helperText={touched.location && errors.location}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Profile Bio'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.bio}
                        name='bio'
                        error={Boolean(touched.bio) && Boolean(errors.bio)}
                        helperText={touched.bio && errors.bio}
                        sx={{ gridColumn: 'span 2' }}
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

                    <TextField
                        label='Re-enter Password'
                        type='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        name='confirmPassword'
                        error={Boolean(touched.confirmPassword) && Boolean(errors.confirmPassword)}
                        helperText={touched.confirmPassword && errors.confirmPassword}
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
                        SIGNUP
                    </Button>

                    <Typography
                        onClick={() => navigate('/')}
                        sx={{
                            textDecoration: 'underline',
                            color: palette.primary.main,
                            '&:hover': {
                                cursor: 'pointer',
                                color: palette.primary.light
                            },
                        }}
                    >
                        Already have an account? Login here!
                    </Typography>
                </form>
            )}
        </Formik>
    )

};

export default SignupForm; 

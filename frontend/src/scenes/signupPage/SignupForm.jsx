import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';


import { Box, Button, useMediaQuery, Typography, useTheme, TextField } from '@mui/material';
import { initialSignupValues } from 'validations';


const SignupForm = () => {
    const theme = useTheme();
    const { palette } = theme;
    const matchesMobileDevice = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate(); 

    return (
        <Formik
            initialValues={initialSignupValues} 
        >
            {({ 
                values,
                touched, 
                handleBlur, 
                handleChange, 
            }) => (
                <form>
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
                        helperText={touched.firstName}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Last Name'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.lastName}
                        name='lastName'
                        helperText={touched.lastName}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Username'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.username}
                        name='username'
                        helperText={touched.username}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Email'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name='email'
                        helperText={touched.email}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Gotcha Date: YYYY-MM-DD'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.gotchaDate}
                        name='gotchaDate'
                        helperText={touched.gotchaDate}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Species'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.species}
                        name='species'
                        helperText={touched.species}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Breed'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.breed}
                        name='breed'
                        helperText={touched.breed}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Location'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.location}
                        name='location'
                        helperText={touched.location}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Profile Bio'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.bio}
                        name='bio'
                        helperText={touched.bio}
                        sx={{ gridColumn: 'span 2' }}
                    />

                    <TextField
                        label='Password'
                        type='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name='password'
                        helperText={touched.password}
                        sx={{ gridColumn: 'span 1' }}
                    />

                    <TextField
                        label='Re-enter Password'
                        type='password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.confirmPassword}
                        name='confirmPassword'
                        helperText={touched.confirmPassword}
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

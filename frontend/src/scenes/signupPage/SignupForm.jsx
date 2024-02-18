import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Box, Button, useMediaQuery, Typography, useTheme, TextField, FormHelperText, Input } from '@mui/material';

import { Formik } from 'formik';
import { initialSignupValues, signupValidationSchema } from 'validations';

import * as sessionActions from '../../store/sessionSlice'

import Dropzone from 'react-dropzone';

import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const SignupForm = () => {
    const theme = useTheme();
    const { palette } = theme;
    const matchesMobileDevice = useMediaQuery('(max-width:600px)');
    const navigate = useNavigate(); 
    const dispatch = useDispatch(); 
    const [ profileImagePreview, setProfileImagePreview ] = useState(); 

    const handleFormSubmit = async (values) => {
        // package textual and binary user data as multipart FormData object
        const multipartFormData = new FormData();
        for (let value in values) {
            multipartFormData.append(value, values[value]); 
        }

        // dispatch redux signup thunk upon form submission
        await dispatch(sessionActions.signup(multipartFormData))
            // unwrap promise returned from signup thunk in order to handle failed signup request attempt at component level
            .unwrap()
            // handle successful signup request by navigating home
            .then(() => { 
                navigate('/');  
            })
            // handle errors returned from failed signup request attempt
            .catch(async backendValidationErrors => {
                Toastify({
                    text: backendValidationErrors,
                    position: 'center',
                    gravity: 'top',
                    duration: 3000,
                }).showToast();
            });
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialSignupValues}
            validationSchema={signupValidationSchema} 
            validateOnMount
        >
            {({ 
                values,
                errors,
                touched, 
                handleBlur, 
                handleChange, 
                handleSubmit,
                setFieldValue,
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

                    <Box 
                        sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gridColumn: 'span 2',
                        }}
                    >
                        <Dropzone 
                            multiple={false}
                            onDragLeave={() => { 
                                touched.picture = true; 
                            }}
                            onFileDialogCancel={() => { 
                                touched.picture = true;
                            }}
                            onDrop={(acceptedFiles) => { 
                                const file = new FileReader(); 

                                file.onload = async function() { 
                                    setProfileImagePreview(file.result); 
                                }

                                file.readAsDataURL(acceptedFiles[0]); 
                                
                                setFieldValue('picture', acceptedFiles[0]); 

                                touched.picture = true;
                            }}
                        >
                            {({ getRootProps, getInputProps, isDragActive }) => (
                                <>
                                    <Box  
                                        {...getRootProps()} 
                                        sx={{
                                            color: errors.picture && touched.picture ? theme.palette.error.main : "rgba(0, 0, 0, 0.6)",
                                            border: errors.picture && touched.picture ? `1px dashed ${theme.palette.error.main}` : `1px dashed rgba(0,0,0,0.23)`,
                                            paddingLeft: '16px', 
                                            borderRadius: '5px', 
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Input  {...getInputProps()} />
                                        {isDragActive ?
                                            <p>Drop your profile picture here...</p> :
                                            <p>Drag 'n' drop your profile picture here, or click to select it</p>
                                        }
                                        {Boolean(profileImagePreview) && !Boolean(errors.picture) && (
                                            <Box>
                                                <p>
                                                    {values.picture.name}
                                                </p>
                                                <p>
                                                    <img src={profileImagePreview} alt="Upload preview" height={'200px'}/>
                                                </p>
                                            </Box>
                                        )}
                                    </Box>
                                    {Boolean(touched.picture) && Boolean(errors.picture) ? <FormHelperText error sx={{paddingLeft: '16px'}}>{errors.picture}</FormHelperText> : null}
                                </>
                            )}
                        </Dropzone>
                    </Box> 

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

import * as yup from 'yup'; 

// validation schema for the login form
export const loginValidationSchema = yup.object().shape({ 
    credential: yup
        .string()
        .required('Your username or email address is required.'),
    password: yup
        .string()
        .required('Your password is required.'),
}); 

export const initialLoginValues = { 
    credential: '',
    password: '',
}; 

// validation schema for the signup form
export const signupValidationSchema = yup.object().shape({ 
    firstName: yup
        .string()
        .required('Your first name is required.'),
    lastName: yup
        .string()
        .required('Your last name is required.'),
    username: yup
        .string()
        .min(4, 'Your username must be at least 4 characters long.')
        .required('A username is required.'),
    email: yup
        .string()
        .email('Your email must be a valid email.')
        .required('Your email is required.'),
    picture: yup
        .mixed()
        .test(
            'fileFormat', 
            'Unsupported file type. Please make sure your picture is a .jpg, .jpeg. or .png', 
            (value) => value && supportedFormats.includes(value.type)    
        )
        .required('You must select a profile picture.'),
    gotchaDate: yup
        .string()
        .required('Your gotcha date is required.'),
    species: yup
        .string()
        .required('Your species is required.'),
    breed: yup
        .string()
        .required('Your breed is required.'),
    location: yup
        .string()
        .required('Your location is required.'),
    bio: yup
        .string()
        .max(256, 'Your bio must be less than 256 characters long.')
        .required('Your profile bio is required.'),
    password: yup
        .string()
        .min(6, 'Your password must be between 6 and 20 characters long.')
        .max(20, 'Your password must be between 6 and 20 characters long.')
        .required('Your password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Your passwords must match.')
        .required('Confirm your password.'), 
}); 

export const initialSignupValues = { 
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    picture: '',
    gotchaDate: '',
    species: '',
    breed: '', 
    location: '',
    bio: '',
    password: '',
    confirmPassword: '',
}; 

const supportedFormats = [
      'image/jpg',
      'image/jpeg',
      'image/png'
]; 

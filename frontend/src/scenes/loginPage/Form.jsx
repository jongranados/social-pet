import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik'; 

const Form = () => { 

    return(
        <Formik>
            {() => (
                <form>
                    <Box>
                    <TextField/>
                    <TextField/>
                    </Box>

                    {/* BUTTONS */}
                    <Button>
                        LOGIN
                    </Button>

                </form>
            )}
        </Formik>
    )
    
}; 

export default Form; 

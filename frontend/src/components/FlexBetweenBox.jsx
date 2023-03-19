import { Box } from '@mui/material'; 
import { styled } from '@mui/system'; 

// utility container used often throughout frontend - aligns and flexes things correctly
const FlexBetweenBox = styled(Box)({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
}); 

export default FlexBetweenBox; 

import { Box } from "@mui/material";
import Navbar from "scenes/navbar";
import UserFeed from "./UserFeed"

const HomePage = () => { 
    return ( 
        <Box>
            <Navbar />
            <UserFeed />
        </Box>
    )
}; 

export default HomePage; 

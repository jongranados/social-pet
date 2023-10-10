import { ImageList, ImageListItem, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/sessionSlice';
import { useLocation } from 'react-router';
import AboutUser from './AboutUser';

const ProfilePage = () => {    
    const { pathname } = useLocation(); // leverage react router dom to capture the browser's current location, which points to the target user
    const id = pathname.split('/').pop(); // from the pathname, isolate the id of the target user 
    
    const dispatch = useDispatch(); 
    const [user, setUser] = useState(); 
    const [userPosts, setUserPosts] = useState();

    useEffect(() => { 
        const fetchUserPosts = async () => { 
            // dispatch redux thunk in charge of facilitating requests for a user's profile page
            const { user, posts } = await dispatch(sessionActions.getUserPosts({ id }))
                // unwrap promise returned from getPosts thunk in order to handle failed login request attempt at component level
                .unwrap()
                // handle errors returned from failed getPosts request attempt
                .catch(async backendValidationErrors => {
                    alert(JSON.stringify(backendValidationErrors))
                });
            
            setUser(user); 
            setUserPosts(posts); 
        }; 
        
        fetchUserPosts(); 
    }, [dispatch, id]); 

    return userPosts ? 
        (
            <Box>
                <AboutUser user={user} />

                <ImageList sx={{ width: '100%'}} cols={3} >
                    {userPosts.map((post) => (
                        <ImageListItem key={post.picturePath}>
                            <img
                                src={`/${post.picturePath}.jpeg`}
                                alt='Test'
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        ) : (
            <>Loading...</>
        )
    
}

export default ProfilePage; 

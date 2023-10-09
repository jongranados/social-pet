import { ImageList, ImageListItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as sessionActions from '../../store/sessionSlice';

const ProfilePage = () => {    
    const id = 1; 
    const dispatch = useDispatch(); 
    const [userPosts, setUserPosts] = useState();

    useEffect(() => { 
        const fetchUserPosts = async () => { 
            // dispatch redux thunk in charge of facilitating requests for a user's posts
            const { posts } = await dispatch(sessionActions.getUserPosts({ id }))
                // unwrap promise returned from getPosts thunk in order to handle failed login request attempt at component level
                .unwrap()
                // handle errors returned from failed getPosts request attempt
                .catch(async backendValidationErrors => {
                    alert(JSON.stringify(backendValidationErrors))
                });
            
            setUserPosts(posts); 
        }; 
        
        fetchUserPosts(); 
    }, [dispatch, id]); 

    return userPosts ? 
        (
            <ImageList sx={{ width: '100%'}} cols={3} >
                {userPosts.map((post) => (
                    <ImageListItem key={post.picturePath}>
                        <img
                            // srcSet={`${post.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`/${post.picturePath}.jpeg`}
                            alt='Test'
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        ) : (
            <>Loading...</>
        )
    
}

export default ProfilePage; 

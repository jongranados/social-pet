import Post from 'components/Post.jsx'
import { Box } from '@mui/material';
import { useDispatch,  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import * as sessionActions from '../../store/sessionSlice';

const UserFeed = () => { 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const user = useSelector(state => state.session.user);
    const feedPosts = useSelector(state => state.session.feedPosts); 
    useEffect(() => { 
        const fetchFeed = async () => { 
            // dispatch redux getPosts thunk upon successful login
            await dispatch(sessionActions.getFeedPosts({ id: user.id, }))
                // unwrap promise returned from getPosts thunk in order to handle failed login request attempt at component level
                .unwrap()
                // handle errors returned from failed getPosts request attempt
                .catch(async backendValidationErrors => {
                    alert(JSON.stringify(backendValidationErrors))
                });
        }; 

        if (user) { 
            fetchFeed(); 
        }
    }, [dispatch, user, navigate]); 

    return (
        <Box
            sx={{
                width: '100%',
                p: 2, 
                border: '1px solid red', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                gap: 2, 
                
            }}
        
        >
            {feedPosts.map((post) => <Post key={`post-${post.id}`} sessionUserId={user.id} post={post} /> )}
        </Box>
    )
}

export default UserFeed; 

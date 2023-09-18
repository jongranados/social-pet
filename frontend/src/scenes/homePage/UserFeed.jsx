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
    const posts = useSelector(state => state.session.posts); 
    useEffect(() => { 
        const fetchFeed = async () => { 
            // dispatch redux getPosts thunk upon successful login
            await dispatch(sessionActions.getPosts({ id: user.id, requestedPosts: 'feedPosts' }))
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
        <Box>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    )
}

export default UserFeed; 

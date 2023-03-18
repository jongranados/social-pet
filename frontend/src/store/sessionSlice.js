import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    mode: 'light',
    user: null, 
    following: [], 
    posts: [], 
    comments: [], 
    likes: [], 
};

export const sessionSlice = createSlice({ 
    name: 'session', 
    initialState: initialState, 
    reducers: { 
        setMode(state, action) { 
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }, 
        setUser(state, action) { 
            state.user = action.payload; 
        }, 
        removeUser(state, action) { 
            state.user = null; 
        }, 
        setFollowing(state, action) { 
            state.following = action.payload; 
        }, 
        setPosts(state, action) { 
            state.posts = action.payload; 
        }, 
        // // to-do
        // setPost(state, action) { 
            
        // }
    },
}); 

// export session action creators
export const { setMode, setLogin, setLogout, setFriends, setPosts, } = sessionSlice.actions;

// export session reducer
export default sessionSlice.reducer; 

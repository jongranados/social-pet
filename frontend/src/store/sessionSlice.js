import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";

const initialState = { 
    mode: 'light',
    user: null, 
    following: [], 
    posts: [], 
    comments: [], 
    likes: [], 
};

export const restoreUser = createAsyncThunk(
    'session/restore', 
    async (_, thunkAPI) => {
        const url = '/auth/session'; 
        const options = { 
            method: 'GET', 
        };

        const response = await csrfFetch(url, options); 
        const data = await response.json(); 
        console.log(data); 
        if (data.user) thunkAPI.dispatch(setUser(data.user)); 
        return data; 
    },
);

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
export const { setMode, setUser, removeUser, setFollowing, setPosts, } = sessionSlice.actions;

// export session reducer
export default sessionSlice.reducer; 

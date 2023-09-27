import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { csrfFetch } from "./csrf";

const initialState = { 
    mode: 'light',
    user: undefined, 
    following: [], 
    feedPosts: [], 
};

// restore previously authenticated user 
export const restoreUser = createAsyncThunk(
    'session/restore', 
    async (_, thunkAPI) => {
        const url = '/auth/session'; 
        const options = { 
            method: 'GET', 
        };

        const response = await csrfFetch(url, options); 
        const data = await response.json(); 
        if (data.user) thunkAPI.dispatch(setUser(data.user)); 
        return data; 
    },
);

// login thunk
export const login = createAsyncThunk(
    'session/login', 
    async (user, thunkAPI) => { 
        const { credential, password } = user; 
        const url = '/auth/login'; 
        const options = { 
            method: 'POST', 
            body: JSON.stringify({
                credential, 
                password,
            }),
        };

        try { 
            const response = await csrfFetch(url, options); 
            const data = await response.json(); 
            thunkAPI.dispatch(setUser(data.user)); 
            return data; 
        } catch(errorResponse) { 
            const  errorData = await errorResponse.json(); 
            return thunkAPI.rejectWithValue(errorData.errors)
        }
    }, 
); 

// logout thunk
export const logout = createAsyncThunk(
    'session/logout', 
    async (_, thunkAPI) => { 
        const url = '/auth/logout'; 
        const options = { 
            method: 'DELETE', 
        };

        try { 
            const response = await csrfFetch(url, options); 
            const data = await response.json(); 
            thunkAPI.dispatch(removeUser()); 
            return data; 
        } catch(errorResponse) { 
            const  errorData = await errorResponse.json(); 
            return thunkAPI.rejectWithValue(errorData.errors)
        }
    }, 
)

// signup thunk
export const signup = createAsyncThunk(
    'session/signup', 
    async (user, thunkAPI) => { 
        const { 
            firstName, 
            lastName, 
            username, 
            email, 
            password,
            picturePath, 
            gotchaDate,
            species, 
            breed, 
            location, 
            bio,          
        } = user; 

        const url = '/auth/signup'; 
        const options = { 
            method: 'POST', 
            body: JSON.stringify({
                firstName, 
                lastName, 
                username, 
                email, 
                password,
                picturePath, 
                gotchaDate,
                species, 
                breed, 
                location, 
                bio, 
            }),
        };

        try { 
            const response = await csrfFetch(url, options); 
            const data = await response.json(); 
            thunkAPI.dispatch(setUser(data.user)); 
            return data; 
        } catch(errorResponse) { 
            const  errorData = await errorResponse.json(); 
            return thunkAPI.rejectWithValue(errorData.errors)
        }
    }, 
); 

// get feed posts 
export const getFeedPosts = createAsyncThunk(
	"session/getFeedPosts",
	async ({ id }, thunkAPI) => {
		const url = `/posts?sessionUserId=${id}`;
		const options = {
			method: "GET",
		};

		try {
			const response = await csrfFetch(url, options);
			const data = await response.json();
			thunkAPI.dispatch(setFeedPosts(data.posts));
			return data;
		} catch (errorResponse) {
			const errorData = await errorResponse.json();
			return thunkAPI.rejectWithValue(errorData.errors);
		}
	}
);

// TODO: thunk for getting a single user's 
export const getUserPosts = createAsyncThunk(); 

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
        setFeedPosts(state, action) { 
            state.feedPosts = action.payload; 
        }, 
        // // to-do
        // setPost(state, action) { 
            
        // }
    },
}); 

// export session action creators
export const { setMode, setUser, removeUser, setFollowing, setFeedPosts, } = sessionSlice.actions;

// export session reducer
export default sessionSlice.reducer; 

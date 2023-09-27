import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import HomePage from 'scenes/homePage'; 
import LoginPage from 'scenes/loginPage'; 
import SignupPage from 'scenes/signupPage'; 
import ProfilePage from 'scenes/profilePage'; 
import * as sessionActions from "./store/sessionSlice";

import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useEffect, useState } from 'react';
import { CssBaseline,  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {
  const mode = useSelector((state) => state.session.mode); 
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  // check to see if session user already exists
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <div className="app">
      <BrowserRouter> 
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes> 
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile/:userId' element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

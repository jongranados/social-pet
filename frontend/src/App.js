import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
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
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
		isLoaded && (
			<div className="app">
				<BrowserRouter>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Routes>
							<Route
								path="/"
								element={
									user ? (
										<HomePage />
									) : (
										<Navigate to="/login" />
									)
								}
							/>
							<Route
								path="/signup"
								element={
									user ? <Navigate to="/" /> : <SignupPage />
								}
							/>
							<Route
								path="/login"
								element={
									user ? <Navigate to="/" /> : <LoginPage />
								}
							/>
							<Route
								path="/profile/:userId"
								element={
									user ? (
										<ProfilePage />
									) : (
										<Navigate to="/login" />
									)
								}
							/>
						</Routes>
					</ThemeProvider>
				</BrowserRouter>
			</div>
		)
  );

}

export default App;

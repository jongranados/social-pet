import { useState } from "react";
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery } from '@mui/material';
import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from '@mui/icons-material'; 
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from 'store/sessionSlice'; 
import { useNavigate } from 'react-router-dom';
import FlexBetweenBox from 'components/FlexBetweenBox';

const Navbar = () => {
    const [isMobileDeviceMenuToggled, setIsMobileDeviceMenuToggled] = useState(false); 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const user = useSelector(state => state.session.user);
    const matchesMobileDevice = useMediaQuery('(max-width: 1000px)'); 
    
    const theme = useTheme(); 
    const dark = theme.palette.neutral.dark; 
    const neutralLight = theme.palette.neutral.light; 
    const primaryDark = theme.palette.primary.dark; 
    const background = theme.palette.background.default; 
    const alt = theme.palette.background.alt; 

    const fullName = user ? `${user.firstName} ${user.lastName}` : 'NULL'; 

    const handleLogoutRequest = async() => { 
        // dispatch redux lgout thunk upon logout request
        await dispatch(sessionActions.logout())
            // unwrap promise returned from logout thunk in order to handle failed login request attempt at component level
            .unwrap()
            // hande successful logout request by navigating to login page
            .then(() => { 
                navigate('/login');
            })
            // handle errors returned from failed logout request attempt
            .catch(async backendValidationErrors => alert(backendValidationErrors));
    };

    return ( 
        <FlexBetweenBox padding='1rem 6%' backgroundColor={alt}>
            {/* LEFT NAV FEATURES - FOR DESKTOP AND MOBILE */}
            <FlexBetweenBox gap='1.75rem'>
                <Typography 
                    fontWeight='bold' 
                    fontSize='clamp(1rem, 2rem, 2.25rem)' 
                    color ='primary' 
                    onClick={() => navigate('/')}
                    sx={{
                        '&:hover': { 
                            color: primaryDark, 
                            cursor: 'pointer', 
                        }
                    }}
                >
                    Social Pets 🐾
                </Typography>
                {!matchesMobileDevice && (
                    <FlexBetweenBox 
                    backgroundColor={neutralLight} 
                    borderRadius='9px' 
                    gap='3rem' 
                    padding='0.1rem 1.5rem'
                    >
                        <InputBase placeholder="Search...">
                        <IconButton>
                            <Search />
                        </IconButton>
                        </InputBase>
                    </FlexBetweenBox>
                )}
            </FlexBetweenBox>

            {/* RIGHT NAV FEATURES */}
            {matchesMobileDevice ? (
                // FOR MOBILE:
                <IconButton onClick={() => setIsMobileDeviceMenuToggled(!isMobileDeviceMenuToggled)}>
                    <Menu />
                </IconButton>
            ) : (
                // FOR DESKTOP:
                <FlexBetweenBox gap='2rem'>
                    <IconButton onClick={() => dispatch(sessionActions.setMode())}>
                        {
                            theme.palette.mode === 'dark' ? (
                                <DarkMode sx={{ fontSize: '25px' }} />
                            ) : ( 
                                <LightMode sx={{ color: dark, fontSize:'25px' }} />
                            ) 
                        }
                    </IconButton>
                    <Message sx={{ fontSize: '25px' }} />
                    <Notifications sx={{ fontSize: '25px' }} />
                    <Help sx={{ fontSize: '25px' }} />
                    <FormControl variant='standard' value={fullName}>
                        <Select
                            value={fullName}
                            sx={{ 
                                backgroundColor: neutralLight, 
                                width: '150px', 
                                borderRadius: '0.25rem', 
                                padding: '0.25rem 1rem', 
                                '& .MuiSvgIcon-root': { 
                                    paddingRight: '0.25rem', 
                                    width: '3rem'
                                }, 
                                '& .MuiSelect-select:focus': {
                                    backgroundColor: neutralLight
                                }
                            }}
                            input={<InputBase />}
                        >
                            <MenuItem value={fullName}><Typography>{fullName}</Typography></MenuItem>
                            <MenuItem onClick={handleLogoutRequest}>Log Out</MenuItem>
                        </Select>
                    </FormControl>
                </FlexBetweenBox>
            )}
    
            {/* MOBILE NAV DROPDOWN MENU */}
            {matchesMobileDevice && isMobileDeviceMenuToggled && (
                <Box
                    position='fixed'
                    right='0'
                    bottom='0'
                    height='100%'
                    zIndex='10'
                    maxWidth='500px'
                    minWidth='250px'
                    backgroundColor={background}
                >
                    {/* MOBILE CLOSE ICON  */}
                    <Box
                        display='flex'
                        justifyContent='flex-end'
                        padding='1rem'                
                    >
                        <IconButton onClick={() => setIsMobileDeviceMenuToggled(!isMobileDeviceMenuToggled)}>
                            <Close />
                        </IconButton>
                    </Box>

                    {/* MOBILE MENU ITEMS */}
                    <FlexBetweenBox 
                        display='flex' 
                        flexDirection='column' 
                        justifyContent='center' 
                        alignItems='center' 
                        gap='3rem'
                    >
                        <IconButton 
                            onClick={() => dispatch(sessionActions.setMode())} 
                            sx={{ fontSize:'25px '}}
                        >
                            {
                                theme.palette.mode === 'dark' ? (
                                    <DarkMode sx={{ fontSize: '25px' }} />
                                ) : (
                                    <LightMode sx={{ color: dark, fontSize: '25px' }} />
                                )
                            }
                        </IconButton>
                        <Message sx={{ fontSize: '25px' }} />
                        <Help sx={{ fontSize: '25px' }} />
                        <FormControl variant='standard' value={fullName}>
                            <Select
                                value={fullName}
                                sx={{
                                    backgroundColor: neutralLight,
                                    width: '150px',
                                    borderRadius: '0.25rem',
                                    padding: '0.25rem 1rem',
                                    '& .MuiSvgIcon-root': {
                                        paddingRight: '0.25rem',
                                        width: '3rem'
                                    },
                                    '& .MuiSelect-select:focus': {
                                        backgroundColor: neutralLight
                                    }, 
                                }}
                                input={<InputBase />}
                            >
                                <MenuItem value={fullName}><Typography>{fullName}</Typography></MenuItem>
                                <MenuItem onClick={handleLogoutRequest}>Log Out</MenuItem>
                            </Select>
                        </FormControl>
                    </FlexBetweenBox>
                </Box>
            )}
        </FlexBetweenBox>
    )
};

export default Navbar; 

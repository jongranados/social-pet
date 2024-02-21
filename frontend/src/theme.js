// color palette design
const colors = {
    grey: {
        0:   '#ffffff', 
        10:  '#fafafa', 
        50:  '#f7f8fa',
        100: '#eff0f2',
        200: '#e4e5e7',
        300: '#d3d4d6',
        400: '#afb0b2', 
        500: '#8f8f91',
        600: '#676869',
        700: '#545456', 
        800: '#333333', 
        900: '#191919', 
        1000:'#000000',
    },
    // deep purple
    primary: {
        50:  '#ede7f6',
        100: '#d1c4e9',
        200: '#b39ddb',
        300: '#9575cd',
        400: '#7e57c2',
        500: '#673ab7',
        600: '#5e35b1',
        700: '#512da8',
        800: '#4527a0',
        900: '#311b92',
    },
    // orange 
    secondary: { 
        50:  '#fff3e0',
        100: '#ffe0b2',
        200: '#ffcc80',
        300: '#ffb74d',
        400: '#ffa726',
        500: '#ff9800',
        600: '#fb8c00',
        700: '#f57c00',
        800: '#ef6c00',
        900: '#e65100',
    }
};

// palette values for dark mode
const darkPalette = {
    primary: {
        dark: colors.primary[200],
        main: colors.primary[300],
        light: colors.primary[800],
    },
    secondary: {
        dark: colors.secondary[200],
        main: colors.secondary[500],
        light: colors.secondary[800],
    },
    neutral: {
        dark: colors.grey[100],
        main: colors.grey[200],
        mediumMain: colors.grey[300],
        medium: colors.grey[400],
        light: colors.grey[700],
    },
    background: {
        default: colors.grey[800],
        alt: colors.grey[900],
    },
}; 

// palette values for dark mode   
const lightPalette = {
    primary: {
        dark: colors.primary[900],
        main: colors.primary[500],
        light: colors.primary[100],
    },
    secondary: {
        dark: colors.secondary[800],
        main: colors.secondary[500],
        light: colors.secondary[50],
    },
    neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        mediumMain: colors.grey[400],
        medium: colors.grey[300],
        light: colors.grey[100],
    },
    background: {
        default: colors.grey[10],
        alt: colors.grey[100],
    },
}; 

const fontFamily = `Roboto, sans-serif`;

const typography = {
    fontFamily: fontFamily,
    fontSize: 12,
    h1: {
        fontFamily: fontFamily,
        fontSize: 40,
    },
    h2: {
        fontFamily: fontFamily,
        fontSize: 32,
    },
    h3: {
        fontFamily: fontFamily,
        fontSize: 24,
    },
    h4: {
        fontFamily: fontFamily,
        fontSize: 20,
    },
    h5: {
        fontFamily: fontFamily,
        fontSize: 16,
    },
    h6: {
        fontFamily: fontFamily,
        fontSize: 14,
    },
}

// mui theme settings
export const themeSettings = (mode) => {
  return { 
    palette: {
        mode: mode, 
        ...(mode === 'dark' ? darkPalette : lightPalette)
    }, 
    typography
  };
};

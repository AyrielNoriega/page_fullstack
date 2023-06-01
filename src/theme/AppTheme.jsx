import { ThemeProvider } from "@emotion/react";
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';

import { blueTheme } from "./";

export const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={blueTheme}>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0 } }} />
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#1A2B55',
            main2: '#5cacc4',
        },
        secondary: {
            main: '#FFFFFF',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
        },
        follow: {
            primary: '#FFD700',
        }
    },
});

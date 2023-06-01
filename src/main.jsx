import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppRouter } from './router/AppRouter.jsx'
import { AppTheme } from './theme/AppTheme.jsx'
import './index.css'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppTheme>
        <CssBaseline />
            <AppRouter />
        </AppTheme>
    </React.StrictMode>,
)

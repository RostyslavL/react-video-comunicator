import React from 'react'
import {Typography, AppBar} from '@material-ui/core'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

function App() {
    return (
        <div>
            <AppBar 
                position="static" 
                color="inherit">
                    <Typography variant="h2" align="center">
                        Vide Chat App
                    </Typography>
            </AppBar>
            {/* Video Player */}
            {/* Options => Notifications */}
        </div>
    )
}

export default App

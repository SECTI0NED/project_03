import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/App"
import { CurrentPoseProvider } from "./context/CurrentPoseContext"

ReactDOM.render(
    <CurrentPoseProvider>
        <App />
    </CurrentPoseProvider>, 
document.getElementById('app'));

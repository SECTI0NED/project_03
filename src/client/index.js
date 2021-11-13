import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/App"
import { CurrentPositionProvider } from "./context/CurrentPositionContext"

ReactDOM.render(
    <CurrentPositionProvider>
        <App />
    </CurrentPositionProvider>, 
document.getElementById('app'));

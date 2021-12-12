import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./components/App";
import { DroneProvider } from './context/DroneContext';

ReactDOM.render(
    <DroneProvider>
        <App />
    </DroneProvider>, 
document.getElementById('app'));

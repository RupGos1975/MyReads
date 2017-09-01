import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'


/**
 * React Virtual DOM root that wraps the application "App", via the "BrowserRouter" component. 
 * The BrowserRouter is imported by the "react-router-dom", a re-usable package wrote by a wonderful team 
 * known as ReactTraining. Please visit https://github.com/ReactTraining for more information on the BrowserRouter and related 
 * components such as Link and Routes. 
 * 
 * 
 * This will bootstrap the application by the React sub-system, via the ReactDOM and inject the   
 */
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'))

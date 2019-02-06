import React from 'react';
import ReactDOM from 'react-dom';
// import AppRoutes from './routes.js';
// import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import App from './components/App'

// ReactDOM.render(<BrowserRouter>
//         <AppRoutes />
//     </BrowserRouter>
//     , document.getElementById('root'));

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();

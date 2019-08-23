import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App';
import ReactGa from 'react-ga'

import * as serviceWorker from './serviceWorker';
ReactGa.initialize('UA-130554628-2')

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

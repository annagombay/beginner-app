import React from 'react';
import ReactDOM from 'react-dom';
import './index.modulecss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

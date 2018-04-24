import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.sass';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

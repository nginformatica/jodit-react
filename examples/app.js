import './app.css';

import React from 'react';
import ReactDOM from 'react-dom';

import '@quirons/jodit';
import '@quirons/jodit/build/jodit.min.css';
import From from "./components/From";


ReactDOM.render(<From/>, document.getElementById('editor'));
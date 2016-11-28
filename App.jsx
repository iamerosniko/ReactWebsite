import React from 'react';
import {Projects} from './components/Projects.jsx'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
    render() {
        return (
            <div>
                <Projects />
            </div>    
        );
    }
}

export default App;
import React from 'react';
import { browserHistory } from 'react-router-dom';

function NoMatch({history}) {
    return (
        <div className="404-error">
            <h1>404 Page</h1>
            <p>Redirecting to <span onClick={() => history.push('/')}>Welcome Component</span></p>
        </div>
    )
}

export default NoMatch;
import React from 'react';

// Would like a text statement of "this path doesn't match any routes"
// A setTimeout behavior to automatically redirect to home or last visited page
// Hide navigation component
function NoMatch({history}) {
    return (
        <div className="404-error">
            <h1>404 Page</h1>
            
            <p>Redirecting to <span onClick={() => history.push('/')}>Welcome Component</span></p>
        </div>
    )
}

export default NoMatch;
import React from 'react'
const JsDoc = (props) => {
    return (
        <React.Fragment>
            <head>
                <link type="text/css" rel="stylesheet" href="styles.css" />
            </head>
            {props.children}
        </React.Fragment>
    )
}

export default JsDoc
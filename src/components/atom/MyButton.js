import React from 'react';
import Button from "@material-ui/core/Button";

const MyButton =(props) => {
    const buttonStyle = {
        marginTop: 10,
        width: 100,
        float: "left"
    }

    return (
        <Button
        {...props}
        style={buttonStyle}
        />
        
    )
}

export default MyButton
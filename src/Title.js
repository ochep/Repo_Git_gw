import React from 'react';

class Title extends React.Component {
  
    render() {
        return ( 
        
        <div className = "root">
        <h1>Hallo</h1>
        </div>
        )
    }
}

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
export default Title;
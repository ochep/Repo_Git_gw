import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {  Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changePageTitle,changeCopyRihtYear} from './actions/app';


class Mytoolbar extends React.Component {
  render() {
    const { classes,appKey } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon onClick = {()=> this.props.magicButton('hahaha')}/>
            </IconButton>
            <Link to ="/">
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {appKey.pageTittle}
            </Typography>
            </Link>
            <Button className={classes.butttons} color="inherit">
              Create Mettup
            </Button>
            <Link to ="/explorer">
            <Button color="inherit">Explore</Button>
            </Link>
            
            <Button className={classes.butttonlogin} color="inherit" onClick = {()=>this.props.magicButton2('hehe')}>
              Login
            </Button>
          </Toolbar>

        
        </AppBar>
      </div>
    );
  }
}

Mytoolbar.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  butttons: {
    marginLeft: 30
  },
  butttonlogin: {
    marginLeft: "auto"
  }
};

const mapStateToProps = (state) => {
  return {
    appKey : state.app, 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    magicButton : (judulBaru) => dispatch(changePageTitle(judulBaru)),
    magicButton2 : (judulBaru) => dispatch(changeCopyRihtYear(judulBaru)),
  }

}

Mytoolbar = connect(mapStateToProps,mapDispatchToProps)(Mytoolbar)
export default withStyles(styles)(Mytoolbar);

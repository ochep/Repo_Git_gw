import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {connect} from 'react-redux';

class Footers extends React.Component {
  render() {
  const { classes,appKey } = this.props;
  return (
    <footer className={classes.footer}>
      <Divider />
      <Typography
        className={classes.text}
        variant="subheading"
        align="center"
        color="textSecondary"
        component="p"
      >
        {appKey.footerTittle}
      </Typography>
    </footer>
  );
}
}


Footers.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  const styles = theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 6
    },
    text: {
      marginTop: 20
    }
  });

  Footers.propTypes = {
    classes: PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => {
    return {
      appKey : state.app, 
    }
  }

  
  
  Footers = connect(mapStateToProps)(Footers)
  export default withStyles(styles)(Footers);
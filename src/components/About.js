import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

class Abouts extends React.Component {
  render() {
    const { classes, aboutmeetUp } = this.props;
    return (
      <div>
        <Typography
          className={classes.myJudul}
          gutterBottom
          variant="subtitle1"
        >
          About Meetup
        </Typography>

        <Typography className={classes.myText} gutterBottom>
          {aboutmeetUp.aboutTittle}
        </Typography>
        <Typography className={classes.myText} gutterBottom>
          {aboutmeetUp.twitterMeetup}
        </Typography>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    marginLeft: 20,
    marginRight: 20
  },
  image: {
    width: 170,
    height: 170
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  myText: {
    textAlign: "left",
    marginLeft: 30,
    marginTop: 10
  },
  myJudul: {
    textAlign: "left",
    marginLeft: 10,
    marginTop: 20
  }
});

Abouts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Abouts);

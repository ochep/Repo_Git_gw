import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MyButton from "./atom/MyButton.js";

class Meetup extends React.Component {
  render() {
    const { classes, meetUp } = this.props;
    return (
      <div>
        <Typography
          className={classes.myJudul}
          gutterBottom
          variant="subtitle1"
        >
          Next Meetup
        </Typography>

        <Paper className={classes.root}>
          <Typography className={classes.myText} gutterBottom>
            {meetUp.judulMeetup}
          </Typography>
          <Typography
            className={classes.myText}
            color="textSecondary"
            gutterBottom
          >
            {meetUp.tglMeetup}
          </Typography>
          <Typography className={classes.myText} gutterBottom>
            {meetUp.subjectMeetup}
          </Typography>
        </Paper>
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
    marginLeft: 0,
    marginTop: 10
  },
  myJudul: {
    textAlign: "left",
    marginLeft: 10,
    marginTop: 20
  }
});

Meetup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Meetup);

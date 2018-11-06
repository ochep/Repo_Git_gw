import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: {}
    };
  }

  editEvent() {
    this.setState(
      {
        eventDetails: {
          judul: "iboy meetup",
          lokasi: "Pontianak",
          members: 8000000001,
          orgainzer: "ishak",
          image: "https://material-ui.com/static/images/material-ui-logo.svg"
        }
      },
      function() {
        this.props.editEvent(this.state.eventDetails);
      }
    );
  }

  render() {
    const { classes, eventDetail } = this.props;

    return (
      <Paper className={classes.root}>
        <Grid container spacing={8}>
          <Grid>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={eventDetail.image}
              />
            </ButtonBase>
          </Grid>

          <Grid className={classes.myGrid}>
            <Typography className={classes.myJudul} gutterBottom variant="h6">
              {eventDetail.judul}
            </Typography>
            <Grid container spacing={8}>
              <Grid>
                <Typography
                  className={classes.myText}
                  gutterBottom
                  variant="subtitle1"
                >
                  Location
                </Typography>
                <Typography
                  className={classes.myText}
                  gutterBottom
                  variant="subtitle1"
                >
                  Members
                </Typography>
                <Typography className={classes.myText} variant="subtitle1">
                  Oraganizer
                </Typography>
              </Grid>
              <Grid className={classes.myGrid}>
                <Typography
                  className={classes.myText}
                  gutterBottom
                  variant="subtitle1"
                >
                  {eventDetail.lokasi}
                </Typography>
                <Typography
                  className={classes.myText}
                  gutterBottom
                  variant="subtitle1"
                >
                  {this.props.eventDetail.members}
                </Typography>
                <Typography className={classes.myText} variant="subtitle1">
                  {eventDetail.orgainzer}
                </Typography>
              </Grid>
            </Grid>
            <Button
              className={classes.myButton}
              variant="contained"
              color="primary"
              onClick={this.editEvent.bind(this)}
            >
              JOIN US
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    margin: 10
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
    textAlign: "left"
  },
  myJudul: {
    float: "left",
    textAlign: "left"
  },
  myButton: {
    marginTop: 10,
    width: 100,
    float: "left"
  },
  myGrid: {
    marginLeft: 20
  }
});
Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);

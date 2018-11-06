import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import CardMedia from "@material-ui/core/CardMedia";
import Zoom from "@material-ui/core/Zoom";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import {fetchEvent} from './actions/members';

class Past extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myStyle: "myJudul",
      match: []
    };
  }
  handleClick = () => {
    this.state.myStyle === "myJudul"
      ? this.setState({
          myStyle: "myText"
        })
      : this.setState({
          myStyle: "myJudul"
        });
  };

  componentDidMount() {
    console.log('panggil data')
    this.props.loadevents()
  }
  


  render() {
    const { classes, films,events } = this.props;
    return (
      <div>
        <div className={classes.row}>
          <Typography
            className={classes[this.state.myStyle]}
            gutterBottom
            variant="subtitle1"
          >
            Past Meetups
          </Typography>
          <Typography
            className={classes.seeAll}
            gutterBottom
            variant="subtitle1"
          >
            See all
          </Typography>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {events.length <= 0 ? (
            <CircularProgress />
          ) : (
            <Grid container spacing={40}>
              {events.map((data, index) => (
                <Grid item key={data} sm={6} md={4} lg={3}>
                  <Zoom in="true" style={{ transitionDelay: true ? 500 : 0 }}>
                    <Card className={classes.data}>
                      <CardContent className={classes.cardContent}>
                        <Typography className={classes.cardText} gutterBottom>
                          {data.release_date}
                        </Typography>

                        <Divider />

                        <Typography className={classes.cardText} gutterBottom>
                          {data.title}
                        </Typography>
                        <CardMedia
                          className={classes.media}
                          image={`https://picsum.photos/20${index + 1}`}
                          title="Contemplative Reptile"
                        />
                        <Typography
                          variant="caption"
                          style={{ textAlign: "justify" }}
                        >
                          {data.opening_crawl}
                        </Typography>
                        <div className={classes.rowTextView}>
                          <Typography className={classes.myText}>
                            {data.characters.length}
                          </Typography>
                          <Typography
                            className={classes.myText}
                            color="textSecondary"
                          >
                            View
                          </Typography>
                        </div>
                      </CardContent>
                      <CardActions>
                        <Link to={`/profile/${index + 1}`}>
                          <Button
                            size="small"
                            color="primary"
                            variant="contained"
                            onClick={this.handleClick}
                          >
                            View
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
    );
  }
}

Past.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  myText: {
    textAlign: "right",
    marginRight: 10,
    marginTop: 10
  },
  media: {
    height: 140
  },
  myJudul: {
    flex: 1,
    textAlign: "left",
    marginLeft: 10,
    marginTop: 10
  },
  row: {
    display: "flex",
    marginTop: 20
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardText: {
    textAlign: "left",
    marginTop: 10
  },
  rowTextView: {
    display: "flex"
  },
  seeAll: {
    marginRight: 20
  }
});


const mapStateToProps = (state) => {
  return {
    events : state.members.myEvents, 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadevents : () => dispatch(fetchEvent()),
  }

}

Past = connect(mapStateToProps,mapDispatchToProps)(Past)

export default withStyles(styles)(Past);

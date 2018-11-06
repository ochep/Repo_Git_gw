import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from "@material-ui/core/ButtonBase";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";
import Slide from '@material-ui/core/Slide';
import {connect} from 'react-redux';
import {fetchMember} from './actions/members';

class Member extends React.Component {

  componentDidMount() {
    console.log('panggil data')
    this.props.loadmembers()
  }
  

  render() {
    const { classes, member, members } = this.props;
    return (
      <div>
        <div className={classes.row}>
          <Typography
            className={classes.myJudul}
            gutterBottom
            variant="subtitle1"
          >
            Members
          </Typography>
          <Typography
            className={classes.seeAll}
            gutterBottom
            variant="subtitle1"
          >
            See all
          </Typography>
        </div>
        <Paper className={classes.paper}>
          <Grid container spacing={8}>
            <Grid>
              <ButtonBase className={classes.image}>
                <Avatar
                  alt="Remy Sharp"
                  src={member.avatarImg}
                  className={classes.avatar}
                />
              </ButtonBase>
            </Grid>

            <Grid className={classes.myGrid}>
              <Typography
                className={classes.myOrganizer}
                gutterBottom
                variant="h6"
              >
                Oraganizer
              </Typography>

              <Grid container spacing={8}>
                <Grid>
                  <Typography className={classes.myText}>
                    {member.organizer}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography className={classes.myText}>
                    {member.other} &nbsp; Others
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {members.length <= 0 ? (
            <CircularProgress />
          ) : (
            <List>
              {members.map(data => (
                
                <Slide direction="up" in="true" mountOnEnter unmountOnExit style={{ transitionDelay:"true" ? 500 : 0 }}>
                <ListItem key={data} dense button className={classes.listItem}>
                  <Avatar src={data.avatar} />
                    
                  <ListItemText primary={data.first_name} />
                </ListItem>
                </Slide>
              ))}
            </List>
          )}
        </Paper>
      </div>
    );
  }
}

Member.propTypes = {
  classes: PropTypes.object.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    marginLeft: 20,
    marginRight: 20
  },
  row: {
    display: "flex",
    marginTop: 20
  },

  paper: {
    flexGrow: 1,
    padding: theme.spacing.unit * 4,
    marginLeft: 20,
    marginRight: 20
  },
  myText: {
    textAlign: "left",
    marginRight: 20
  },
  myJudul: {
    flex: 1,
    textAlign: "left",
    marginLeft: 10
  },
  avatar: {
    width: 50,
    height: 50
  },
  seeAll: {
    marginRight: 20
  },
  myGrid: {
    marginLeft: 40
  },
  myOrganizer: {
    textAlign: "left"
  }
});


const mapStateToProps = (state) => {
  return {
    members : state.members.userData, 
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    loadmembers : () => dispatch(fetchMember()),
  }

}

Member = connect(mapStateToProps,mapDispatchToProps)(Member)

export default withStyles(styles)(Member);

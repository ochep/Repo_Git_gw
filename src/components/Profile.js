import React from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: {}
    };
  }

  componentDidMount() {
    axios
      .get(`https://swapi.co/api/people/${this.props.match.params.topicId}`)
      .then(response => response.data)
      .then(membersData => {
        console.log(membersData);
        this.setState({
          people: membersData
        });
      });
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        {this.state.people ? (
          <h3>{this.state.people.name}</h3>
        ) : (
          <h3>loading</h3>
        )}
      </div>
    );
  }
}

export default Profile;

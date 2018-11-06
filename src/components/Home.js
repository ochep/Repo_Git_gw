import React from "react";
import Contents from "./Contents";
import Meetup from "./Meetup";
import About from "./About";
import Members from "./Members";
import Past from "./Past";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetail: {
        judul: "Hacktiv8 Meetup",
        lokasi: "Jakarta",
        members: 1201,
        orgainzer: "iboy",
        image:
          "https://hacktiv8.com/img/logo-01--md5--0f4f1c19c0064d527c72d44cfe007a08.png"
      },
      meetUp: {
        judulMeetup: "Meetup iboy",
        tglMeetup: "11 October 2018",
        subjectMeetup:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam."
      },
      aboutmeetUp: {
        aboutTittle:
          "body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.",
        twitterMeetup: "Twitter@ iboyganteng"
      },
      member: {
        avatarImg: "https://material-ui.com/static/images/uxceo-128.jpg",
        organizer: "ishak iboy",
        other: 4
      },
      people: [],
      films: []
    };
  }
  handleEditEvent(event) {
    this.setState({
      eventDetail: event
    });
  }


  render() {
    const {
      eventDetail,
      meetUp,
      aboutmeetUp,
      member,
      members,
      people,
      films
    } = this.state;
    return (
      <div>
        <Contents
          eventDetail={eventDetail}
          editEvent={this.handleEditEvent.bind(this)}
        />
        <Meetup meetUp={meetUp} />
        <About aboutmeetUp={aboutmeetUp} />
        <Members member={member} members={members} people={people} />{" "}
        <Past films={films} />
      </div>
    );
  }
}

export default Home;

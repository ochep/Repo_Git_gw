import React from "react";
import "./App.css";
import MyToolbar from "./components/Mytoolbar";
import Footers from "./components/Footers";
import axios from "axios";
import Explorer from "./components/Explorer";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import myStore from "./components/config/store";

class App extends React.Component {

  render() {
    const { match } = this.props;
    return (
      <Provider store={myStore}>
        <div className="App">
          <Router>
            <div>
              <MyToolbar />
              <Route exact path="/" component={Home} />
              <Route path="/explorer" component={Explorer} />
              <Route path={`/profile/:topicId`} component={Profile} />
            </div>
          </Router>
          <Footers />
        </div>
      </Provider>
    );
  }
}

export default App;

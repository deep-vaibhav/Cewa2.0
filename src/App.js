import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Membership from "./Components/Memebership/Memebership";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  // const [url, seturl] = useState("");
  // const handleUrl = (data) => {
  //   seturl(data);
  // };

  return (
    <Router style={{ width: "100%" }}>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/membership">
          <Membership />
        </Route>
        <Route exact path="/contacts">
          <ContactUs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

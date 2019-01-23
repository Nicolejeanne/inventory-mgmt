import React from "react";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Content from "./components/Content";


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <SideNav />
        <Content />
      </div>
    );
  }
}

export default App;

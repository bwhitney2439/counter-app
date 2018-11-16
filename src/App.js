import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import Counter from "./components/counter";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />;
        <main className="container">
          <Counter />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

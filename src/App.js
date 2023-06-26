import React from "react";
import Hello from "./Hello";
import Header from "./Header";
import Nav from "./Nav";
import Section from "./Section";
import Aside from "./Aside";
import Data from "./Data";

import "./App.css";

function App() {
  const appData = Data();

  return (
    <div className="App">
      <Header />

      <Hello name={appData.name} />

      <Nav />

      <Header />

      <main>
        <Section />

        <Aside content="Aside content..." />
      </main>
      <Hello name="Dan" />

      <footer>
        <p>Footer Placeholder</p>
      </footer>
    </div>
  );
}

export default App;

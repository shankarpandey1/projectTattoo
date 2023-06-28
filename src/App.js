import React from "react";
import Hello from "./common/Hello";
import Header from "./common/Header";
import Nav from "./Nav";
import Section from "./Section";
import Aside from "./Aside";
import Data from "./common/Data";








import "./style.css";
/* import "./Menu.css"; */


function App() {
  const email = "artinstitute79@gmail.com";
  
 const appData = Data();
   return (
    <div className="App">
    
      
      
      <Header />
      <Hello name={appData.name} />
      <Nav />
      
      <main>
        <Section />

        <Aside content="Aside content..." />
      </main>
      <Hello name="Dan" />
   
      

  

      <footer>{""}
      <a href={`mailto:${email}`}>{email}</a>
      </footer>
    </div>
  );
}

export default App;

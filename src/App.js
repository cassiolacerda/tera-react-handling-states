import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [energy, setEnergy] = React.useState(false);
  const [velocity, setVelocity] = React.useState("slow");

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          data-energy={energy}
          data-velocity={velocity}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setVelocity("slow")}>Slow</button>
        <button onClick={() => setVelocity("medium")}>Medium</button>
        <button onClick={() => setVelocity("fast")}>Fast</button>

        <button onClick={() => setEnergy(!energy)}>Power</button>
      </header>
    </div>
  );
}

export default App;

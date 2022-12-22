import "./App.css";
import { useState } from "react";
import logo from "./assets/img/navette.png";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  let buttonGo = "No way !";
  if (switch1 && switch2 && switch3) {
    buttonGo = "Go !";
  }

  return (
    <div className="App">
      <header>
        <img src={logo} alt="navette" />
        <p> Ready To Go</p>
      </header>
      <main>
        <div className="choice">
          <div>
            <div>
              <button
                onClick={() => {
                  setSwitch1(true);
                }}
                style={{
                  backgroundColor: switch1 ? "#5C48D3" : "white",
                  color: switch1 ? "white" : "#5C48D3",
                }}
              >
                ON
              </button>
              <button
                onClick={() => {
                  setSwitch1(false);
                }}
                style={{
                  backgroundColor: switch1 ? "white" : "#5C48D3",
                  color: switch1 ? "#5C48D3" : "white",
                }}
              >
                OFF
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwitch2(true);
                }}
                style={{
                  backgroundColor: switch2 ? "#5C48D3" : "white",
                  color: switch2 ? "white" : "#5C48D3",
                }}
              >
                ON
              </button>
              <button
                onClick={() => {
                  setSwitch2(false);
                }}
                style={{
                  backgroundColor: switch2 ? "white" : "#5C48D3",
                  color: switch2 ? "#5C48D3" : "white",
                }}
              >
                OFF
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  setSwitch3(true);
                }}
                style={{
                  backgroundColor: switch3 ? "#5C48D3" : "white",
                  color: switch3 ? "white" : "#5C48D3",
                }}
              >
                ON
              </button>
              <button
                onClick={() => {
                  setSwitch3(false);
                }}
                style={{
                  backgroundColor: switch3 ? "white" : "#5C48D3",
                  color: switch3 ? "#5C48D3" : "white",
                }}
              >
                OFF
              </button>
            </div>
          </div>
          <div
            className="valid"
            style={{
              backgroundColor: buttonGo === "Go !" ? "#46AC4A" : "#D34849",
            }}
          >
            {buttonGo}
          </div>
        </div>
      </main>
      <footer>
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>Olivier</span>
      </footer>
    </div>
  );
}

export default App;

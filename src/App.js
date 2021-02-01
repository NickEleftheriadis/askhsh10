import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { kathari: 0, fpa: 0, ekptwsh: 0, telikh: 0 };
  addKathari = (event) => {
    this.setState({ kathari: event.target.value });
  };
  addFpa = (event) => {
    this.setState({ fpa: event.target.value });
  };
  addEktpwsh = (event) => {
    this.setState({ ekptwsh: event.target.value });
  };

  mesosOros = (event, kathari, fpa, ekptwsh, e) => {
    let diairesh = Number(kathari) / 100;
    let fpa1 = Number(diairesh) * Number(fpa);
    let prosthesh = Number(fpa1) + Number(kathari);
    let diairesh1 = Number(prosthesh) / 100;
    let ekptwsh1 = Number(diairesh1) * Number(ekptwsh);
    let afairesh = Number(prosthesh) - Number(ekptwsh1);
    this.setState({ telikh: afairesh });
  };
  render() {
    return (
      <body className="background">
        <div className="App">
          <div>
            <h1>Άσκηση 10</h1>
          </div>
          <div>
            <input
              className="inputs"
              placeholder="Καθαρή αξία"
              onChange={this.addKathari}
              type="number"
            ></input>
          </div>
          <div>
            <input
              className="inputs"
              placeholder="Συνελεστής ΦΠΑ"
              onChange={this.addFpa}
              type="number"
            ></input>
          </div>
          <div>
            <input
              className="inputs"
              placeholder="Έκτπωση"
              onChange={this.addEktpwsh}
              type="number"
            ></input>
          </div>
          <div>
            <button
              className="koubi"
              onClick={(e) =>
                this.mesosOros(
                  e,
                  this.state.kathari,
                  this.state.fpa,
                  this.state.ekptwsh
                )
              }
            >
              {" "}
              Πατήστε για αποτέλεσμα
            </button>
          </div>
          <div>
            <p className="apotelesma">
              Η τελική τιμή είναι: {this.state.telikh} €{" "}
            </p>
          </div>
          <div>
            <p className="keno"> ‎‎</p>
          </div>
        </div>
      </body>
    );
  }
}

export default App;

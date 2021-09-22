import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    areas: []
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Ski Areas App</h1>
        </header>
        <main>
          <section>
            <h2>Areas</h2>
            <ul>
              <li>
                <div>
                  <p>name: Vail</p>
                  <p>age: 55</p>
                  <p>state: Colorado</p>
                  <p>image: image</p>
                  <p>ski: true</p>
                  <p>snowboard: true</p>
                </div>
              </li>
              <li>
                <div>
                  <p>name: Alta</p>
                  <p>age: 82</p>
                  <p>state: Utah</p>
                  <p>image: image</p>
                  <p>ski: true</p>
                  <p>snowboard: false</p>
                </div>
              </li>
              <li>
                <div>
                  <p>name: Taos</p>
                  <p>age: 66</p>
                  <p>state: New Mexico</p>
                  <p>image: image</p>
                  <p>ski: true</p>
                  <p>snowboard: false</p>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

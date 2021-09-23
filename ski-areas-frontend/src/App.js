import React, { Component } from 'react';
import './App.css';
import AreaList from './AreaList';

class App extends Component {
  
  state = {
    areas: []
  }

  componentDidMount(){
    const URL = "http://localhost:3000/areas"
    fetch(URL)
      .then(res => res.json())
      .then(areas => {
        this.setState({ areas })
      })
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
              <AreaList areas={this.state.areas} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

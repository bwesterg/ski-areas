import React, { Component } from 'react';
import './App.css';
import AreaList from './AreaList';
import AreaForm from './AreaForm';
const BASE_URL = "http://localhost:3000"
const URL = `${BASE_URL}/areas`

class App extends Component {
  
  state = {
    areas: [] 
  }

  componentDidMount(){
    fetch(URL)
      .then(res => res.json())
      .then(areas => {
        this.setState({ areas })
      })
  }

  addArea = (newArea) => {
    this.setState({
      areas: [...this.state.areas, newArea]
    })
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArea)
    })
  }

  deleteArea = (id) => {
    let filtered = this.state.areas.filter(area => area.id !== id)
    this.setState({
      areas: filtered
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Ski Areas App</h1>
            <AreaForm addArea={this.addArea}/>
          <h2>Ski Area Collection</h2>
            <AreaList areas={this.state.areas} deleteArea={this.deleteArea} />
      </div>
    );
  }
}

export default App;

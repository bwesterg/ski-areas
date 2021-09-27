import React, { Component } from 'react';
import './App.css';
import AreaList from './AreaList';
const BASE_URL = "http://localhost:3000"

class App extends Component {
  
  state = {
    areas: [],
    newArea: {
      name: "",
      state: "",
      logo: "",
      age: 1,
      ski: false,
      snowboard: false,
    }
  }

  componentDidMount(){
    const URL = `${BASE_URL}/areas`
    fetch(URL)
      .then(res => res.json())
      .then(areas => {
        this.setState({ areas })
      })
  }

  // handleNameChange = (event) => {
  //   this.setState({
  //     newArea: {
  //       ...this.state.newArea,
  //       name: event.target.value
  //     }
  //   })
  // }
  // handleNameChange = (event) => {
  //   this.setState({
  //     newArea: {
  //       ...this.state.newArea,
  //       state: event.target.value
  //     }
  //   })
  // }


  // higher order function...
  handleChange = property => event => {
    const newArea = this.state.newArea
    newArea[property] = event.target.value
    this.setState({ newArea })
  }

  addArea = (event) => {
    event.preventDefault()

    const { name, state, logo, age, ski, snowboard} = this.state.newArea
    fetch(`${BASE_URL}/areas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, state, logo, age, ski, snowboard })
    }).then(response => response.json())
    .then(area => {
      this.setState({
        areas: [...this.state.areas, area],
        newArea: {
          name: "",
          state: "",
          logo: "",
          age: 1,
          ski: false,
          snowboard: false,
        }
      })
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
          <section className="add-area">
            <h2>Add a Ski Area</h2>
            <form onSubmit={this.addArea}>
              <input 
                type="text" 
                placeholder="name" 
                value={this.state.newArea.name}
                onChange={this.handleChange("name")}
              />
              <input 
                type="text" 
                placeholder="state" 
                value={this.state.newArea.state}
                onChange={this.handleChange("state")}
              />
              <input 
                type="text" 
                placeholder="url logo" 
                value={this.state.newArea.logo}
                onChange={this.handleChange("logo")}
              />
              <input 
                type="number" 
                placeholder="years in operation" 
                value={this.state.newArea.age}
                onChange={this.handleChange("age")}
              />
              <input 
                type="checkbox" 
                name="ski"
                // value="ski" 
                value={this.state.newArea.ski}
                onChange={this.handleChange("ski")}
              />
              <input 
                type="checkbox" 
                name="snowboard"
                // value="snowboard" 
                value={this.state.newArea.snowboard}
                onChange={this.handleChange("snowboard")}
              />
              <input type="submit" value="Add Area" />
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

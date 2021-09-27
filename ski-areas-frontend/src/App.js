import React, { Component } from 'react';
import './App.css';
import AreaList from './AreaList';

class App extends Component {
  
  state = {
    areas: [],
    newArea: {
      name: "",
      state: "",
      logo: "",
      age: 1,
      ski: false,
      snowboard: false
    }
  }

  componentDidMount(){
    const URL = "http://localhost:3000/areas"
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
  handleChange = property => (event) => {
    const newArea = this.state.newArea
    newArea[property] = event.target.value
    this.setState({ newArea })
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
            <form>
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
                placeholder="logo url" 
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
                value="ski" 
                value={this.state.newArea.ski}
                onChange={this.handleChange("ski")}

              />
              <input 
                type="checkbox" 
                value="snowboard" 
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

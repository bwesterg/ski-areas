import React, { Component } from 'react';


const initialState = {
    name: "",
    state: "",
    logo: "",
    age: 1,
    ski: false,
    snowboard: false,
}

export default class AreaForm extends Component{

    state = initialState

    handleChange = (event) => {
        let { name, value, checked } = event.target

        value = (name === "ski") ? checked : value
        value = (name === "snowboard") ? checked : value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addArea(this.state)
    }

    render(){
        const { name, state, logo, age, ski, snowboard } = this.state
        return(
            <section className="add-area">
                <h2>Add a Ski Area</h2>
                <form className="area-form" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="name" 
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text" 
                    placeholder="state" 
                    name="state"
                    value={state}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="text" 
                    placeholder="url logo" 
                    name="logo"
                    value={logo}
                    onChange={this.handleChange}
                    />
                    <input 
                    type="number" 
                    placeholder="years in operation" 
                    name="age"
                    value={age}
                    onChange={this.handleChange}
                    />
                    <h3>Permitted Activities</h3>
                    <div className="input-group">
                    <label><em>Snowboarding</em></label>
                    <input 
                        type="checkbox" 
                        name="ski"
                        checked={ski}
                        value={ski}
                        onChange={this.handleChange}
                        />
                    <label><em>Skiing</em></label>
                    <input 
                        type="checkbox" 
                        name="snowboard"
                        label="snowboarding"
                        checked={snowboard}
                        value={snowboard}
                        onChange={this.handleChange}
                        />
                    </div>
                    <input type="submit" value="Add Area" />
                </form>
            </section>
        )
    }
}
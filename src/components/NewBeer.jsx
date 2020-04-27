import React, { Component } from 'react'
import Axios from 'axios'

let baseURL = 'https://ih-beers-api2.herokuapp.com'
let endPoint = '/beers/new'

export default class NewBeer extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitNewBeer = (e) => {
    e.preventDefault()
    console.log(this.state)
    Axios.post(baseURL+endPoint, this.state)
    .then(response => {
      alert(response.data.message)
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.submitNewBeer(e)}>
          <input type="text" name="name" placeholder="name" onChange={(e) => this.handleChange(e)}/> <br/>
          <input type="text" name="tagline" placeholder="tagline" onChange={(e) => this.handleChange(e)}/> <br/>
          <input type="text" name="description" placeholder="description" onChange={(e) => this.handleChange(e)}/> <br/>
          <input type="text" name="firstBrewed" placeholder="firstBrewed" onChange={(e) => this.handleChange(e)}/> <br/>
          <input type="text" name="brewerTips" placeholder="brewerTips" onChange={(e) => this.handleChange(e)}/> <br/>
          <input type="number" name="attenuationLevel" placeholder="attenuationLevel" onChange={(e) => this.handleChange(e)}/> <br/>
          <input type="text" name="contributedBy" placeholder="contributedBy" onChange={(e) => this.handleChange(e)}/> <br/>
          <input type="submit"/> <br/>
        </form>
      </div>
    )
  }
}

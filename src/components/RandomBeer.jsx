import React, { Component } from 'react'
import Axios from 'axios';
let baseURL = 'https://ih-beers-api2.herokuapp.com'
let endPoint = '/beers/random'

export default class RandomBeer extends Component {
  state = {
    randomBeer: {}
  }

  componentDidMount = () => {
    Axios.get(baseURL+endPoint)
    .then(response => {
      this.setState({
        randomBeer: response.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.randomBeer? 
        (<div>
           <img src={this.state.randomBeer.image_url} alt={this.state.randomBeer.name}/>
           <h1>{this.state.randomBeer.name}</h1>
           <p>{this.state.randomBeer.tagline}</p>
           <h4>{this.state.randomBeer.first_brewed}</h4>
           <h4>{this.state.randomBeer.attenuation_level}</h4>
           <h6>{this.state.randomBeer.description}</h6>
           <h3>{this.state.randomBeer.contributed_by}</h3>
        </div>):
        ("Loading...")}
      </div>
    )
  }
}

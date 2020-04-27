import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Axios from 'axios';

let baseURL = 'https://ih-beers-api2.herokuapp.com'
let endPoint = '/beers/search'

export default class Beers extends Component {
  state = {
    searchResults: []
  }
  showBeers = () => {
    return this.props.allBeers.map(eachBeer => {
      return (
        <li key={eachBeer._id}>
          <Link to={`/beer/${eachBeer._id}`}>
            <img style={{width: "50px"}}  src={eachBeer.image_url} alt={eachBeer.name}/>
          </Link>
          <h2>{eachBeer.name}</h2>
          <p>{eachBeer.tagline}</p>
          <h4>{eachBeer.contributed_by}</h4>
        </li>
      )
    })
  }

  handleChange = (e) => {
    Axios.get(baseURL+endPoint+`?q=${e.target.value}`)
    .then(response => {
      console.log(response.data)
      this.setState({
        searchResults: response.data
      })
    })   
    .catch(err => alert(err)) 
  }

  displaySearchResults = () => {
    return this.state.searchResults.map(eachBeer => {
      return (
        <h1 key={eachBeer._id}>{eachBeer.name}</h1>
      )
    })
  }

  render() {
    return (
      <ul>
        <label>Search</label>
        <input name="searchValue" onChange={(e) => this.handleChange(e)}/>
        {this.state.searchResults? (this.displaySearchResults()):('')}
        {this.showBeers()}
      </ul>
    )
  }
}

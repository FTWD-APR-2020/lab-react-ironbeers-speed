import React, { Component } from 'react'

export default class Beers extends Component {

  showBeers = () => {
    return this.props.beers.map(eachBeer => {
      return (
        <div key={eachBeer._id}>
          <img src={eachBeer.image_url}/>
          <h3>{eachBeer.name}</h3>
          <h6>{eachBeer.tagline}</h6>
          <p>Contributed by: {eachBeer.contributed_by}</p>
        </div>
      )
    })
  }

  render() {
    console.log(this.props.beers)
    return (
      <div>
        {this.props.dataReady?(this.showBeers()): ("Loading...")}
        {/* {this.showBeers()} */}
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class BeerDetails extends Component {
//   image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by
  render() {
    let beerID = this.props.match.params.beerID
    let beerObj = this.props.allBeers.find(eachBeer => {
      return eachBeer._id === beerID
    })

    console.log(beerObj)
    return (
      <div>
        {beerObj? 
        (<div>
           <img src={beerObj.image_url} alt={beerObj.name}/>
           <h1>{beerObj.name}</h1>
           <p>{beerObj.tagline}</p>
           <h4>{beerObj.first_brewed}</h4>
           <h4>{beerObj.attenuation_level}</h4>
           <h6>{beerObj.description}</h6>
           <h3>{beerObj.contributed_by}</h3>
        </div>):
        ("Loading...")}
        
      </div>
    )
  }
}

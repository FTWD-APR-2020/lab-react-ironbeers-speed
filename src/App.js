import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Axios from 'axios';
import Beers from './components/Beers'
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

let baseURL = 'https://ih-beers-api2.herokuapp.com'
let endPoint = '/beers'

class App extends Component {
  state = {
    allBeers: []
  }

  componentDidMount = () => {
    Axios.get(baseURL+endPoint)
    .then(response => {
      this.setState({
        allBeers: response.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/home' render={(props) => <HomePage {...props} />}/>
          <Route exact path='/beers' render={(props) => <Beers {...props} allBeers={this.state.allBeers} />}/>
          <Route exact path='/beer/:beerID' render={(props) => <BeerDetails {...props} allBeers={this.state.allBeers} />}/>
          <Route exact path='/random-beer' render={(props) => <RandomBeer {...props} />}/>
          <Route exact path='/new-beer' render={(props) => <NewBeer {...props} />}/>
        </Switch>
        
      </div>
    );
  }
}

export default App;
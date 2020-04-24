import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class HomePage extends Component {
  
  render() {
    return (
      <ul>
        <li><Link to="/beers">Beers</Link></li>
        <li><Link to="/random-beer">Random Beer</Link></li>
        <li><Link to="/new-beer">New Beer</Link></li>
      </ul>
    )
  }
}

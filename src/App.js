 import {
  Navbar, NavbarBrand
} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import React from 'react';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}


export default App;
import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Search from './Search'
import Detail from './Detail'
import HogContainer from './HogContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      clickedHog: null,
      hogs: hogs
    }
  }

  changeClickedHog = (hogObject) => {
    this.setState({clickedHog: hogObject})
  }

  render() {
    return (
      <div className="App">
        < Nav />
        < Search />
        < Detail clickedHog={this.state.clickedHog}/>
        < HogContainer hogs={this.state.hogs} changeClickedHog={this.changeClickedHog}/>

      </div>
    )
  }
}

export default App;

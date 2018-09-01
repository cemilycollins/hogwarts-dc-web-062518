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
      hogs: hogs,
      greaseFilter: "none",
      sortBy: "none"
    }
  }

  changeClickedHog = (hogObject) => {
    this.setState({clickedHog: hogObject})
  }

  changeGreaseFilter = (e) => {
    this.setState({greaseFilter: e.target.value})
  }

  changeSortBy = (e) => {
    if (e.target.value === "weight") {
      this.setState({sortBy: 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'})
    } else {
      this.setState({sortBy: e.target.value})
    }
  }

  handleGrease = () => {
    if (this.state.greaseFilter === "true") {
      let greasedHogs = hogs.filter(hog => {
        return hog.greased === true
      })
      this.setState({hogs: greasedHogs})
    } else if (this.state.greaseFilter === "false"){
      let notGreasedHogs = hogs.filter(hog => hog.greased === false)
      this.setState({hogs: notGreasedHogs})
    } else {
      this.setState({hogs})
    }
  }

  handleSort = () => {
    if (this.state.sortBy === "name") {
      let nameHogs = this.state.hogs.sort( (a, b) => {
        return a[this.state.sortBy].localeCompare(b[this.state.sortBy])})
      this.setState({hogs: nameHogs})
    } else if (this.state.sortBy !== "none") {
      let nameHogs = this.state.hogs.sort( (a, b) => {
        return a[this.state.sortBy] - b[this.state.sortBy]})
      this.setState({hogs: nameHogs})
    }
  }

  filterSortHogs = (e) => {
    e.preventDefault()
    this.handleGrease()
    this.handleSort()
  }

  render() {
    return (
      <div className="App">
        < Nav />
      < Search changeGreaseFilter={this.changeGreaseFilter} changeSortBy={this.changeSortBy} filterSortHogs={this.filterSortHogs}/>
        < Detail clickedHog={this.state.clickedHog}/>
        < HogContainer hogs={this.state.hogs} changeClickedHog={this.changeClickedHog}/>

      </div>
    )
  }
}

export default App;

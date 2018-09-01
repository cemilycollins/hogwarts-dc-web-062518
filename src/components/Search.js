import React from 'react'

class Search extends React.Component {
  render() {
    return(
      <form onSubmit={this.props.filterSortHogs}>
      <label>Sort By</label>
      <select onChange={this.props.changeSortBy}>
        <option value="none">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <label>Filter by</label>
      <select onChange={this.props.changeGreaseFilter}>
        <option value="none">None</option>
        <option value="true">Hog Greased: True</option>
        <option value="false">Hog Greased: False</option>
      </select>
      <input type="submit" value="Submit"></input>
      </form>
    )
  }
}


export default Search

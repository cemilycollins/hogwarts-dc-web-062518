import React from 'react'

class HogCard extends React.Component {

  imageFinder = (name) => {
    let newName = name.toLowerCase().split(" ").join("_")
    return require(`../hog-imgs/${newName}.jpg`)
  }

  render() {
    return(
      <div className="ui card" onClick={() => this.props.changeClickedHog(this.props.hog)}>
      <h3>{this.props.hog.name}</h3>
      <img src={this.imageFinder(this.props.hog.name)}/>
      </div>
    )
  }
}


export default HogCard

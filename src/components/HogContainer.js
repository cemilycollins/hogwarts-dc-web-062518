import React from 'react'
import HogCard from './HogCard'

class HogContainer extends React.Component {
  render() {
    return(
      <div className="ui grid container">
        {this.props.hogs.map(hog => <HogCard hog={hog} changeClickedHog={this.props.changeClickedHog}/>)}
      </div>
    )
  }
}


export default HogContainer

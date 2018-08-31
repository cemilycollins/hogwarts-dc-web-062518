import React from 'react'

class Detail extends React.Component {
  render() {
    if (this.props.clickedHog != null) {
    return(
      <div>
        <h3>{this.props.clickedHog.name}</h3>
          <p>Specialty: {this.props.clickedHog.specialty}</p>
          <p>Greased: {this.props.clickedHog.greased ? "true" : "false"}</p>
          <p>Hog weight to fridge weight ratio: {this.props.clickedHog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
          <p>Highest medal achieved: {this.props.clickedHog['highest medal achieved']}</p>
      </div>
    )
  } else {
    return null
  }
  }
}


export default Detail

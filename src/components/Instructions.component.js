import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
    this.state = { shouldDisplayImage: true }
  }

  render() {
    const shouldDisplayImage = this.state.shouldDisplayImage
    if (shouldDisplayImage) {
      return (
        <div className="instructions">
          Making some changes in the Instructions component, and it gets
          rendered to the index.html file! How cool is that!
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        </div>
      )
    }
  }
}

export default Instructions

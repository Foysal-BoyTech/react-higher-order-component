import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    render() {
      return <OriginalComponent name="Vishwas" />
    }
  }
  return NewComponent
}

export default UpdatedComponent

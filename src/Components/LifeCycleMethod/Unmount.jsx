import React, { Component, componentWillUnmount } from 'react'

export default class Unmount extends Component {
    componentWillUnmount(){
        console.log(componentWillUnmount)
        alert(" Component is removing now ")
    }
  render() {
    return (
      <div>
        Unmount
      </div>
    )
  }
}

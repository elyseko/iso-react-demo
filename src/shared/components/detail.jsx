import React from 'react'
import { Link } from "react-router"

export default class Detail extends React.Component {
  render() {
    return (
      <div>
        <h1>"Details"</h1>
        <Link to="/">Home</Link>
        <ul>
          <li>test list 1</li>
          <li>test list 2</li>
          <li>test list 3</li>
          <li>test list 4</li>
        </ul>
      </div>
    )
  }
}

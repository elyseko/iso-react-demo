import React from 'react'
import { Link } from "react-router"

export default class Home extends React.Component {
  render() {
    return <div>"Hello World"<Link to="/detail">Detail</Link></div>
  }
}

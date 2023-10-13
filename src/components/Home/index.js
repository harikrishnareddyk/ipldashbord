import {Component} from 'react'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamslist: []}

  componentDidMount() {
    this.getmatch()
  }

  getmatch = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    this.setState({teamslist: data.teams})
  }

  render() {
    const {teamslist} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul>
          {teamslist.map(each => (
            <TeamCard each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home

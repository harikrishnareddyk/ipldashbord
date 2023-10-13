import {Component} from 'react'

import Recent from '../MatchCard'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {teamBannerUrl: {}, latestMatch: {}, recentMatches: {}}

  componentDidMount() {
    this.getdetails()
  }

  getformated = data2 => ({
    competingTeam: data2.competing_team,
    competingLogo: data2.competing_team_logo,
    date: data2.date,
    firstInnings: data2.first_innings,
    id: data2.id,
    manOfTheMatch: data2.man_of_the_match,
    matchStatus: data2.match_statue,
    result: data2.result,
    secondInnings: data2.second_innnings,
    umpires: data2.umpires,
    venue: data2.venue,
  })

  getdetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const data1 = await response.json()
    this.setState({
      teamBannerUrl: data1.team_banner_url,
      latestMatch: this.getformated(data1.latest_match_details),
      recentMatches: data1.recent_matches,
    })
  }

  render() {
    const {teamBannerUrl, latestMatch, recentMatches} = this.state
    console.log(recentMatches)

    return (
      <div>
        <img src={teamBannerUrl} />
        <div>
          <h1>Latest Matches</h1>
          <div>
            <div>
              <h1>{latestMatch.competingTeam}</h1>
              <p>{latestMatch.date}</p>
              <p>{latestMatch.venue}</p>
              <p>{latestMatch.result}</p>
            </div>
            <hr />
            <div>
              {recentMatches.map(each => (
                <Recent each={each} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamMatches

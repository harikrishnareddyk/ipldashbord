import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {each} = props
  return (
    <li>
      <Link to={`/team-matches/${each.id}`}>
        <div className="team">
          <img className="team-image" src={each.team_image_url} />
          <p>{each.name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard

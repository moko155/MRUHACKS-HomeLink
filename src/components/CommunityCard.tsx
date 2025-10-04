import { Community } from '../types';
import './CommunityCard.css';

interface Props {
  community: Community;
  joined: boolean;
  onJoin?: () => void;
  onLeave?: () => void;
}

const CommunityCard = ({ community, joined, onJoin, onLeave }: Props) => {
  const handleClick = () => {
    if (joined && onLeave) {
      onLeave();
    } else if (!joined && onJoin) {
      onJoin();
    }
  };

  return (
    <div className="community-card">
      <div className="community-card-header">
        <h3 className="community-name">{community.name}</h3>
      </div>

      <p className="community-description">{community.description}</p>

      <div className="community-footer">
        <div className="member-count">
          <span className="member-icon">👥</span>
          <span>{community.memberCount} members</span>
        </div>

        <button 
          className={joined ? 'btn-joined' : 'btn-join'}
          onClick={handleClick}
        >
          {joined ? 'Joined ✓' : 'Join Community'}
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;
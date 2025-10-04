import { Community } from '../types';
import './CommunityCard.css';
import { createElement } from 'react';

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

  return createElement(
    'div',
    { className: 'community-card' },
    createElement(
      'div',
      { className: 'community-card-header' },
      createElement('h3', { className: 'community-name' }, community.name)
    ),
    createElement('p', { className: 'community-description' }, community.description),
    createElement(
      'div',
      { className: 'community-footer' },
      createElement(
        'div',
        { className: 'member-count' },
        createElement('span', { className: 'member-icon' }, '👥'),
  createElement('span', null, `${community.memberCount} members`)
      ),
      createElement(
        'button',
        {
          className: joined ? 'btn-joined' : 'btn-join',
          onClick: handleClick
        },
        joined ? 'Joined ✓' : 'Join Community'
      )
    )
  );
};

export default CommunityCard;
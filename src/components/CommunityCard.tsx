// Import type definitions for the Community object
import { Community } from '../types';
// Import component-specific styling
import './CommunityCard.css';
// Import createElement from React to manually construct elements
import { createElement } from 'react';

// Define the expected props for the CommunityCard component
interface Props {
  community: Community;   // Community data (name, description, memberCount)
  joined: boolean;        // Indicates if the user is currently a member
  onJoin?: () => void;    // Callback function for joining the community
  onLeave?: () => void;   // Callback function for leaving the community
}

/**
 * CommunityCard Component
 * -----------------------
 * Displays community information (name, description, members)
 * and allows the user to join or leave the community via a toggle button.
 */
const CommunityCard = ({ community, joined, onJoin, onLeave }: Props) => {
  /**
   * handleClick()
   * Determines whether to trigger the "join" or "leave" action
   * based on the user's current membership status.
   */
  const handleClick = () => {
    if (joined && onLeave) {
      // User is already joined, trigger the leave callback
      onLeave();
    } else if (!joined && onJoin) {
      // User is not joined, trigger the join callback
      onJoin();
    }
  };

  /**
   * Component Structure:
   * --------------------
   * <div class="community-card">
   *   <div class="community-card-header">
   *     <h3 class="community-name">{community.name}</h3>
   *   </div>
   *   <p class="community-description">{community.description}</p>
   *   <div class="community-footer">
   *     <div class="member-count">
   *       <span class="member-icon">👥</span>
   *       <span>{community.memberCount} members</span>
   *     </div>
   *     <button class="btn-join / btn-joined" onClick={handleClick}>
   *       {joined ? 'Joined ✓' : 'Join Community'}
   *     </button>
   *   </div>
   * </div>
   */

  return createElement(
    'div',
    { className: 'community-card' }, // Outer container for the card
    // Header section: displays the community's name
    createElement(
      'div',
      { className: 'community-card-header' },
      createElement('h3', { className: 'community-name' }, community.name)
    ),
    // Description section: short summary of the community
    createElement('p', { className: 'community-description' }, community.description),
    // Footer section: member count and join/leave button
    createElement(
      'div',
      { className: 'community-footer' },
      // Member count display with icon
      createElement(
        'div',
        { className: 'member-count' },
        createElement('span', { className: 'member-icon' }, '👥'),
  createElement('span', null, `${community.memberCount} members`)
      ),
      // Join or Leave button, toggles based on "joined" prop
      createElement(
        'button',
        {
          className: joined ? 'btn-joined' : 'btn-join', // Different style for joined vs not joined
          onClick: handleClick // Calls handler when clicked
        },
        joined ? 'Joined ✓' : 'Join Community' // Button label
      )
    )
  );
};
// Export the component for use in other pages (e.g., MyCommunities, Explore)
export default CommunityCard;
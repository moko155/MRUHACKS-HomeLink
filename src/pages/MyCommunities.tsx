// import { useState, createElement } from 'react';
// import CommunityCard from '../components/CommunityCard';
// import { Community } from '../types';
// import './MyCommunities.css';

// const MyCommunities = () => {
//   const [myCommunities, setMyCommunities] = useState<Community[]>([
//     {
//       id: '1',
//       name: 'Coders Unite',
//       description: 'A community for developers to share knowledge, collaborate on projects, and discuss programming.',
//       memberCount: 150
//     },
//     {
//       id: '2',
//       name: 'Book Lovers',
//       description: 'Share and discuss your favorite books, join reading challenges, and discover new authors.',
//       memberCount: 89
//     },
//     {
//       id: '3',
//       name: 'Gamers Hub',
//       description: 'Gaming enthusiasts unite! Discuss the latest games, share strategies, and find teammates.',
//       memberCount: 234
//     },
//     {
//       id: '4',
//       name: 'Photography Club',
//       description: 'Share your photos, get feedback, learn new techniques, and appreciate visual artistry.',
//       memberCount: 112
//     }
//   ]);

//   const handleLeave = (communityId: string) => {
//     setMyCommunities(prev => prev.filter(c => c.id !== communityId));
//   };

//   return createElement(
//     'div',
//     { className: 'my-communities-page' },
    
//     // Header
//     createElement(
//       'div',
//       { className: 'my-communities-header' },
//       createElement('h1', { className: 'my-communities-title' }, '👥 My Communities'),
//       createElement('p', { className: 'my-communities-subtitle' }, 
//         `You are a member of ${myCommunities.length} ${myCommunities.length === 1 ? 'community' : 'communities'}`
//       )
//     ),

//     // Stats Section
//     createElement(
//       'div',
//       { className: 'stats-container' },
//       createElement(
//         'div',
//         { className: 'stat-card' },
//         createElement('div', { className: 'stat-icon' }, '🏘️'),
//         createElement('div', { className: 'stat-content' },
//           createElement('h3', { className: 'stat-number' }, myCommunities.length),
//           createElement('p', { className: 'stat-label' }, 'Communities Joined')
//         )
//       ),
//       createElement(
//         'div',
//         { className: 'stat-card' },
//         createElement('div', { className: 'stat-icon' }, '👤'),
//         createElement('div', { className: 'stat-content' },
//           createElement('h3', { className: 'stat-number' }, 
//             myCommunities.reduce((sum, c) => sum + c.memberCount, 0)
//           ),
//           createElement('p', { className: 'stat-label' }, 'Total Members')
//         )
//       ),
//       createElement(
//         'div',
//         { className: 'stat-card' },
//         createElement('div', { className: 'stat-icon' }, '⭐'),
//         createElement('div', { className: 'stat-content' },
//           createElement('h3', { className: 'stat-number' }, 'Active'),
//           createElement('p', { className: 'stat-label' }, 'Member Status')
//         )
//       )
//     ),

//     // Communities Grid
//     myCommunities.length > 0
//       ? createElement(
//           'div',
//           { className: 'communities-section' },
//           createElement('h2', { className: 'section-title' }, 'Your Communities'),
//           createElement(
//             'div',
//             { className: 'communities-grid' },
//             ...myCommunities.map(community =>
//               createElement(CommunityCard, {
//                 key: community.id,
//                 community: community,
//                 joined: true,
//                 onLeave: () => handleLeave(community.id)
//               })
//             )
//           )
//         )
//       : createElement(
//           'div',
//           { className: 'empty-state' },
//           createElement('div', { className: 'empty-icon' }, '🏘️'),
//           createElement('h3', null, 'No Communities Yet'),
//           createElement('p', null, 'Explore new communities to get started!'),
//           createElement(
//             'button',
//             {
//               className: 'explore-button',
//               onClick: () => window.location.href = '/explore'
//             },
//             '🔍 Explore Communities'
//           )
//         )
//   );
// };


// Import necessary React features and components
import { useState, createElement } from 'react';
import CommunityCard from '../components/CommunityCard';
import { Community } from '../types';
import './MyCommunities.css';

// Component: MyCommunities
// Description: Displays all communities the user is currently part of, 
// along with key statistics and the ability to leave communities.
const MyCommunities = () => {

  // Define state variable to hold the list of user's joined communities
  const [myCommunities, setMyCommunities] = useState<Community[]>([
    {
      id: '1',
      name: 'Coders Unite',
      description: 'A community for developers to share knowledge, collaborate on projects, and discuss programming.',
      memberCount: 150
    },
    {
      id: '2',
      name: 'Book Lovers',
      description: 'Share and discuss your favorite books, join reading challenges, and discover new authors.',
      memberCount: 89
    },
    {
      id: '3',
      name: 'Gamers Hub',
      description: 'Gaming enthusiasts unite! Discuss the latest games, share strategies, and find teammates.',
      memberCount: 234
    },
    {
      id: '4',
      name: 'Photography Club',
      description: 'Share your photos, get feedback, learn new techniques, and appreciate visual artistry.',
      memberCount: 112
    }
  ]);

  // Function to handle when a user leaves a community
  // Filters out the community with the given ID from the state list
  const handleLeave = (communityId: string) => {
    setMyCommunities(prev => prev.filter(c => c.id !== communityId));
  };

  // Return the JSX using React.createElement instead of JSX syntax
  return createElement(
    'div',
    { className: 'my-communities-page' },

    // --- Header Section ---
    createElement(
      'div',
      { className: 'my-communities-header' },
      createElement('h1', { className: 'my-communities-title' }, '👥 My Communities'),
      createElement(
        'p',
        { className: 'my-communities-subtitle' },
        `You are a member of ${myCommunities.length} ${myCommunities.length === 1 ? 'community' : 'communities'}`
      )
    ),

    // --- Statistics Section ---
    createElement(
      'div',
      { className: 'stats-container' },

      // Total communities joined
      createElement(
        'div',
        { className: 'stat-card' },
        createElement('div', { className: 'stat-icon' }, '🏘️'),
        createElement(
          'div',
          { className: 'stat-content' },
          createElement('h3', { className: 'stat-number' }, myCommunities.length),
          createElement('p', { className: 'stat-label' }, 'Communities Joined')
        )
      ),

      // Total number of members across all joined communities
      createElement(
        'div',
        { className: 'stat-card' },
        createElement('div', { className: 'stat-icon' }, '👤'),
        createElement(
          'div',
          { className: 'stat-content' },
          createElement(
            'h3',
            { className: 'stat-number' },
            myCommunities.reduce((sum, c) => sum + c.memberCount, 0) // Sum of all member counts
          ),
          createElement('p', { className: 'stat-label' }, 'Total Members')
        )
      ),

      // Placeholder for active member status
      createElement(
        'div',
        { className: 'stat-card' },
        createElement('div', { className: 'stat-icon' }, '⭐'),
        createElement(
          'div',
          { className: 'stat-content' },
          createElement('h3', { className: 'stat-number' }, 'Active'),
          createElement('p', { className: 'stat-label' }, 'Member Status')
        )
      )
    ),

    // --- Communities Display Section ---
    // If user has joined any communities
    myCommunities.length > 0
      ? createElement(
          'div',
          { className: 'communities-section' },
          createElement('h2', { className: 'section-title' }, 'Your Communities'),
          createElement(
            'div',
            { className: 'communities-grid' },
            // Map through communities and render a CommunityCard for each
            ...myCommunities.map(community =>
              createElement(CommunityCard, {
                key: community.id,
                community: community,
                joined: true, // Indicates the user is already a member
                onLeave: () => handleLeave(community.id) // Event handler for leaving
              })
            )
          )
        )

      // --- Empty State Section ---
      // If user has not joined any communities yet
      : createElement(
          'div',
          { className: 'empty-state' },
          createElement('div', { className: 'empty-icon' }, '🏘️'),
          createElement('h3', null, 'No Communities Yet'),
          createElement('p', null, 'Explore new communities to get started!'),
          createElement(
            'button',
            {
              className: 'explore-button',
              onClick: () => (window.location.href = '/explore') // Redirect to Explore page
            },
            '🔍 Explore Communities'
          )
        )
  );
};

// Export the component as the default export
export default MyCommunities;

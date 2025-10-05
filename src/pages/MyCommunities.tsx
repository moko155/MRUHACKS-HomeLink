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

// export default MyCommunities;
/**
 * Explore.tsx
 * 
 * This component allows users to browse and discover various online communities.
 * Users can search communities by name or description, view details, and choose to join or leave any community.
 * 
 * It uses state to manage:
 *  - The user's search query
 *  - The full list of available communities
 *  - The set of communities the user has joined
 */

import { useState, createElement } from 'react';
import CommunityCard from '../components/CommunityCard';
import { Community } from '../types';
import './Explore.css';

const Explore = () => {
  // Local state for search bar input
  const [searchQuery, setSearchQuery] = useState('');

  // Static list of all available communities (mock data for demonstration)
  const [allCommunities] = useState<Community[]>([
    {
      id: '1',
      name: 'Fitness Freaks',
      description: 'Health and fitness enthusiasts sharing workout tips, nutrition advice, and motivation.',
      memberCount: 301
    },
    {
      id: '2',
      name: 'Art Gallery',
      description: 'Share your artwork, get feedback, and connect with fellow artists and creators.',
      memberCount: 178
    },
    {
      id: '3',
      name: 'Music Lovers',
      description: 'All genres welcome! Discuss your favorite artists, share playlists, and discover new music.',
      memberCount: 445
    },
    {
      id: '4',
      name: 'Travel Bugs',
      description: 'Travel stories, tips, destination recommendations, and adventure planning.',
      memberCount: 267
    },
    {
      id: '5',
      name: 'Tech Innovators',
      description: 'Discuss the latest technology trends, gadgets, programming, and innovation.',
      memberCount: 532
    },
    {
      id: '6',
      name: 'Food Critics',
      description: 'Share recipes, restaurant reviews, cooking tips, and culinary adventures.',
      memberCount: 389
    },
    {
      id: '7',
      name: 'Book Worms',
      description: 'Book recommendations, reading challenges, author discussions, and literary debates.',
      memberCount: 412
    },
    {
      id: '8',
      name: 'Nature Enthusiasts',
      description: 'Hiking, camping, wildlife photography, and environmental conservation.',
      memberCount: 234
    },
    {
      id: '9',
      name: 'Film Buffs',
      description: 'Movie reviews, film theory discussions, and recommendations across all genres.',
      memberCount: 298
    },
    {
      id: '10',
      name: 'Pet Parents',
      description: 'Share adorable pet photos, training tips, and advice for all pet owners.',
      memberCount: 521
    },
    {
      id: '11',
      name: 'DIY Crafters',
      description: 'Home improvement projects, crafting ideas, and creative DIY tutorials.',
      memberCount: 367
    },
    {
      id: '12',
      name: 'Yoga & Meditation',
      description: 'Practice mindfulness, share yoga routines, and find inner peace together.',
      memberCount: 189
    }
  ]);

  // Track the set of communities the user has joined
  const [joinedCommunities, setJoinedCommunities] = useState<Set<string>>(new Set());

  /**
   * Adds a community to the user's joined list
   * @param communityId - ID of the community to join
   */
  const handleJoin = (communityId: string) => {
    setJoinedCommunities(prev => {
      const newSet = new Set(prev);
      newSet.add(communityId);
      return newSet;
    });
  };

  /**
   * Removes a community from the user's joined list
   * @param communityId - ID of the community to leave
   */
  const handleLeave = (communityId: string) => {
    setJoinedCommunities(prev => {
      const newSet = new Set(prev);
      newSet.delete(communityId);
      return newSet;
    });
  };

  /**
   * Filters the list of communities based on the user's search query.
   * Matches against both name and description.
   */
  const filteredCommunities = allCommunities.filter(community =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render the Explore page UI
  return createElement(
    'div',
    { className: 'explore-page' },

    // Page header
    createElement(
      'div',
      { className: 'explore-header' },
      createElement('h1', { className: 'explore-title' }, '🔍 Explore New Communities'),
      createElement('p', { className: 'explore-subtitle' },
        'Discover communities that match your interests and connect with like-minded people'
      )
    ),

    // Search bar for filtering communities
    createElement(
      'div',
      { className: 'search-container' },
      createElement('input', {
        type: 'text',
        placeholder: 'Search communities by name or interest...',
        className: 'search-bar',
        value: searchQuery,
        onChange: (e: any) => setSearchQuery(e.target.value)
      }),
      createElement('div', { className: 'search-icon' }, '🔍')
    ),

    // Display how many communities are currently shown
    createElement(
      'div',
      { className: 'results-info' },
      createElement(
        'p',
        null,
        `Showing ${filteredCommunities.length} ${filteredCommunities.length === 1 ? 'community' : 'communities'}`
      )
    ),

    // Grid of CommunityCard components for each community
    filteredCommunities.length > 0
      ? createElement(
          'div',
          { className: 'communities-grid' },
          ...filteredCommunities.map(community =>
            createElement(CommunityCard, {
              key: community.id,
              community: community,
              joined: joinedCommunities.has(community.id),
              onJoin: () => handleJoin(community.id),
              onLeave: () => handleLeave(community.id)
            })
          )
        )
      // No results message if no matches found
      : createElement(
          'div',
          { className: 'no-results' },
          createElement('div', { className: 'no-results-icon' }, '🔍'),
          createElement('h3', null, 'No communities found'),
          createElement('p', null, 'Try searching with different keywords')
        )
  );
};

export default Explore;

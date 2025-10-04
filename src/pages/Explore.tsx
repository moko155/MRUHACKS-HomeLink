import { useState, createElement } from 'react';
import CommunityCard from '../components/CommunityCard';
import { Community } from '../types';
import './Explore.css';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
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

  const [joinedCommunities, setJoinedCommunities] = useState<Set<string>>(new Set());

  const handleJoin = (communityId: string) => {
    setJoinedCommunities(prev => {
      const newSet = new Set(prev);
      newSet.add(communityId);
      return newSet;
    });
  };

  const handleLeave = (communityId: string) => {
    setJoinedCommunities(prev => {
      const newSet = new Set(prev);
      newSet.delete(communityId);
      return newSet;
    });
  };

  const filteredCommunities = allCommunities.filter(community =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return createElement(
    'div',
    { className: 'explore-page' },
    
    // Header
    createElement(
      'div',
      { className: 'explore-header' },
      createElement('h1', { className: 'explore-title' }, '🔍 Explore New Communities'),
      createElement('p', { className: 'explore-subtitle' }, 
        'Discover communities that match your interests and connect with like-minded people'
      )
    ),

    // Search Bar
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
      createElement(
        'div',
        { className: 'search-icon' },
        '🔍'
      )
    ),

    // Results Count
    createElement(
      'div',
      { className: 'results-info' },
      createElement(
        'p',
        null,
        `Showing ${filteredCommunities.length} ${filteredCommunities.length === 1 ? 'community' : 'communities'}`
      )
    ),

    // Communities Grid
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
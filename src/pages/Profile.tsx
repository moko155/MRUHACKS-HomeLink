import { useState, createElement } from 'react';
import HouseVisualization from '../components/HouseVisualization';
import HouseCustomizer from '../components/HouseCustomizer';
import { Profile as ProfileType, HouseCustomization } from '../types';
import './Profile.css';
import introPhoto from '../images/1-intro-photo-final.jpg';

const Profile = () => {
  const [profile, setProfile] = useState<ProfileType>({
    id: '1',
    name: 'John Doe',
    profilePicture: introPhoto,
    house: {
      roof: { color: '#8B4513', texture: 'shingles', shape: 'triangle' },
      window: { color: '#87CEEB', texture: 'glass', shape: 'square' },
      door: { color: '#654321', texture: 'wood', shape: 'rectangle' },
    },
    achievements: ['First Community Join', 'Profile Completed', '10 Connections', 'Active Member'],
    hobbies: ['Reading', 'Gaming', 'Coding', 'Photography', 'Traveling'],
    bio: 'Hello! I love connecting with people who share similar interests. Passionate about technology and building meaningful relationships.',
  });

  const [isEditing, setIsEditing] = useState(false);

  const updateHouse = (house: HouseCustomization) => {
    setProfile({ ...profile, house });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return createElement(
    'div',
    { className: 'profile-page' },
    
    // Profile Header
    createElement(
      'div',
      { className: 'profile-header' },
      createElement('img', {
        src: profile.profilePicture,
        alt: 'Profile',
        className: 'profile-picture'
      }),
      createElement(
        'div',
        { className: 'profile-name' },
        createElement('h1', null, profile.name),
        createElement(
          'button',
          {
            onClick: toggleEdit,
            className: 'edit-button'
          },
          isEditing ? 'Save Profile' : 'Edit Profile'
        )
      )
    ),

    // House Section
    createElement(
      'div',
      { className: 'house-section' },
      createElement('h2', null, 'My House'),
      createElement(HouseVisualization, { house: profile.house }),
      isEditing && createElement(HouseCustomizer, {
        house: profile.house,
        onUpdate: updateHouse
      })
    ),

    // Profile Content Sections
    createElement(
      'div',
      { className: 'profile-content' },
      
      // Achievements Section
      createElement(
        'div',
        { className: 'section achievements-section' },
        createElement('h3', null, '🏆 Achievements (Roof)'),
        createElement(
          'ul',
          null,
          ...profile.achievements.map((achievement, idx) =>
            createElement('li', { key: idx }, achievement)
          )
        ),
        isEditing && createElement(
          'button',
          { className: 'add-button' },
          '+ Add Achievement'
        )
      ),

      // Hobbies Section
      createElement(
        'div',
        { className: 'section hobbies-section' },
        createElement('h3', null, '🪟 Hobbies & Interests (Window)'),
        createElement(
          'ul',
          null,
          ...profile.hobbies.map((hobby, idx) =>
            createElement('li', { key: idx }, hobby)
          )
        ),
        isEditing && createElement(
          'button',
          { className: 'add-button' },
          '+ Add Hobby'
        )
      ),

      // Bio Section
      createElement(
        'div',
        { className: 'section bio-section' },
        createElement('h3', null, '🚪 About Me (Door)'),
        isEditing
          ? createElement('textarea', {
              className: 'bio-textarea',
              defaultValue: profile.bio,
              rows: 4,
              placeholder: 'Tell us about yourself...'
            })
          : createElement('p', null, profile.bio)
      )
    )
  );
};

export default Profile;
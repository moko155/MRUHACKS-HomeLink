// import { useState, createElement } from 'react';
// import HouseVisualization from '../components/HouseVisualization';
// import HouseCustomizer from '../components/HouseCustomizer';
// import { Profile as ProfileType, HouseCustomization } from '../types';
// import './Profile.css';
// import introPhoto from '../images/1-intro-photo-final.jpg';

// const Profile = () => {
//   const [profile, setProfile] = useState<ProfileType>({
//     id: '1',
//     name: 'John Doe',
//     profilePicture: introPhoto,
//     house: {
//       roof: { color: '#8B4513', texture: 'shingles', shape: 'triangle' },
//       window: { color: '#87CEEB', texture: 'glass', shape: 'square' },
//       door: { color: '#654321', texture: 'wood', shape: 'rectangle' },
//     },
//     achievements: ['First Community Join', 'Profile Completed', '10 Connections', 'Active Member'],
//     hobbies: ['Reading', 'Gaming', 'Coding', 'Photography', 'Traveling'],
//     bio: 'Hello! I love connecting with people who share similar interests. Passionate about technology and building meaningful relationships.',
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   const updateHouse = (house: HouseCustomization) => {
//     setProfile({ ...profile, house });
//   };

//   const toggleEdit = () => {
//     setIsEditing(!isEditing);
//   };

//   return createElement(
//     'div',
//     { className: 'profile-page' },
    
//     // Profile Header
//     createElement(
//       'div',
//       { className: 'profile-header' },
//       createElement('img', {
//         src: profile.profilePicture,
//         alt: 'Profile',
//         className: 'profile-picture'
//       }),
//       createElement(
//         'div',
//         { className: 'profile-name' },
//         createElement('h1', null, profile.name),
//         createElement(
//           'button',
//           {
//             onClick: toggleEdit,
//             className: 'edit-button'
//           },
//           isEditing ? 'Save Profile' : 'Edit Profile'
//         )
//       )
//     ),

//     // House Section
//     createElement(
//       'div',
//       { className: 'house-section' },
//       createElement('h2', null, 'My House'),
//       createElement(HouseVisualization, { house: profile.house }),
//       isEditing && createElement(HouseCustomizer, {
//         house: profile.house,
//         onUpdate: updateHouse
//       })
//     ),

//     // Profile Content Sections
//     createElement(
//       'div',
//       { className: 'profile-content' },
      
//       // Achievements Section
//       createElement(
//         'div',
//         { className: 'section achievements-section' },
//         createElement('h3', null, '🏆 Achievements (Roof)'),
//         createElement(
//           'ul',
//           null,
//           ...profile.achievements.map((achievement, idx) =>
//             createElement('li', { key: idx }, achievement)
//           )
//         ),
//         isEditing && createElement(
//           'button',
//           { className: 'add-button' },
//           '+ Add Achievement'
//         )
//       ),

//       // Hobbies Section
//       createElement(
//         'div',
//         { className: 'section hobbies-section' },
//         createElement('h3', null, '🪟 Hobbies & Interests (Window)'),
//         createElement(
//           'ul',
//           null,
//           ...profile.hobbies.map((hobby, idx) =>
//             createElement('li', { key: idx }, hobby)
//           )
//         ),
//         isEditing && createElement(
//           'button',
//           { className: 'add-button' },
//           '+ Add Hobby'
//         )
//       ),

//       // Bio Section
//       createElement(
//         'div',
//         { className: 'section bio-section' },
//         createElement('h3', null, '🚪 About Me (Door)'),
//         isEditing
//           ? createElement('textarea', {
//               className: 'bio-textarea',
//               defaultValue: profile.bio,
//               rows: 4,
//               placeholder: 'Tell us about yourself...'
//             })
//           : createElement('p', null, profile.bio)
//       )
//     )
//   );
// };

// export default Profile;

import { useState, createElement } from 'react';
import HouseVisualization from '../components/HouseVisualization';
import HouseCustomizer from '../components/HouseCustomizer';
import { Profile as ProfileType, HouseCustomization } from '../types';
import './Profile.css';
import introPhoto from '../images/1-intro-photo-final.jpg';

/**
 * Profile Component
 * 
 * This component represents a user’s profile page. It includes:
 *  - User’s profile details (name, image, bio)
 *  - An editable house visualization (customizable roof, window, door)
 *  - Lists of achievements and hobbies
 *  - Edit mode for modifying house and profile content
 * 
 * It uses React’s createElement API (instead of JSX) for DOM construction.
 */

const Profile = () => {

  /**
   * Stores the user's full profile information.
   * The initial profile includes static data for demonstration purposes.
   */
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

  /**
   * Controls whether the profile is currently in editing mode.
   * When true, users can modify their house design and profile details.
   */
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Updates the user's house customization.
   * Triggered when the HouseCustomizer component changes the house state.
   */
  const updateHouse = (house: HouseCustomization) => {
    setProfile({ ...profile, house });
  };

  /**
   * Toggles between edit and view modes for the profile.
   * Clicking the edit button allows users to modify their information.
   */
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // -------------------------------------------------------
  // RENDER SECTION
  // -------------------------------------------------------
  return createElement(
    'div',
    { className: 'profile-page' },
    
    // ---------- Profile Header (User Picture + Name + Edit Button) ----------
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

    // ---------- House Section ----------
    createElement(
      'div',
      { className: 'house-section' },
      createElement('h2', null, 'My House'),

      // Displays the user’s customized house (roof, window, door)
      createElement(HouseVisualization, { house: profile.house }),

      // If editing mode is enabled, show the house customization form
      isEditing && createElement(HouseCustomizer, {
        house: profile.house,
        onUpdate: updateHouse
      })
    ),

    // ---------- Profile Content Section ----------
    createElement(
      'div',
      { className: 'profile-content' },
      
      // ----- Achievements Section -----
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
        // Show "Add Achievement" button only when editing
        isEditing && createElement(
          'button',
          { className: 'add-button' },
          '+ Add Achievement'
        )
      ),

      // ----- Hobbies Section -----
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
        // Show "Add Hobby" button only when editing
        isEditing && createElement(
          'button',
          { className: 'add-button' },
          '+ Add Hobby'
        )
      ),

      // ----- Bio Section -----
      createElement(
        'div',
        { className: 'section bio-section' },
        createElement('h3', null, '🚪 About Me (Door)'),

        // In edit mode, display a text area for modifying the bio
        isEditing
          ? createElement('textarea', {
              className: 'bio-textarea',
              defaultValue: profile.bio,
              rows: 4,
              placeholder: 'Tell us about yourself...'
            })
          // Otherwise, show the current bio as plain text
          : createElement('p', null, profile.bio)
      )
    )
  );
};

export default Profile;

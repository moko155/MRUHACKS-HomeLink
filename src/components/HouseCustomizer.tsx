// Import createElement for manual element creation (no JSX syntax used)
import { createElement } from 'react';

// Import the HouseCustomization type definition
import { HouseCustomization } from '../types';

// Import component-specific CSS styling
import './HouseCustomizer.css';

// Define the expected props for the HouseCustomizer component
interface Props {
  house: HouseCustomization;                 // Current customization state of the house
  onUpdate: (house: HouseCustomization) => void; // Callback triggered when the house customization updates
}

/**
 * HouseCustomizer Component
 * -------------------------
 * This component allows the user to customize various parts of a house
 * (roof, windows, doors) by adjusting their color, texture, and shape.
 * It dynamically renders a customization panel for each section.
 */
const HouseCustomizer = ({ house, onUpdate }: Props) => {

  /**
   * updateColor()
   * -------------
   * Updates the color property for a specific house part
   * and triggers the onUpdate callback to propagate changes.
   */
  const updateColor = (part: 'roof' | 'window' | 'door', color: string) => {
    onUpdate({
      ...house,
      [part]: { ...house[part], color }
    });
  };

  /**
   * updateTexture()
   * ---------------
   * Updates the texture property (e.g., metal, wood, glass)
   * for a specific house part.
   */
  const updateTexture = (part: 'roof' | 'window' | 'door', texture: string) => {
    onUpdate({
      ...house,
      [part]: { ...house[part], texture }
    });
  };

  /**
   * updateShape()
   * -------------
   * Updates the shape property (e.g., arched, flat, curved)
   * for a specific house part.
   */
  const updateShape = (part: 'roof' | 'window' | 'door', shape: string) => {
    onUpdate({
      ...house,
      [part]: { ...house[part], shape }
    });
  };

  // ==========================
  // Dropdown option definitions
  // ==========================

  // Available texture options per house section
  const roofTextures = ['solid', 'shingles', 'tiles', 'metal'];
  const windowTextures = ['solid', 'glass', 'brick'];
  const doorTextures = ['solid', 'wood', 'metal'];

  // Available shape options per house section
  const roofShapes = ['triangle', 'flat', 'curved', 'steep'];
  const windowShapes = ['square', 'circle', 'arched', 'wide'];
  const doorShapes = ['rectangle', 'arched', 'rounded', 'double'];

  /**
   * createCustomizerSection()
   * -------------------------
   * Generates a full section of the customizer UI for one part of the house.
   * Includes color picker, texture selector, and shape selector.
   *
   * @param title - Section title (e.g., "Roof", "Door")
   * @param part - The house part being customized
   * @param textures - Available texture options
   * @param shapes - Available shape options
   */
  const createCustomizerSection = (
    title: string,
    part: 'roof' | 'window' | 'door',
    textures: string[],
    shapes: string[]
  ) => {
    return createElement(
      'div',
      { className: 'customizer-section' },

      // Section Title
      createElement('h3', null, title),

      // ---- Color Picker ----
      createElement(
        'div',
        { className: 'customizer-control' },
        createElement('label', null, 'Color:'),
        createElement('input', {
          type: 'color',
          value: house[part].color,
          onChange: (e: any) => updateColor(part, e.target.value),
          className: 'color-picker'
        })
      ),

      // ---- Texture Selector ----
      createElement(
        'div',
        { className: 'customizer-control' },
        createElement('label', null, 'Texture:'),
        createElement(
          'select',
          {
            value: house[part].texture,
            onChange: (e: any) => updateTexture(part, e.target.value),
            className: 'select-dropdown'
          },
          // Dynamically render each texture as an <option>
          ...textures.map(texture =>
            createElement(
              'option',
              { key: texture, value: texture },
              texture.charAt(0).toUpperCase() + texture.slice(1)
            )
          )
        )
      ),

      // ---- Shape Selector ----
      createElement(
        'div',
        { className: 'customizer-control' },
        createElement('label', null, 'Shape:'),
        createElement(
          'select',
          {
            value: house[part].shape,
            onChange: (e: any) => updateShape(part, e.target.value),
            className: 'select-dropdown'
          },
          // Dynamically render each shape as an <option>
          ...shapes.map(shape =>
            createElement(
              'option',
              { key: shape, value: shape },
              shape.charAt(0).toUpperCase() + shape.slice(1)
            )
          )
        )
      )
    );
  };

  /**
   * Component Structure:
   * --------------------
   * <div class="house-customizer">
   *   <h2 class="customizer-title">🎨 Customize Your House</h2>
   *   <div class="customizer-grid">
   *     {Roof Section}
   *     {Window Section}
   *     {Door Section}
   *   </div>
   * </div>
   */
  return createElement(
    'div',
    { className: 'house-customizer' },

    // Main Title
    createElement('h2', { className: 'customizer-title' }, '🎨 Customize Your House'),

    // Grid container for all sections
    createElement(
      'div',
      { className: 'customizer-grid' },
      createCustomizerSection('🏠 Roof', 'roof', roofTextures, roofShapes),
      createCustomizerSection('🪟 Window', 'window', windowTextures, windowShapes),
      createCustomizerSection('🚪 Door', 'door', doorTextures, doorShapes)
    )
  );
};

// Export the component for use in the main app
export default HouseCustomizer;
import { createElement } from 'react';
import { HouseCustomization } from '../types';
import './HouseCustomizer.css';

interface Props {
  house: HouseCustomization;
  onUpdate: (house: HouseCustomization) => void;
}

const HouseCustomizer = ({ house, onUpdate }: Props) => {
  const updateColor = (part: 'roof' | 'window' | 'door', color: string) => {
    onUpdate({
      ...house,
      [part]: { ...house[part], color }
    });
  };

  const updateTexture = (part: 'roof' | 'window' | 'door', texture: string) => {
    onUpdate({
      ...house,
      [part]: { ...house[part], texture }
    });
  };

  const updateShape = (part: 'roof' | 'window' | 'door', shape: string) => {
    onUpdate({
      ...house,
      [part]: { ...house[part], shape }
    });
  };

  // Texture options for each part
  const roofTextures = ['solid', 'shingles', 'tiles', 'metal'];
  const windowTextures = ['solid', 'glass', 'brick'];
  const doorTextures = ['solid', 'wood', 'metal'];

  // Shape options for each part
  const roofShapes = ['triangle', 'flat', 'curved', 'steep'];
  const windowShapes = ['square', 'circle', 'arched', 'wide'];
  const doorShapes = ['rectangle', 'arched', 'rounded', 'double'];

  const createCustomizerSection = (
    title: string,
    part: 'roof' | 'window' | 'door',
    textures: string[],
    shapes: string[]
  ) => {
    return createElement(
      'div',
      { className: 'customizer-section' },
      createElement('h3', null, title),

      // Color Picker
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

      // Texture Selector
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
          ...textures.map(texture =>
            createElement(
              'option',
              { key: texture, value: texture },
              texture.charAt(0).toUpperCase() + texture.slice(1)
            )
          )
        )
      ),

      // Shape Selector
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

  return createElement(
    'div',
    { className: 'house-customizer' },
    createElement('h2', { className: 'customizer-title' }, '🎨 Customize Your House'),
    createElement(
      'div',
      { className: 'customizer-grid' },
      createCustomizerSection('🏠 Roof', 'roof', roofTextures, roofShapes),
      createCustomizerSection('🪟 Window', 'window', windowTextures, windowShapes),
      createCustomizerSection('🚪 Door', 'door', doorTextures, doorShapes)
    )
  );
};

export default HouseCustomizer;
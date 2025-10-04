import { createElement } from 'react';
import { HouseCustomization } from '../types';
import './HouseVisualization.css';

interface Props {
  house: HouseCustomization;
}

// SVG Pattern Definitions Component
const TexturePatterns = () => {
  return createElement(
    'defs',
    null,
    // Shingles Pattern
    createElement(
      'pattern',
      {
        id: 'shingles',
        x: '0',
        y: '0',
        width: '20',
        height: '20',
        patternUnits: 'userSpaceOnUse'
      },
      createElement('rect', {
        width: '20',
        height: '10',
        fill: 'currentColor',
        opacity: '0.8'
      }),
      createElement('rect', {
        y: '10',
        width: '10',
        height: '10',
        fill: 'currentColor',
        opacity: '0.6'
      }),
      createElement('rect', {
        x: '10',
        y: '10',
        width: '10',
        height: '10',
        fill: 'currentColor',
        opacity: '0.9'
      })
    ),

    // Brick Pattern
    createElement(
      'pattern',
      {
        id: 'brick',
        x: '0',
        y: '0',
        width: '40',
        height: '20',
        patternUnits: 'userSpaceOnUse'
      },
      createElement('rect', {
        width: '40',
        height: '20',
        fill: 'currentColor',
        opacity: '0.9'
      }),
      createElement('rect', {
        width: '18',
        height: '8',
        x: '1',
        y: '1',
        fill: 'currentColor',
        opacity: '0.7'
      }),
      createElement('rect', {
        width: '18',
        height: '8',
        x: '21',
        y: '1',
        fill: 'currentColor',
        opacity: '0.7'
      }),
      createElement('rect', {
        width: '18',
        height: '8',
        x: '11',
        y: '11',
        fill: 'currentColor',
        opacity: '0.7'
      })
    ),

    // Wood Pattern
    createElement(
      'pattern',
      {
        id: 'wood',
        x: '0',
        y: '0',
        width: '30',
        height: '30',
        patternUnits: 'userSpaceOnUse'
      },
      createElement('rect', {
        width: '30',
        height: '30',
        fill: 'currentColor',
        opacity: '0.8'
      }),
      createElement('line', {
        x1: '0',
        y1: '5',
        x2: '30',
        y2: '5',
        stroke: 'currentColor',
        strokeWidth: '1',
        opacity: '0.4'
      }),
      createElement('line', {
        x1: '0',
        y1: '15',
        x2: '30',
        y2: '15',
        stroke: 'currentColor',
        strokeWidth: '1',
        opacity: '0.4'
      }),
      createElement('line', {
        x1: '0',
        y1: '25',
        x2: '30',
        y2: '25',
        stroke: 'currentColor',
        strokeWidth: '1',
        opacity: '0.4'
      })
    ),

    // Glass Pattern
    createElement(
      'pattern',
      {
        id: 'glass',
        x: '0',
        y: '0',
        width: '50',
        height: '50',
        patternUnits: 'userSpaceOnUse'
      },
      createElement('rect', {
        width: '50',
        height: '50',
        fill: 'currentColor',
        opacity: '0.3'
      }),
      createElement('line', {
        x1: '25',
        y1: '0',
        x2: '25',
        y2: '50',
        stroke: 'white',
        strokeWidth: '2',
        opacity: '0.5'
      }),
      createElement('line', {
        x1: '0',
        y1: '25',
        x2: '50',
        y2: '25',
        stroke: 'white',
        strokeWidth: '2',
        opacity: '0.5'
      })
    ),

    // Tiles Pattern
    createElement(
      'pattern',
      {
        id: 'tiles',
        x: '0',
        y: '0',
        width: '20',
        height: '20',
        patternUnits: 'userSpaceOnUse'
      },
      createElement('rect', {
        width: '20',
        height: '20',
        fill: 'currentColor',
        opacity: '0.85'
      }),
      createElement('rect', {
        width: '9',
        height: '9',
        x: '0.5',
        y: '0.5',
        fill: 'currentColor',
        opacity: '0.6'
      }),
      createElement('rect', {
        width: '9',
        height: '9',
        x: '10.5',
        y: '0.5',
        fill: 'currentColor',
        opacity: '0.6'
      }),
      createElement('rect', {
        width: '9',
        height: '9',
        x: '0.5',
        y: '10.5',
        fill: 'currentColor',
        opacity: '0.6'
      }),
      createElement('rect', {
        width: '9',
        height: '9',
        x: '10.5',
        y: '10.5',
        fill: 'currentColor',
        opacity: '0.6'
      })
    ),

    // Metal Pattern
    createElement(
      'pattern',
      {
        id: 'metal',
        x: '0',
        y: '0',
        width: '4',
        height: '4',
        patternUnits: 'userSpaceOnUse'
      },
      createElement('rect', {
        width: '4',
        height: '4',
        fill: 'currentColor',
        opacity: '0.9'
      }),
      createElement('circle', {
        cx: '2',
        cy: '2',
        r: '0.5',
        fill: 'white',
        opacity: '0.3'
      })
    )
  );
};

const HouseVisualization = ({ house }: Props) => {
  // Get roof path based on shape
  const getRoofPath = () => {
    switch (house.roof.shape) {
      case 'triangle':
        return 'M 150,50 L 50,150 L 250,150 Z';
      case 'flat':
        return 'M 50,120 L 250,120 L 250,150 L 50,150 Z';
      case 'curved':
        return 'M 50,150 Q 150,30 250,150 Z';
      case 'steep':
        return 'M 150,30 L 50,150 L 250,150 Z';
      default:
        return 'M 150,50 L 50,150 L 250,150 Z';
    }
  };

  // Get window shape element
  const getWindowShape = () => {
    const baseX = 100;
    const baseY = 180;
    const width = 50;
    const height = 50;

    switch (house.window.shape) {
      case 'square':
        return createElement('rect', {
          x: baseX,
          y: baseY,
          width: width,
          height: height
        });
      case 'circle':
        return createElement('circle', {
          cx: baseX + width / 2,
          cy: baseY + height / 2,
          r: width / 2
        });
      case 'arched':
        return createElement(
          'g',
          null,
          createElement('rect', {
            x: baseX,
            y: baseY + 15,
            width: width,
            height: height - 15
          }),
          createElement('path', {
            d: `M ${baseX},${baseY + 15} Q ${baseX + width / 2},${baseY - 10} ${baseX + width},${baseY + 15}`
          })
        );
      case 'wide':
        return createElement('rect', {
          x: baseX - 10,
          y: baseY + 10,
          width: width + 20,
          height: height - 20
        });
      default:
        return createElement('rect', {
          x: baseX,
          y: baseY,
          width: width,
          height: height
        });
    }
  };

  // Get door shape element
  const getDoorShape = () => {
    const baseX = 180;
    const baseY = 200;
    const width = 40;
    const height = 80;

    switch (house.door.shape) {
      case 'rectangle':
        return createElement('rect', {
          x: baseX,
          y: baseY,
          width: width,
          height: height
        });
      case 'arched':
        return createElement(
          'g',
          null,
          createElement('rect', {
            x: baseX,
            y: baseY + 15,
            width: width,
            height: height - 15
          }),
          createElement('path', {
            d: `M ${baseX},${baseY + 15} Q ${baseX + width / 2},${baseY - 10} ${baseX + width},${baseY + 15}`
          })
        );
      case 'rounded':
        return createElement('rect', {
          x: baseX,
          y: baseY,
          width: width,
          height: height,
          rx: '8'
        });
      case 'double':
        return createElement(
          'g',
          null,
          createElement('rect', {
            x: baseX,
            y: baseY,
            width: width / 2 - 1,
            height: height
          }),
          createElement('rect', {
            x: baseX + width / 2 + 1,
            y: baseY,
            width: width / 2 - 1,
            height: height
          }),
          createElement('line', {
            x1: baseX + width / 2,
            y1: baseY,
            x2: baseX + width / 2,
            y2: baseY + height,
            stroke: '#000',
            strokeWidth: '2'
          })
        );
      default:
        return createElement('rect', {
          x: baseX,
          y: baseY,
          width: width,
          height: height
        });
    }
  };

  // Get texture fill
  const getTextureFill = (color: string, texture: string) => {
    if (texture === 'solid') return color;
    return `url(#${texture})`;
  };

  return createElement(
    'div',
    { className: 'house-container' },
    createElement(
      'svg',
      {
        width: '350',
        height: '350',
        viewBox: '0 0 300 300',
        className: 'house-svg'
      },
      createElement(TexturePatterns),

      // Roof
      createElement('path', {
        d: getRoofPath(),
        fill: getTextureFill(house.roof.color, house.roof.texture),
        stroke: '#000',
        strokeWidth: '2',
        style: { color: house.roof.color }
      }),

      // House Body
      createElement('rect', {
        x: '50',
        y: '150',
        width: '200',
        height: '130',
        fill: '#F5DEB3',
        stroke: '#000',
        strokeWidth: '2'
      }),

      // Window
      createElement(
        'g',
        {
          fill: getTextureFill(house.window.color, house.window.texture),
          stroke: '#000',
          strokeWidth: '2',
          style: { color: house.window.color }
        },
        getWindowShape()
      ),

      // Door
      createElement(
        'g',
        {
          fill: getTextureFill(house.door.color, house.door.texture),
          stroke: '#000',
          strokeWidth: '2',
          style: { color: house.door.color }
        },
        getDoorShape()
      ),

      // Door Knob
      createElement('circle', {
        cx: '210',
        cy: '240',
        r: '3',
        fill: '#FFD700'
      })
    )
  );
};

export default HouseVisualization;
import * as seed from 'seed-random';
import { vec } from '@basementuniverse/commonjs';

type CompositeOperation = 'source-over'
  | 'lighter'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light';

type FontStyle = '' | 'normal' | 'italic' | 'bold';

type WidthSign = 'positive' | 'negative';

type IdenticonSettings = {
  size: number;
  baseSeed: string;
  font: string;
  fontStyle: FontStyle;
  fontSize: number;
  backgroundColours: string[];
  initialsColours: string[];
  initialsOffset: vec;
  initialsAlpha: number;
  initialsCompositeOperation: CompositeOperation;
  stripeColours: string[];
  stripeAlpha: number;
  stripeCompositeOperation: CompositeOperation;
  stripes: [number, number];
  stripeWidth: [number, number];
  stripeDeviation: [number, number];
  curveAmount: [number, number];
  curveOffset: [number, number];
  startWidthSign: WidthSign[];
  endWidthSign: WidthSign[];
};

const defaultIdenticonSettings: IdenticonSettings = {
  size: 100,
  baseSeed: '',
  font: 'Helvetica',
  fontStyle: 'bold',
  fontSize: 0.4,
  backgroundColours: [
    '#16a085',
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#1970b9',
    '#9b59b6',
    '#e67e22',
    '#e74c3c',
    '#e0395b',
  ],
  initialsColours: [
    '#ffffff',
  ],
  initialsOffset: vec(),
  initialsAlpha: 1,
  initialsCompositeOperation: 'source-over',
  stripeColours: [
    '#f1c40f',
  ],
  stripeAlpha: 0.15,
  stripeCompositeOperation: 'lighter',
  stripes: [3, 8],
  stripeWidth: [0.2, 0.7],
  stripeDeviation: [-0.5, 0.5],
  curveAmount: [0.2, 0.4],
  curveOffset: [0, 0.5],
  startWidthSign: ['positive', 'negative'],
  endWidthSign: ['positive', 'negative'],
};

const MIN = 0;
const MAX = 1;
const TAU = Math.PI * 2;
const SIGN_FACTOR: {
  [key in WidthSign]: number;
} = {
  positive: 1,
  negative: -1,
};
const RADIUS_PADDING_FACTOR = 2;

export function identicon(
  name: string,
  settings: Partial<IdenticonSettings> = {}
): HTMLCanvasElement {
  const actualSettings = Object.assign(
    {},
    defaultIdenticonSettings,
    settings
  );

  // Get name initials
  const initials = name
    .split(/[\s\-']/)
    .map(i => i[0].toUpperCase())
    .join('');

  // Seed the RNG
  const actualSeed = `${settings.baseSeed}${name}`;
  seed(actualSeed, { global: true });

  // Create canvas
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = actualSettings.size;
  canvas.height = actualSettings.size;

  // Draw the identicon
  draw(context, actualSettings, initials);

  // Reset seeded RNG
  seed.resetGlobal();

  return canvas;
}

function draw(
  context: CanvasRenderingContext2D,
  settings: IdenticonSettings,
  initials: string
): void {
  context.save();

  // Generate and fill background colour
  const colour = Math.randomIntBetween(0, Math.max(
    settings.backgroundColours.length,
    settings.stripeColours.length,
    settings.initialsColours.length,
  ) - 1);
  context.fillStyle = settings.backgroundColours[
    Math.clamp(colour, 0, settings.backgroundColours.length - 1)
  ];
  context.fillRect(0, 0, settings.size, settings.size);

  // Draw a random number of stripes
  context.save();
  context.fillStyle = settings.stripeColours[
    Math.clamp(colour, 0, settings.stripeColours.length - 1)
  ];
  context.globalAlpha = settings.stripeAlpha;
  context.globalCompositeOperation = settings.stripeCompositeOperation;
  const countStripes = Math.randomIntBetween(
    settings.stripes[MIN],
    settings.stripes[MAX]
  );
  let theta = Math.random() * TAU;  // Initial random angle
  for (let i = 0; i < countStripes; i++) {
    drawStripe(context, settings, theta);

    // Angle increases or decreases randomly for each stripe
    theta += Math.randomBetween(
      settings.stripeDeviation[MIN],
      settings.stripeDeviation[MAX]
    );
  }
  context.restore();

  // Draw initials
  drawInitials(context, settings, initials, colour);

  context.restore();
}

function drawStripe(
  context: CanvasRenderingContext2D,
  settings: IdenticonSettings,
  t1: number
): void {

  // Calculate start/end angles
  const s1 = SIGN_FACTOR[settings.startWidthSign.shuffle()[0] as WidthSign];
  const t2 = t1 + Math.randomBetween(
    settings.stripeWidth[MIN],
    settings.stripeWidth[MAX]
  ) * s1;
  const t3 = t1 + Math.PI + Math.randomBetween(
    settings.curveOffset[MIN],
    settings.curveOffset[MAX]
  );
  const s2 = SIGN_FACTOR[settings.endWidthSign.shuffle()[0] as WidthSign];
  const t4 = t3 + Math.randomBetween(
    settings.stripeWidth[MIN],
    settings.stripeWidth[MAX]
  ) * s2;
  const t5 = t1 + Math.PI / 2;  // Curve control point angle

  // Use angles to get starting points on a circle surrounding the canvas
  const center = vec.mul(vec(settings.size), 0.5);
  const radius = Math.sqrt(
    center.x * center.x + center.y * center.y
  ) * RADIUS_PADDING_FACTOR;
  const a1 = pointOnCircle(center, radius, t1);
  const a2 = pointOnCircle(center, radius, t2);
  const b1 = pointOnCircle(center, radius, t3);
  const b2 = pointOnCircle(center, radius, t4);
  const c = pointOnCircle(center, radius * Math.randomBetween(
    settings.curveAmount[MIN],
    settings.curveAmount[MAX]
  ), t5);

  // Draw stripe path
  context.beginPath();
  context.moveTo(a1.x, a1.y);
  context.quadraticCurveTo(c.x, c.y, b1.x, b1.y);
  context.lineTo(b2.x, b2.y);
  context.quadraticCurveTo(c.x, c.y, a2.x, a2.y);
  context.closePath();
  context.fill();
}

function pointOnCircle(
  center: vec,
  radius: number,
  theta: number
): vec {
  return vec.add(
    center,
    vec(
      radius * Math.sin(theta),
      radius * Math.cos(theta)
    )
  );
}

function drawInitials(
  context: CanvasRenderingContext2D,
  settings: IdenticonSettings,
  initials: string,
  colourIndex: number
): void {
  context.save();
  context.font = `${settings.fontStyle} ${Math.floor(settings.size * settings.fontSize)}px ${settings.font}`;
  context.fillStyle = settings.initialsColours[
    Math.clamp(colourIndex, 0, settings.initialsColours.length - 1)
  ];
  context.globalAlpha = settings.initialsAlpha;
  context.globalCompositeOperation = settings.initialsCompositeOperation;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  const center = vec.mul(vec(settings.size), 0.5);
  context.fillText(
    initials,
    center.x + settings.initialsOffset.x,
    center.y + settings.initialsOffset.y
  );
  context.restore();
}

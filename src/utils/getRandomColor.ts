export const getRandomColor = (): string => {
  const HEX_VALUE = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  let HEX_COLOR = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = getRandomIndex(HEX_VALUE.length);
    const randomHexValue = HEX_VALUE[randomIndex];
    HEX_COLOR += randomHexValue;
  }
  return HEX_COLOR;
};

export const getRandomIndex = (limit: number): number => {
  const randomIndex = Math.floor(Math.random() * limit);
  return randomIndex;
};

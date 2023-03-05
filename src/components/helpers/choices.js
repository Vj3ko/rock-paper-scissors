export const choiceBeats = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

export const difficulty = {
  easy: ['rock', 'paper', 'scissors'],
  hard: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
};

export const getHouseOption = level => {
  const houseOptions = difficulty[level];
  const randomOption = Math.floor(Math.random() * houseOptions.length);

  return houseOptions[randomOption];
};

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { click, draw, lose, win } from '../../audio';
import {
  choiceBeats,
  getHouseOption,
  playSound,
} from '../../components/helpers';
import { StyledMain } from './Game.styled';
import OptionsPanel from './OptionsPanel/OptionsPanel';
import SimulationPanel from './SimulationPanel/SimulationPanel';

const Game = ({ level, handleScoreChange, mute }) => {
  const [playerOption, setPlayerOption] = useState('');
  const [houseOption, setHouseOption] = useState(getHouseOption(level));
  const [startSimulation, setStartSimulation] = useState(false);
  const [gameOutcome, setGameOutcome] = useState(false);
  const [winner, setWinner] = useState('');
  const [gameOutcomeText, setGameOutcomeText] = useState('');

  useEffect(() => {
    if (playerOption) {
      simulateGame(playerOption, houseOption);
    }
  }, [playerOption]);

  //if want's to change lvl in the middle of simulation
  useEffect(() => {
    handlePlayAgain();
  }, [level]);

  function simulateGame(player, house) {
    const winOutcome = choiceBeats[player].includes(house);
    const loseOutcome = !choiceBeats[player].includes(house);
    const drawOutcome = player === house;

    setStartSimulation(true);

    let winner;
    let sound;
    if (drawOutcome) {
      setGameOutcomeText('draw');
      winner = '';
      sound = draw;
    } else if (winOutcome) {
      winner = 'player';
      sound = win;
      setGameOutcomeText('you win');
    } else if (loseOutcome) {
      setGameOutcomeText('you lose');
      winner = 'house';
      sound = lose;
    }

    setTimeout(() => {
      setGameOutcome(true);
    }, 1500);

    setTimeout(() => {
      setWinner(winner);
      handleScoreChange(winner);
      playSound(mute, sound);
    }, 2000);
  }

  function handlePlayerChoice(e) {
    setPlayerOption(e.target.value);
    playSound(mute, click);
  }

  function handlePlayAgain() {
    setStartSimulation(false);
    setGameOutcome(false);
    setPlayerOption('');
    setWinner('');
    setHouseOption(getHouseOption(level));
    playSound(mute, click);
  }

  return (
    <StyledMain>
      <AnimatePresence mode='wait'>
        {startSimulation ? (
          <SimulationPanel
            handlePlayAgain={handlePlayAgain}
            playerChoice={playerOption}
            houseChoice={houseOption}
            gameOutcome={gameOutcome}
            winner={winner}
            gameOutcomeText={gameOutcomeText}
          />
        ) : (
          <OptionsPanel
            mode={level}
            handlePlayerChoice={handlePlayerChoice}
          />
        )}
      </AnimatePresence>
    </StyledMain>
  );
};

export default Game;

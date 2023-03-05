import { motion } from 'framer-motion';
import { scale } from '../../../animations';
import { ChoiceButton } from '../../../styles';
import { StyledSection } from './SimulationPanel.styled';

const SimulationPanel = ({
  handlePlayAgain,
  playerChoice,
  houseChoice,
  gameOutcome,
  winner,
  gameOutcomeText,
}) => {
  const playerContainerClass = `${
    winner === 'player' ? 'player--container winner' : 'player--container'
  }`;

  const houseContainerClass = `${
    winner === 'house' ? 'house--container winner' : 'house--container '
  }`;

  return (
    <StyledSection
      $showstatus={gameOutcome}
      as={motion.div}
      variants={scale}
      initial='hidden'
      animate='show'
      exit='exit'
      transition='transition'
    >
      <div className={playerContainerClass}>
        <ChoiceButton value={playerChoice} />
        <h3>You picked</h3>
      </div>
      <div className='game--status'>
        <h1>{gameOutcomeText}</h1>
        <button
          onClick={handlePlayAgain}
          className='playagain--btn'
        >
          Play again
        </button>
      </div>
      <div className={houseContainerClass}>
        <ChoiceButton value={gameOutcome ? houseChoice : ''} />
        <h3>the house picked</h3>
      </div>
    </StyledSection>
  );
};

export default SimulationPanel;

import { motion } from 'framer-motion';
import { scale } from '../../../animations';
import { ChoiceButton } from '../../../styles';
import { difficulty } from '../../helpers';
import { StyledDiv } from './OptionsPanel.styled';

const OptionsPanel = ({ mode, handlePlayerChoice }) => {
  return (
    <StyledDiv
      mode={mode}
      as={motion.div}
      key={mode}
      variants={scale}
      initial='hidden'
      animate='show'
      exit='exit'
      transition='transition'
    >
      {difficulty[mode].map((option, index) => (
        <ChoiceButton
          key={index}
          value={option}
          mode={mode}
          onClick={handlePlayerChoice}
        />
      ))}
    </StyledDiv>
  );
};

export default OptionsPanel;

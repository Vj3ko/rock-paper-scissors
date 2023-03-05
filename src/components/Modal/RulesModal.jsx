import { motion } from 'framer-motion';
import { scale } from '../../animations';
import { rulesBonusImg, rulesImg } from '../../images';
import { StyledModal } from './RulesModal.styled';

const RulesModal = ({ level, handleShowRules }) => {
  return (
    <StyledModal onClick={handleShowRules}>
      <motion.div
        variants={scale}
        initial='hidden'
        animate='show'
        transition='transition'
        exit='exit'
        onClick={e => e.stopPropagation()}
      >
        <h1>Rules</h1>
        <img
          src={level === 'easy' ? rulesImg : rulesBonusImg}
          alt='rules of the game'
        />
        <button onClick={handleShowRules}></button>
      </motion.div>
    </StyledModal>
  );
};

export default RulesModal;

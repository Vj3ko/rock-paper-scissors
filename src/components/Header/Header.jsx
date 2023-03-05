import { motion } from 'framer-motion';
import { scale } from '../../animations';
import { logoBonusImg, logoImg } from '../../images';
import { StyledHeader } from './Header.styled';

const Header = ({ score, level }) => {
  return (
    <StyledHeader level={level}>
      <motion.img
        src={level === 'easy' ? logoImg : logoBonusImg}
        alt='rock paper scissors'
        key={level}
        variants={scale}
        initial='hidden'
        animate='show'
        transition='transition'
      />

      <div className='score__tracker'>
        <span className='score__tracker--title'>Score</span>
        <motion.span
          key={score}
          className='score__tracker--result'
          variants={scale}
          initial='hidden'
          animate='show'
          transition='transition'
        >
          {score}
        </motion.span>
      </div>
    </StyledHeader>
  );
};

export default Header;

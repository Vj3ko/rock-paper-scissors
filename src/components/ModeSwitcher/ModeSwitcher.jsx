import { ButtonStyled } from '../../styles';
import { ModeSwitcherStyled } from './ModeSwitcher.styled';

const ModeSwitcher = ({ level, handleModeChoice }) => {
  return (
    <ModeSwitcherStyled level={level}>
      <ButtonStyled
        value='easy'
        onClick={e => handleModeChoice(e.target.value)}
        disabled={level === 'easy' ? true : false}
      >
        easy
      </ButtonStyled>
      <ButtonStyled
        value='hard'
        onClick={e => handleModeChoice(e.target.value)}
        disabled={level === 'hard' ? true : false}
      >
        hard
      </ButtonStyled>
      <span className='switcher'></span>
    </ModeSwitcherStyled>
  );
};

export default ModeSwitcher;

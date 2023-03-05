import styled from 'styled-components';

export const ModeSwitcherStyled = styled.div`
  width: fit-content;
  display: flex;
  border-radius: ${({ theme }) => theme.border_radius};
  background: transparent;
  color: ${({ theme }) => theme.colors.text.white};
  border: 1px solid white;
  position: relative;

  button {
    border: none;

    &[value='hard'] {
      pointer-events: ${({ level }) => (level === 'hard' ? 'none' : 'initial')};
    }

    &[value='easy'] {
      pointer-events: ${({ level }) => (level === 'easy' ? 'none' : 'initial')};
    }
  }

  .switcher {
    position: absolute;
    width: 45%;
    height: 75%;
    top: 50%;
    left: ${({ level }) => (level === 'easy' ? '3%' : '52%')};
    transform: translateY(-50%);
    background: ${({ theme }) => theme.colors.text.headerOutline};
    border-radius: ${({ theme }) => theme.border_radius};
    transition: left 350ms;
  }
`;

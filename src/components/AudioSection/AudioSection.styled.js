import styled from 'styled-components';
import { devices as device } from '../../styles/utilities/Breakpoints';

export const StyledAudioSection = styled.section`
  position: absolute;
  top: 5px;
  right: 30px;
  display: flex;
  gap: 12px;

  button {
    background: transparent;
    transition: transform 350ms;

    &:hover,
    &:focus {
      transform: scale(1.2);
    }

    svg {
      font-size: 20px;

      @media ${device.laptop} {
        font-size: 30px;
      }
    }

    &.game--music {
      svg {
        fill: ${({ playing, theme }) =>
          playing ? theme.colors.text.white : theme.colors.text.headerOutline};
      }
    }

    &.game--audio {
      svg {
        fill: ${({ mute, theme }) =>
          mute ? theme.colors.text.headerOutline : theme.colors.text.white};
      }
    }
  }
`;

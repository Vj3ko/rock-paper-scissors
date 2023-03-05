import styled from 'styled-components';
import { devices as device } from '../../../styles/utilities/Breakpoints';

export const StyledSection = styled.section`
  width: 100%;
  max-width: 300px;
  position: relative;
  top: -80px;
  ${({ theme }) => theme.flexMixin('space-between', 'unset')}
  transition: max-width 500ms ease-in-out;

  @media ${device.tablet} {
    max-width: 400px;
  }

  @media ${device.laptop} {
    max-width: ${({ $showstatus }) => ($showstatus ? '800px' : '500px')};
  }

  .player--container,
  .house--container {
    flex-direction: column;
    gap: 30px;
    ${({ theme }) => theme.flexMixin('unset', 'center')}

    &.winner {
      button {
        z-index: 1;

        &::before {
          opacity: 0.1;
          width: 300%;
          height: 300%;
        }
      }
    }

    button {
      pointer-events: none;
      z-index: 10;
      width: 110px;
      height: 110px;
      position: relative;
      top: unset;
      left: unset;
      right: unset;
      bottom: unset;
      transform: unset;

      @media ${device.mobileM} {
        width: 130px;
        height: 130px;
      }

      @media ${device.tablet} {
        width: 160px;
        height: 160px;
      }

      @media ${device.laptop} {
        width: 200px;
        height: 200px;
      }
    }

    h3 {
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.text.white};

      @media ${device.tablet} {
        font-size: 16px;
      }

      @media ${device.laptop} {
        font-size: 20px;
      }
    }
  }

  .game--status {
    visibility: ${({ $showstatus }) => ($showstatus ? 'visible' : 'hidden')};
    opacity: ${({ $showstatus }) => ($showstatus ? 1 : 0)};
    flex-direction: column;
    gap: 20px;
    transition: 350ms;
    position: absolute;
    bottom: -150px;
    left: 50%;
    transform: translateX(-50%)
      ${({ $showstatus }) => ($showstatus ? 'scale(1)' : 'scale(0)')};
    ${({ theme }) => theme.flexMixin('unset', 'center')}
    transition: transform 350ms 500ms;

    @media ${device.laptop} {
      bottom: unset;
      top: 50%;
      transform: translate(-50%, -50%)
        ${({ $showstatus }) => ($showstatus ? 'scale(1)' : 'scale(0)')};
    }

    h1 {
      font-size: 40px;
      font-weight: bold;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.text.white};
      white-space: nowrap;

      @media ${device.tablet} {
        font-size: 50px;
      }

      @media ${device.laptop} {
        font-size: 60px;
      }
    }

    .playagain--btn {
      width: 100%;
      padding: 10px 0;
      font-size: 10px;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      border-radius: ${({ theme }) => theme.border_radius};
      background: ${({ theme }) => theme.colors.text.white};
      color: ${({ theme }) => theme.colors.text.darkText};
      border: 1px solid white;
      transition: 350ms;

      @media ${device.tablet} {
        font-size: 14px;
      }

      &:hover {
        background: transparent;
        color: ${({ theme }) => theme.colors.text.white};
      }
    }
  }
`;

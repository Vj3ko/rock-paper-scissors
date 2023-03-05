import styled from 'styled-components';
import {
  lizardIcon,
  paperIcon,
  rockIcon,
  scissorsIcon,
  spockIcon,
} from '../images';
import { devices as device } from './utilities/Breakpoints';

export const ChoiceButton = styled.button`
  background-color: white;
  border-radius: 50%;
  width: ${({ mode }) => (mode === 'easy' ? '115px' : '90px')};
  height: ${({ mode }) => (mode === 'easy' ? '115px' : '90px')};
  position: absolute;
  border-width: 15px;
  border-style: solid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40%;

  &::before {
    content: '';
    position: absolute;
    width: 1%;
    height: 1%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-image: radial-gradient(
      hsl(0deg 0% 90%) 40%,
      hsl(0deg 0% 63%) 40%,
      hsl(0deg 0% 63%) 55%,
      hsl(0deg 0% 45%) 55%
    );
    opacity: 0;
    transition: 250ms;
  }

  &:hover::before,
  &:focus::before {
    opacity: 0.1;
    width: 175%;
    height: 175%;
  }

  &[value=''] {
    border-color: ${({ theme }) => theme.colors.game.empty};
    background-color: ${({ theme }) => theme.colors.game.empty};
    background-image: unset;
    box-shadow: unset;
  }

  &[value='paper'] {
    left: ${({ mode }) => (mode === 'easy' ? '-15%' : 'unset')};
    right: ${({ mode }) => (mode === 'easy' ? 'unset' : '-20%')};
    top: ${({ mode }) => (mode === 'easy' ? '-25%' : '15%')};
    border-color: ${({ theme }) => theme.colors.game.paper_1};
    background-image: url(${paperIcon});
    box-shadow: inset 0 0.3rem #bac0d4,
      0 0.3rem 0 ${({ theme }) => theme.colors.game.paper_2};

    @media ${device.mobileM} {
      left: ${({ mode }) => (mode === 'easy' ? '-25%' : 'unset')};
    }
  }

  &[value='scissors'] {
    left: ${({ mode }) => (mode === 'easy' ? 'unset' : '25%')};
    right: ${({ mode }) => (mode === 'easy' ? '-15%' : 'unset')};
    top: ${({ mode }) => (mode === 'easy' ? '-25%' : '-20%')};
    border-color: ${({ theme }) => theme.colors.game.scissors_1};
    background-image: url(${scissorsIcon});
    box-shadow: inset 0 0.3rem #bac0d4,
      0 0.3rem 0 ${({ theme }) => theme.colors.game.scissors_2};

    @media ${device.mobileM} {
      right: ${({ mode }) => (mode === 'easy' ? '-25%' : 'unset')};
    }
  }

  &[value='rock'] {
    left: ${({ mode }) => (mode === 'easy' ? '50%' : 'unset')};
    right: ${({ mode }) => (mode === 'easy' ? 'unset' : '-20%')};
    bottom: -15%;
    transform: translateX(-50%);
    border-color: ${({ theme }) => theme.colors.game.rock_1};
    background-image: url(${rockIcon});
    box-shadow: inset 0 0.3rem #bac0d4,
      0 0.3rem 0 ${({ theme }) => theme.colors.game.rock_2};

    @media ${device.mobileM} {
      bottom: ${({ mode }) => (mode === 'easy' ? '-25%' : '-15%')};
    }
  }

  &[value='lizard'] {
    display: ${({ mode }) => (mode === 'easy' ? 'none' : 'initial')};
    left: 20%;
    bottom: -15%;
    transform: translateX(-50%);
    border-color: ${({ theme }) => theme.colors.game.lizard_1};
    background-image: url(${lizardIcon});
    box-shadow: inset 0 0.3rem #bac0d4,
      0 0.3rem 0 ${({ theme }) => theme.colors.game.lizard_2};
  }

  &[value='spock'] {
    display: ${({ mode }) => (mode === 'easy' ? 'none' : 'initial')};
    left: 0;
    top: 15%;
    transform: translateX(-50%);
    border-color: ${({ theme }) => theme.colors.game.cyan_1};
    background-image: url(${spockIcon});
    box-shadow: inset 0 0.3rem #bac0d4,
      0 0.3rem 0 ${({ theme }) => theme.colors.game.cyan_2};
  }

  @media ${device.mobileM} {
    width: ${({ mode }) => (mode === 'easy' ? '130px' : '90px')};
    height: ${({ mode }) => (mode === 'easy' ? '130px' : '90px')};
  }

  @media ${device.tablet} {
    width: ${({ mode }) => (mode === 'easy' ? '160px' : '105px')};
    height: ${({ mode }) => (mode === 'easy' ? '160px' : '105px')};
  }

  @media ${device.laptop} {
    width: ${({ mode }) => (mode === 'easy' ? '180px' : '130px')};
    height: ${({ mode }) => (mode === 'easy' ? '180px' : '130px')};
  }
`;

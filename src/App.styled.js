import styled from 'styled-components';
import { devices as device } from './styles/utilities/Breakpoints';

export const Container = styled.div`
  padding: 30px;
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    padding: 50px;
    overflow: initial;
  }
`;

export const ActionContainer = styled.div`
  ${({ theme }) => theme.flexMixin('space-between', 'center')}
  flex-wrap: wrap;
  gap: 10px;

  svg {
    font-size: 24px;
    fill: ${({ theme }) => theme.colors.text.white};
    cursor: pointer;
    transition: 350ms;
    margin-left: auto;

    &:hover,
    &:focus {
      transform: scale(1.2);
    }

    @media ${device.mobileL} {
      margin-right: auto;
      margin-left: 10px;
    }

    @media ${device.tablet} {
      font-size: 30px;
    }
  }

  & > :last-child {
    flex: 1;
  }

  @media ${device.mobileL} {
    & > :last-child {
      flex: unset;
    }
  }
`;

import styled from 'styled-components';
import { pentagonIcon, triangleIcon } from '../../../images';
import { devices as device } from '../../../styles/utilities/Breakpoints';

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
  background-image: ${({ mode }) =>
    mode === 'easy' ? `url(${triangleIcon})` : `url(${pentagonIcon})`};
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  @media ${device.tablet} {
    max-width: 250px;
    height: 250px;
  }

  @media ${device.laptop} {
    max-width: 300px;
    height: 300px;
  }
`;

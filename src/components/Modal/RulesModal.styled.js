import styled from 'styled-components';
import { closeIcon } from '../../images';
import { devices as device } from '../../styles/utilities/Breakpoints';

export const StyledModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  ${({ theme }) => theme.flexMixin('center', 'center')}

  div {
    width: 100%;
    height: 100%;
    padding: 50px;
    background-color: ${({ theme }) => theme.colors.text.white};
    flex-direction: column;
    gap: 100px;
    position: relative;
    ${({ theme }) => theme.flexMixin('space-between', 'center')}

    @media ${device.tablet} {
      width: 600px;
      height: 600px;
      flex-direction: row;
      align-items: flex-start;
      border-radius: ${({ theme }) => theme.border_radius};
    }
  }

  h1 {
    font-size: 30px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text.darkText};
  }

  img {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media ${device.tablet} {
      width: 65%;
    }
  }

  button {
    background-color: transparent;
    padding: 10px;
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

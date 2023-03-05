import styled from 'styled-components';
import { devices as device } from './utilities/Breakpoints';

export const ButtonStyled = styled.button`
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 10px 20px;
  border-radius: ${({ theme }) => theme.border_radius};
  background: transparent;
  color: white;
  border: 1px solid white;
  width: fit-content;

  transition: 350ms;

  @media ${device.tablet} {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    background: white;
    color: ${({ theme }) => theme.colors.text.darkText};
  }
`;

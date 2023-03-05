import styled from 'styled-components';
import { devices as device } from '../../styles/utilities/Breakpoints';

export const StyledHeader = styled.header`
  padding: 10px;
  border: 3px solid ${({ theme }) => theme.colors.text.headerOutline};
  border-radius: ${({ theme }) => theme.border_radius};
  ${({ theme }) => theme.flexMixin('space-between', 'center')}

  img {
    width: 100%;
    max-width: ${({ level }) => (level === 'easy' ? '90px' : '60px')};

    @media ${device.mobileL} {
      max-width: ${({ level }) => (level === 'easy' ? '100px' : '68px')};
    }

    @media ${device.tablet} {
      max-width: ${({ level }) => (level === 'easy' ? '120px' : '75px')};
    }

    @media ${device.laptop} {
      max-width: ${({ level }) => (level === 'easy' ? '150px' : '100px')};
    }
  }

  .score__tracker {
    background: ${({ theme }) => theme.colors.text.white};
    padding: 6px 16px;
    border-radius: ${({ theme }) => theme.border_radius};

    ${({ theme }) => theme.flexMixin('unset', 'center')}
    flex-direction: column;

    @media ${device.mobileL} {
      padding: 10px 20px;
    }

    @media ${device.tablet} {
      padding: 14px 24px;
    }

    @media ${device.laptop} {
      padding: 18px 26px;
    }

    &--title {
      font-size: 10px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.text.scoreText};

      @media ${device.laptop} {
        font-size: 16px;
      }
    }

    &--result {
      font-size: 30px;

      @media ${device.laptop} {
        font-size: 40px;
      }
    }
  }
`;

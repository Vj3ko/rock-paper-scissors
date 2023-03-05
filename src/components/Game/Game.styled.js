import styled from 'styled-components';

export const StyledMain = styled.main`
  flex: 2;
  z-index: 10;
  ${({ theme }) => theme.flexMixin('center', 'center')}
`;

import styled from 'styled-components';
import { CaseProps } from '../styles/styled';

const Case = styled.section<CaseProps>`
  display: flex;
  height: 95vh;
  background: ${({ background }) => background };
  margin-bottom: ${({ marginBottom }) => marginBottom };

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
  }
`;

export default Case;

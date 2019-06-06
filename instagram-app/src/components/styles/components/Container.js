import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 77px;
  margin: auto;
  ${props => props.header && css`
  max-width: 1010px;
  padding: 26px 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
`}
  ${props => props.search && css`
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
  height: 28px;
`}
  ${props => props.post && css`
  max-width: 614px;
  height: auto;  
`}
`;

export default Container;
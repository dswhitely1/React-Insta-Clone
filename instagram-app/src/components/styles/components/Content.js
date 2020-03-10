import styled, { css } from 'styled-components';

const Content = styled.div`
  display: flex;
  align-items: center;
  ${props => props.left && css`
    justify-content: flex-start;
`}
  ${props => props.right && css`
  justify-content: flex-end;  
`}
  ${props => props.actionBar && css`
  height: 40px;
  margin-top: 4px;
  padding: 0 16px;  
`}
  ${props => props.actionBarIcons && css`
  margin-left: 16px;
  &:first-child {
  margin-left: 0;
  }
`}
  ${props => props.header && css`
  max-width: 614px;
  margin: auto;
  height: 60px;
  padding: 0 16px;
  span {
  margin-left: 10px;
  }
`}
  ${props => props.post && css`
  margin-bottom: 60px;
  background-color: white;
  
  display: block;
`}
  ${props => props.column && css`
  flex-direction: column;
`}
  ${props => props.searchResult && css`
  margin: auto;
  width: 100%;
  font-size: 3.2rem;
  height: 100vh;
  justify-content: center;
`}
  ${props => props.commentSection && css`
  padding: 0 16px;
  border-top: 1px solid #efefef;
  font-size: 14px;
  color: #999;
  min-height: 56px;
  align-items: stretch;
  align-content: center;
  margin-top: 4px;
  flex-shrink: 0;
  background-color: white;
`}
`;

export default Content;
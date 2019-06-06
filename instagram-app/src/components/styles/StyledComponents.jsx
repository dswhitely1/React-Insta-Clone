import styled from 'styled-components';


export const SearchBox = styled.input`
  font-size: 16px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 3px 10px 3px 26px;
  z-index: 2;
`;

export const TextBold = styled.span`
  font-weight: 600;
  font-size: 14px;
`;



export const AddCommentInput = styled.input`
  height: 18px;
  color: #262626;
  border: 0;
  outline: 0;
  padding: 0;
  resize: none;
  margin: auto;
  width: 100%;
  background: white 0 0;
`;

export const AddCommentButton = styled.button`
  border: 0;
  color: #3897f0;
  opacity: .3;
  display: inline;
  padding: 0;
  pointer-events: none;
  background-color: white;
  float: right;
  `;

export const DeleteIcon = styled.div`
  background-repeat: no-repeat;
  background-position: -324px -53px;
  height: 26px;
  width: 26px;
  opacity: 0;
  cursor: pointer;
  :hover {
    opacity: 1;
    transition: 1s ease-in-out;
  }
`;


export const LoginPageForm = styled.div`
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 0 0 10px;
  padding: 10px 0;
  width: 378px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LoginInputs = styled.input`
  font-size: 1.2rem;
  padding: 14px 0 2px 8px!important;
  cursor: auto;
  border: 0;
  line-height: 18px;
  color: rgb(0,0,0)!important;
  background: rgb(232,240,254) none !important;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.span`
  text-transform: uppercase;
  color: red;
`;

export const LoginFields = styled.div`
  height: 36px;
  display: flex;
  align-items: stretch;
  border: 0 solid #000;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const LoginButton = styled.button`
  background-color:#3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  position: relative;
  width: 100%;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  cursor: pointer;

`;

export const LoginButtonText = styled.div`
  outline: 0!important;
  align-content: stretch;
  align-items: stretch;
  justify-content: flex-start;
  flex: 0 0 auto;  
`;


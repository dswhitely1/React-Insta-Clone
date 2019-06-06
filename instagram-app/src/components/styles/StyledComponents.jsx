import styled from 'styled-components';
import sprite from '../../imgs/instragram_sprite.png';

export const Navigation = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  //position: fixed;
  //top: 0;
  width: 100%;
  z-index: 1;
  height: 77px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1010px;
  padding: 26px 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 77px;
  margin: 0 auto;
`;

export const LeftContent = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: center;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LeftContentSpacer = styled.div`
  background-color: #262626;
  height: 28px;
  margin: 0 16px;
  width: 1px;
`;

export const Logo = styled.div`
  background-repeat: no-repeat;
  background-position: -239px -202px;
  height: 24px;
  width: 24px;
`;
export const Instagram = styled.div`
  margin-top: 7px;
  background-repeat: no-repeat;
  background-position: -94px -72px;
  height: 29px;
  width: 103px;
`;

export const SearchContainer = styled.div`
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
  height: 28px;
  margin: auto;
`;

export const SearchBox = styled.input`
  font-size: 16px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 3px 10px 3px 26px;
  z-index: 2;
`;

export const Explore = styled.div`
  background-repeat: no-repeat;
  background-position: -52px -286px;
  height: 24px;
  width: 24px;
`;

export const Notifications = styled.div`
  background-repeat: no-repeat;
  background-position: -271px -234px;
  height: 24px;
  width: 24px;
  margin-left: 30px;
`;

export const User = styled.div`
  background-repeat: no-repeat;
  background-position: -271px -104px;
  height: 24px;
  width: 24px;
  margin-left: 30px;
  cursor: pointer;
  &:hover {
    background-position: -271px -130px;
    transition: 1s ease-in;
  }
`;

export const Comment = styled.div`
  background-repeat: no-repeat;
  background-position: -161px -202px;
  height: 24px;
  width: 24px;
  margin-left: 30px;
`;

export const Thumbnail = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const PostSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TextBold = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const PostHeaderSection = styled.div`
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: white;
`;

export const ActionBar = styled.div`
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 4px;
  padding: 0 16px;
  background-color: white;
`;

export const Likes = styled.div`
  height: 18px;
  margin-bottom: 8px;
  padding: 0 16px;
  background-color: white;
`;

export const TimeStamp = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0 16px;
  background-color: white;
  color: rgb(153,153,153)
`;

export const AddCommentSection = styled.div`
  padding: 0 16px;
  border-top: 1px solid #efefef;
  font-size: 14px;
  color: #999;
  min-height: 56px;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
  margin-top: 4px; 
  flex-shrink: 0;  
  background-color: white;
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

export const LikedNotifications = styled.div`
  background-repeat: no-repeat;
  background-position: -271px -208px;
  height: 24px;
  width: 24px;
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

export const SearchResults = styled.div`
  margin: auto;
  width: 100%;
  font-size: 3.2rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const InstagramLogin = styled.div`
 margin-top: 7px;
  background-repeat: no-repeat;
  background-position: -94px -72px;
  height: 29px;
  width: 103px;
  background-image: url(${ sprite });
  display: block;
  transform: scale(1.2);
  margin-bottom: auto;
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

export const InstagramPicture = styled.div`
  height: 128px;
  width: 94px;
  background-position: 0 0;
  background-image: url(${ sprite });
  display:block;
  margin-top: 7px;
  margin-bottom: 7px;
`;

import styled from 'styled-components';

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
  font-weight: 700;
  font-size: 14px;
`;

export const PostHeader = styled.div`
  height: 60px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ActionBar = styled.div`
  height: 40px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 4px;
  padding: 0 16px;
`;

export const Likes = styled.div`
  height: 18px;
  margin-bottom: 8px;
  padding: 0 16px;
`;

export const TimeStamp = styled.span`
  font-size: 14px;
  font-weight: 100;
  color: lightgray;
  padding: 0 16px;
`;

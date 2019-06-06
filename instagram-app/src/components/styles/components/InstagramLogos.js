import styled, { css } from 'styled-components';
import sprite from '../../../imgs/instragram_sprite.png';

const InstagramLogos = styled.div`
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  background-image: url(${sprite});
  display: block;
  
  
  ${props =>
  props.logo && css`
      background-position: -239px -202px;
`
  }
  ${props => props.instagram && css`
  height: 29px;
  width: 103px;
  background-position: -94px -72px;
  margin-top: 7px;
`
  }
  ${props => props.right && css`
  margin-left: 30px;
`}
  ${props => props.explore && css`
    background-position: -52px -286px;
`}
  ${props => props.notifications && css`
    background-position: -271px -234px;
`}
  ${props => props.liked && css`
  background-position: -271px -208px;
`}
  ${props => props.user && css`
  background-position: -271px -104px;
  cursor: pointer;
  &:hover {
    background-position: -271px -130px;
    transition: 1s ease-in;
  }`
  }
  ${props => props.picture && css`
    height: 128px;
    width: 94px;
    background-position: 0 0;
    margin-top: 7px;
    margin-bottom: 7px;
`}
  ${props => props.login && css`
  transform: scale(1.2);
  margin-bottom: auto;
`}
  ${props => props.comment && css`
  background-position: -161px -202px;
  margin-left: 16px;
`}
  ${props => props.delete && css`
  background-position: -324px -53px;
`}
  
  
`;

export default InstagramLogos;

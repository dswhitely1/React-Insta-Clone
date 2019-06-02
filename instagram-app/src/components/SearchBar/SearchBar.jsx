import React, {Component} from 'react';
import styled from 'styled-components';

import './SearchBar.scss';

const Navigation = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  height: 77px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1010px;
  padding: 26px 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 77px;
  margin: 0 auto;
`;

const LeftContent = styled.div`
 display: flex;
 justify-content: flex-start;
 align-items: center;
`;

const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LeftContentSpacer = styled.div`
  background-color: #262626;
  height: 28px;
  margin: 0 16px;
  width: 1px;
`;

const Logo = styled.span`
  background-repeat: no-repeat;
  background-position: -239px -202px;
  height: 24px;
  width: 24px;
`;
const Instagram = styled.span`
  margin-top: 7px;
  background-repeat: no-repeat;
  background-position: -94px -72px;
  height: 29px;
  width: 103px;
`;

const SearchContainer = styled.div`
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
  height: 28px;
  margin: auto;
`;

const SearchBox = styled.input`
  font-size: 16px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  color: #262626;
  outline: 0;
  padding: 3px 10px 3px 26px;
  z-index: 2;
`

const Explore = styled.span`
  background-repeat: no-repeat;
  background-position: -52px -286px;
  height: 24px;
  width: 24px;
`;

const Notifications = styled.span`
  background-repeat: no-repeat;
  background-position: -271px -234px;
  height: 24px;
  width: 24px;
  margin-left: 30px;
`;

const User = styled.span`
  background-repeat: no-repeat;
  background-position: -271px -104px;
  height: 24px;
  width: 24px;
  margin-left: 30px;
`;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: '',
        };
    }

    handleChange = e => {
        this.setState({formValue: e.target.value});
    };

    render() {
        const {formValue} = this.state;
        return (
            <Navigation>
                <Container>
                    <LeftContent>
                        <Logo className={'sprite sprite-show'}/>
                        <LeftContentSpacer/>
                        <Instagram className={'sprite sprite-show'}/>
                    </LeftContent>
                    <SearchContainer>
                        <SearchBox value={formValue} onChange={this.handleChange} placeholder={'Search'}/>
                    </SearchContainer>
                    <RightContent>
                        <Explore className={'sprite sprite-show'}/>
                        <Notifications className={'sprite sprite-show'}/>
                        <User className={'sprite sprite-show'}/>
                    </RightContent>
                </Container>
            </Navigation>
        );
    }
}

export default SearchBar;


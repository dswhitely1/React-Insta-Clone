import React, { Component } from 'react';
// import './SearchBar.scss';
import {
  Container,
  Explore,
  Instagram,
  LeftContent,
  LeftContentSpacer,
  Logo,
  Navigation,
  Notifications,
  RightContent,
  SearchBox,
  SearchContainer,
  User,
} from '../Layout/StyledComponents';

class SearchBar extends Component {
  state = {
    formValue: '',
  };

  handleChange = e => {
    this.setState( { formValue: e.target.value } );
  };

  render() {
    const { formValue } = this.state;
    return (
      <Navigation>
        <Container>
          <LeftContent>
            <Logo className={ 'sprite sprite-show' }/>
            <LeftContentSpacer/>
            <Instagram className={ 'sprite sprite-show' }/>
          </LeftContent>
          <SearchContainer>
            <SearchBox value={ formValue } onChange={ this.handleChange }
                       placeholder={ 'Search' }/>
          </SearchContainer>
          <RightContent>
            <Explore className={ 'sprite sprite-show' }/>
            <Notifications className={ 'sprite sprite-show' }/>
            <User className={ 'sprite sprite-show' }/>
          </RightContent>
        </Container>
      </Navigation>
    );
  }
}

export default SearchBar;


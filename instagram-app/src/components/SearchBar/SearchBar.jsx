import React from 'react';
import PropTypes from 'prop-types';

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
} from '../styles/StyledComponents';

const SearchBar = props => {
  const { searchText, search, logOut } = props;
  return (
    <Navigation>
      <Container>
        <LeftContent>
          <Logo className={'sprite sprite-show'}/>
          <LeftContentSpacer/>
          <Instagram className={'sprite sprite-show'}/>
        </LeftContent>
        <SearchContainer>
          <SearchBox value={searchText} onChange={search}
                     placeholder={'Search'} name={'formValue'}
          />
        </SearchContainer>
        <RightContent>
          <Explore className={'sprite sprite-show'}/>
          <Notifications className={'sprite sprite-show'}/>
          <User className={'sprite sprite-show'} onClick={logOut}/>
        </RightContent>
      </Container>
    </Navigation>
  );
};

SearchBar.propTypes = {
  props: PropTypes.shape({
    searchText: PropTypes.string,
  }),
};

export default SearchBar;


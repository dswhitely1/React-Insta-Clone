import React from 'react';
import PropTypes from 'prop-types';

import { SearchBox } from '../styles/StyledComponents';
import Navbar from '../styles/components/Navbar';
import InstagramLogos from '../styles/components/InstagramLogos';
import Content from '../styles/components/Content';
import styled from 'styled-components';
import Container from '../styles/components/Container';

const LeftContentSpacer = styled.div`
  background-color: #262626;
  height: 28px;
  margin: 0 16px;
  width: 1px;
`;

const SearchBar = props => {
  const { searchText, search, logOut } = props;
  return (
    <Navbar>
      <Container header>
        <Content left>
          <InstagramLogos logo/>
          <LeftContentSpacer/>
          <InstagramLogos instagram/>
        </Content>
        <Container search>
          <SearchBox value={searchText} onChange={search}
                     placeholder={'Search'} name={'formValue'}
          />
        </Container>
        <Content right>
          <InstagramLogos explore right/>
          <InstagramLogos notifications right/>
          <InstagramLogos user right onClick={logOut}/>
        </Content>
      </Container>
    </Navbar>
  );
};

SearchBar.propTypes = {
  props: PropTypes.shape({
    searchText: PropTypes.string,
  }),
};

export default SearchBar;


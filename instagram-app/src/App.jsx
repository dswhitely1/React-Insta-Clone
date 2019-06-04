import React, { Component } from 'react';
import data from './dummy-data';
// Global Styles
import { GlobalStyle } from './components/styles/Global';
// Components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: data,
        };
    }

    render() {
        return (
            <div>
              <GlobalStyle/>
                <SearchBar/>
                <PostContainer posts={this.state.posts}/>
            </div>
        );
    }
}


export default App;

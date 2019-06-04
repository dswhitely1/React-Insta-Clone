import React, { Component } from 'react';
import data from './dummy-data';
// Global Styles
import { GlobalStyle } from './components/styles/Global';
// Components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  state = {
    posts: [],
    nextCommentId: 0,
  };


  componentDidMount() {
    this.setState( { posts: data }, () => {
      let nextCommentId;
      if ( localStorage.getItem( 'nextCommentId' ) !== null ) {
        nextCommentId = JSON.parse( localStorage.getItem( 'nextCommentId' ) );
      }
      if ( nextCommentId === undefined ) {
        nextCommentId = this.generateNextId();
      }
      console.log( nextCommentId );
      this.setState( { nextCommentId: nextCommentId } );
    } );
  }

  addComment = ( postId, comment ) => {
    // this should be fun
  };

  generateNextId() {
    let indices = [];
    console.log( this.state.posts );
    this.state.posts.forEach( post => {
      post.comments.forEach( comment => {
        indices = [...indices, comment.id];
      } );
    } );
    localStorage.setItem( 'nextCommentId', (indices.length + 1).toString() );
    return indices.length + 1;
  }

  handleNextCommentId = () => {
    const nextCommentId = this.state.nextCommentId + 1;
    localStorage.setItem( 'nextCommentId', JSON.stringify( nextCommentId ) );
    this.setState( { nextCommentId: nextCommentId } );
  };

  render() {
    return (
      <div>
        <GlobalStyle/>
        <SearchBar/>
        <PostContainer posts={ this.state.posts }
                       nextId={ this.state.nextCommentId }
                       addComment={ this.addComment }
                       incrementNextId={ this.handleNextCommentId }/>
      </div>
    );
  }
}


export default App;

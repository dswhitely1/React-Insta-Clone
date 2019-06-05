import React, { Component } from 'react';
import data from './dummy-data';
// Global Styles
import { GlobalStyle } from './components/styles/Global';
// Components
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import { SearchResults } from './components/styles/StyledComponents';

class App extends Component {
  state = {
    posts: [],
    filteredPosts: [],
    nextCommentId: 0,
    searchText: '',
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
      let posts;
      if ( localStorage.getItem( 'posts' ) !== null ) {
        posts = JSON.parse( localStorage.getItem( 'posts' ) );
      }
      const statePosts = posts === undefined ? data : posts;
      console.log( nextCommentId );
      this.setState( { posts: statePosts, nextCommentId: nextCommentId } );
    } );
  }

  addComment = ( postId, comment ) => {
    const updatedState = this.state.posts.map( ( post, i ) => {
      if ( i === postId ) {
        return { ...post, comments: [...post.comments, comment] };

      } else {
        return post;
      }
    } );
    console.log( updatedState );
    localStorage.setItem( 'posts', JSON.stringify( updatedState ) );
    const nextCommentId = this.state.nextCommentId + 1;
    localStorage.setItem( 'nextCommentId', JSON.stringify( nextCommentId ) );
    this.setState( { posts: updatedState, nextCommentId: nextCommentId } );
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

  handleDeleteComment = ( postId, commentId ) => {
    const updatedState = this.state.posts.map( ( post, i ) => {
      if ( i === postId ) {
        const updatedComments = post.comments.filter( comment => comment.id !== commentId );
        return { ...post, comments: updatedComments };
      } else {
        return post;
      }
    } );
    localStorage.setItem( 'posts', JSON.stringify( updatedState ) );
    this.setState( { posts: updatedState } );
  };

  handleSearch = e => {
    const filteredPosts = e.target.value !== '' ? this.state.posts.filter( post => post.username.includes( e.target.value ) ) : [];
    this.setState( {
      filteredPosts: filteredPosts,
      searchText: e.target.value,
    } );
  };

  render() {
    return (
      <div>
        <GlobalStyle/>
        <SearchBar search={ this.handleSearch }
                   searchValue={ this.state.searchText }/>
        { this.state.searchText !== '' && this.state.filteredPosts.length === 0 ?
          <SearchResults><h1>No Results Found</h1></SearchResults> :
          <PostContainer
            posts={ this.state.searchText !== '' ? this.state.filteredPosts : this.state.posts }
            nextId={ this.state.nextCommentId }
            addComment={ this.addComment }
            deleteComment={ this.handleDeleteComment }
          /> }
      </div>
    );
  }
}

export default App;

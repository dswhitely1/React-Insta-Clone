import { css } from 'styled-components';

export const Styles = css`
  * {
  box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 18px;
    background-color: #FAFAFA;
  }
  
 
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
  
  P {
    font-size: 1.4rem;
    margin-bottom: 8px;
  }
  
  .sprite {
    background-image: url(imgs/instragram_sprite.png);
  }
  
  .show-sprite {
    display: block;
  }
  
  .post-container {
  max-width: 614px;
  margin: auto;

  .post {
    border: 1px solid lightgray;
    margin-bottom: 60px;
    background-color: white;
    box-shadow: 1px 1px 3px #222222;
  }
  .post-header {
    padding: 0 16px;

    span {
      margin-left: 10px;
    }
  }

  .action-bar {
    div {
      margin-left: 16px;

      &:first-child {
        margin-left: 0;
      }
    }
  }
  .comment-section {
    padding: 0 16px;
  }

  form {
    display: flex;
    flex-grow: 1;
  }
  .delete-icon {
    justify-content: space-between;
    p {
    width: 90%;
    }
  }
}
`;

import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 95%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`

export const TopBar = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  font-family: Inter, sans-serif;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin: 4px 8px;
    cursor: pointer;
  }

  #author {
    font-size: 1rem;
    font-weight: 600;
  }

  #post-info {
  font-size: 0.8rem;
  }
`

export const PostContent = styled.div`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.9rem;
  background: var(--primary-color-4);
  padding: 16px;

`

export const BottomBar = styled.div`
  background: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Inter, sans-serif;
  font-size: 0.8rem;

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin: 4px 6px;
  }

  p {
    margin: 0;
    cursor: pointer;
  }

  #topics {
    font-family: IBM Plex Sans, sans-serif;
    margin-right: 4px;
    font-weight: 600;
  }

`
export const CommentsContainer = styled.div`
  background: #fff;
  width: calc(40vw - 20px);
  margin-top: 5px;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 40px;
`

export const Comment = styled.div`
  font-family: Rubik, sans-serif;
  font-size: 1rem;
  background: var(--primary-color-1);
  width: 550px;
  min-height: 20px;
  padding: 4px 5px;
  border-radius: 4px;
  margin: 8px 0;

  p {
    margin: 2px;
    font-size: 0.8rem;

  }
`

export const NewCommentBtn = styled.button`
  width: 140px;
  height: 32px;
  background: var(--primary-color-8);
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
`
export const CommentInput = styled.input`
  width: 420px;
  height: 30px;
  background: #FFF;
  border: 2px solid #90E0EF;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  padding: 4px;
  margin-top: 8px;
  margin-right: 12px;
`
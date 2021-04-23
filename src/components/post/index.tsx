/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { PostContainer, TopBar, PostContent, BottomBar, CommentsContainer, Comment, NewCommentBtn, CommentInput } from './style';
import dogImg from '../../assets/icons/knight.svg';
import globeImg from '../../assets/icons/public.svg';
import shieldImg from '../../assets/icons/private.svg';
import commentIcon from '../../assets/icons/comments.svg';
import likeIcon from '../../assets/icons/like.svg';
import starIcon from '../../assets/icons/star.svg';
import moduleIcon from '../../assets/icons/module.svg';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { RootStoreType } from '../../redux/store';
import axios from 'axios';

interface IPost {
  id: number;
  title: string
  author: string;
  category: object[];
  tags: object[];
  cover: HTMLImageElement
  public: boolean;
  content: string;
  likes: number;
  stars: number;
  created_at: string;
}

interface IPostProps {
  post:IPost;
}

export const Post = ({ post }: IPostProps) => {
  const [comments, setComments ] = useState<any>([])
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState(false);
  const [comment, setComment] = useState('');
  const created_date = new Date(post.created_at)
  const token = useSelector((state: RootStoreType) => state.session.token);

  const getComments = () => {
    api.get(`/posts/comments/${post.id}/`, { headers: { Authorization: 'Token ' + token }})
    .then((response) => {
        setComments(response.data)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const PostComment = () => {
    const options: any = {
      method: 'POST',
      url: `${process.env.API_URL}/posts/comments/${post.id}/` || `http://localhost:8080/api/posts/comments/${post.id}/`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token
      },
      data: {comment: comment}
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      getComments()
    }).catch(function (error) {
      console.error(error);
    });
    setNewComment(false)
    setComment('')
  }

  useEffect(() => {
      getComments()
  }, [])

  return ( 
    <PostContainer>
      <TopBar>
        <div>
          <img src={dogImg} alt="post-user"/>
          <p id="author" >/{post.author}</p>
          {/* <p id="author" >/{post.author.replace(/@.*$/,"")}</p> */}
          {post.public ? <img src={globeImg} alt=""/> : <img src={shieldImg} alt=""/>}
          <p id="post-info" ><i> postado em {created_date.toLocaleDateString()}</i></p>
        </div>
        <div>
        <img src={likeIcon} alt=""/>
        <img src={starIcon} alt=""/>
        </div>
        
      </TopBar>

      <PostContent>{post.content}</PostContent>

      <BottomBar >
        <div>
          <img src={commentIcon} alt=""/>
          {
            !showComments ?
            <>
              {comments.length > 0
              ? <p onClick={() => setShowComments(!showComments)} >{comments.length} comentários</p> 
              : <p onClick={() => setShowComments(!showComments)} >ver comentários</p>}
            </>
            :
            <p onClick={() => setShowComments(!showComments)} >ocultar comentários</p>
          }
        </div>

        <div>
          <p id="topics" >{post.likes} likes | </p>
          <p id="topics" >{post.stars} stars</p>
          <img src={moduleIcon} alt=""/>
        </div>
        
      </BottomBar>
      
      {showComments &&
        <CommentsContainer id="comentarios">
        {
          comments.length === 0 ?
          <Comment>
            <p>Nenhum comentário por aqui, seja o primeiro a comentar!</p>
          </Comment>
          : 
          comments.map((cmt: any, index: number) => 
            <Comment key={index}>
              <p>{cmt.comment}</p>
            </Comment>
          )
        }
        {
          newComment ?
          <>
            <CommentInput value={comment} onChange={(evt) => setComment(evt.target.value)}/>
            <NewCommentBtn onClick={() => PostComment()}>Comentar</NewCommentBtn>
          </>
          :
          <NewCommentBtn onClick={() => setNewComment(true)}>Comentar</NewCommentBtn>
        }
      </CommentsContainer>}

      
    </PostContainer>
  )
}

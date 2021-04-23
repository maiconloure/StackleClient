/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { History, LocationState } from 'history';
import { useSelector, useDispatch } from 'react-redux';
import { RootStoreType } from '../../redux/store';
import api from '../../services/api';
import { HomeContainer, HeaderBar, LogoBar, SearchBar,UserArea, UserMenu, BannerArea, PostsArea, CardsArea, ChatIcon } from './style';
import { ToastContainer, toast } from 'react-toastify';
import { HomeCard } from '../../components/homecard'
import { Card } from '../../components/card';
import { FormModal } from '../../components/modal';
import MessageLogo from '../../assets/icons/message.svg';
import SeachIcon from '../../assets/icons/search.svg';
import addPostBtn from '../../assets/icons/add.svg'
import userIcon from '../../assets/icons/user_icon.svg';
import arrowDown from '../../assets/icons/seta.svg';
import profileIcon from '../../assets/icons/profile.svg';
import avatarIcon from '../../assets/icons/avatar.svg';
import settingsIcon from '../../assets/icons/setup.svg';
import apiIcon from '../../assets/icons/api.svg';
import logoutIcon from '../../assets/icons/logout.svg';
import bannerImg from '../../assets/images/earth.jpg';
import machineGif from '../../assets/images/machine.gif'
import spacemanGif from '../../assets/images/spaceman.gif'
import { Post } from '../../components/post';
import { postsAction } from '../../redux/actions/post.action';
import axios from 'axios';
import { Chat } from '../../components/chat';

interface ILanding {
  history: History<LocationState>;
}

export const Home = ({ history }: ILanding) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootStoreType) => state.session.user);
  const token = useSelector((state: RootStoreType) => state.session.token);
  const posts = useSelector((state: RootStoreType) => state.posts);
  const [newPostForm, setNewPostForm] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.session === undefined) {
      history.push('/');
    }
  }, [history, user]);


  useEffect(() => {
    getAllPosts()
  }, [])

  const getAllPosts = () => {
    api.get('/posts/', { headers: { Authorization: 'Token ' + token }})
    .then((response) => {
      dispatch(postsAction({posts: response.data}))
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const logOut = () => {
    api.get('/logout/', { headers: { Authorization: 'Token ' + token }})
    .then((response) => {
      localStorage.clear();
      handleToast('Logout efetuado com sucesso!')
      setTimeout(() => {
        history.push('/')
      }, 3000)
    })
    .catch((error) => {
      console.error(error)
      handleToast('Erro ao efetuar logout')
    })
  }

  const newPost = (data: any) => {
    const options: any = {
      method: 'POST',
      url: 'http://localhost:8080/api/posts/',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token
      },
      data: {
        title: data.title,
        category: [{name: 'Gaming'}],
        tags: [{name: 'tech'}],
        content: data.content,
        likes: 0,
        stars: 0
      }
    };
    axios.request(options).then(function (response) {
      handleToast('Postagem realizada com sucesso!')
      setNewPostForm(false)
      getAllPosts()
    }).catch(function (error) {
      handleToast('Erro ao realizar postagem')
      console.error(error)
    });
  }


  const handleToast = (message: String) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };


  return (
    <HomeContainer>
      <ToastContainer />
      <HeaderBar>
        <LogoBar>
          <img src={MessageLogo} alt="logo" />
          <h1>Stackle</h1>
        </LogoBar>
        <SearchBar>
          <img id="searchIcon" src={SeachIcon} alt="search-icon"/>
          <input type="text" name="search" placeholder="Pesquisar"/>
          <img id="addPost" onClick={() => setNewPostForm(true)} src={addPostBtn} alt=""/>
        </SearchBar>
        
      <div id="rightArea">

        <UserArea>
          <img src={userIcon} onClick={() => setUserMenu(!userMenu)} alt="user-icon"/>
          <div id="userText">
            <h2>/{user.username}</h2>
            <p>online</p>
          </div>
          <img id="showMenu" onClick={() => setUserMenu(!userMenu)} src={arrowDown} alt=""/>
          {userMenu && 
          <UserMenu>
              <div>
                <img src={profileIcon} alt="profileIcon"/>
                <p>Perfil</p>
              </div>
              <div>
                <img src={avatarIcon} alt="avatarIcon"/>
                <p>Adicionar Avatar</p>
              </div>
              <div>
                <img src={settingsIcon} alt="settingsIcon"/>
                <p>Configurações</p>
              </div>
              <div >
                <a href="https://gitlab.com/maiconlourenco/socialpost" target="_blank" rel="noopener noreferrer">
                <img src={apiIcon} alt="apiIcon"/>
                <p>API</p>
                </a>
              </div>
              <div onClick={() => logOut()}>
                <img src={logoutIcon} alt="logoutIcon"/>
                <p>Log Out</p>
              </div>
            </UserMenu>}
        </UserArea>
      </div>
      </HeaderBar>

      <BannerArea id="banner">
        <img src={bannerImg} alt="banner"/>
      </BannerArea>

      <PostsArea>
        {Object.keys(posts).reverse().map((key: any) => 
        <Post key={key}  post={posts[key]} />
        )}
      </PostsArea>

      <CardsArea>
        <HomeCard func={() => setNewPostForm(true)} />
        <Card title="GIF OF THE DAY" content={machineGif} />
        <Card title="SPACE" content={spacemanGif} />
      </CardsArea>

      <ChatIcon openChat={openChat} onClick={() => setOpenChat(!openChat)}>
        <p>Chat</p>
       </ChatIcon>
       {openChat && 
       <Chat username={user.username} loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
         </Chat>}

      {newPostForm &&
      <FormModal
      title="Nova Postagem"
      onFinish={newPost}
      exit={() => setNewPostForm(false)}
      fields={[
        {type: 'text', name: 'title', placeholder: 'Título'},
        {type: 'textarea', name: 'content', placeholder: 'Digite aqui sua nova postagem'}      ]}
       />}

    </HomeContainer>
  );
}

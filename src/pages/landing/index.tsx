/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { LandingContainer, Logo, InfoContainer, Title, Slogan, SignUpBtn, LoginForm, Input, FormBtn, SignUpForm, FooterCredits } from './style'
import MessageLogo from '../../assets/icons/message.svg';
import Robot from '../../assets/icons/robothead.svg';
import { FormModal } from '../../components/modal';
import { useSelector, useDispatch } from 'react-redux';
import { requestLogin, registerUser, updateStatus, newPassword } from '../../redux/actions/session.action';
import { RootStoreType } from '../../redux/store';
import { History, LocationState } from 'history';
import { ToastContainer, toast } from 'react-toastify';

interface ILanding {
  history: History<LocationState>;
}

export const Landing = ({ history }: ILanding) => {
  const dispatch = useDispatch();
  const status = useSelector((state: RootStoreType) => state.session.status);
  const user = useSelector((state: RootStoreType) => state.session.user);

  const [form, setForm] = useState('login');
  const [modal, setModal] = useState(false);
  const { register: registerLogin, handleSubmit: handleSubmitLogin, errors: errorsLogin } = useForm();

  const { register, handleSubmit, errors } = useForm();

  const OnFinishLogin = (data: any) => {
    dispatch(requestLogin({ email: data.email, password: data.password }))
  };

  const OnFinishSignUp = (data: any) => {
    dispatch(registerUser({ name: data.firstName, username: data.username , email: data.email, password: data.password }));
  };

  const NewPassword = (data: any) => {
    dispatch(newPassword({ email: data.email, username: data.username, new_password: data.npassword, confirm_password: data.fpassword}))
    setModal(false)
  }

  const handleToast = (message: String) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {

    if (status === 405) {
      handleToast('Erro ao alterar senha, verifique seus dados.')
      dispatch(updateStatus(0));
    }

    if (status === 400 || status === 401) {
      if (form === 'register') {
        handleToast('Erro ao efetuar cadastro, verifique seus dados, ou tente novamente mais tarde.');
      } else if (form === 'login') {
        handleToast('Erro ao efetuar login, verifique seus dados, ou tente novamente mais tarde.');
      }
      dispatch(updateStatus(0));
    }

    if (localStorage.session !== undefined) {
      history.push('/home');
    }

  }, [dispatch, modal, status, user])


  useEffect(() => {
    if (localStorage.session !== undefined) {
      history.push('/home');
    }
  }, [history, user]);
  
  return (
    <LandingContainer>
      <ToastContainer />
      <Logo src={MessageLogo} alt="stackle-logo"/>
      <InfoContainer>
        <Title>Stackle</Title>
        <Slogan>Uma rede para compartilhar suas melhores artigos e se conectar com pessoas que te inspiram.</Slogan>
        { form === 'login' ? 
        <SignUpBtn onClick={() => setForm('register')}>Criar nova conta</SignUpBtn>
        :
        <SignUpBtn onClick={() => setForm('login')}>Login</SignUpBtn>
        }
      </InfoContainer>
      {
        form === 'login' ?
            <LoginForm onSubmit={handleSubmitLogin(OnFinishLogin)}>
              <Input id="email" type="email" name="email" placeholder="Email" ref={registerLogin({ required: true, 
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Informe um email válido" }})}/>
              <p id="error">{errorsLogin.email && <span role="alert">{errorsLogin.email.message}</span>}</p>

              <Input id="password" type="password" name="password" placeholder="Senha" ref={registerLogin({ required: true,
              minLength: { value: 5, message: "Senha inválida" }})}/>
                <p id="error">{errorsLogin.password && <span role="alert">{errorsLogin.password.message}</span>}</p>
              <FormBtn>Entrar</FormBtn>
              <p onClick={() => setModal(true)}>Esqueceu a senha?</p>
            </LoginForm>
      :
          <SignUpForm onSubmit={handleSubmit(OnFinishSignUp)}>
            <Input type="text" name="firstName" placeholder="Nome" ref={register({ required: true, minLength: 2, maxLength: 20 })}/>
            <p id="error">{errors.firstName && <span role="alert">{errors.firstName.message}</span>}</p>

            <Input type="text" name="username" placeholder="Usuário" ref={register({ required: true, maxLength: 20, 
            pattern: { value: /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$/, message: "Usuário inválido" }})}/>
            <p id="error">{errors.username && <span role="alert">{errors.username.message}</span>}</p>

            <Input id="email" type="text" name="email" placeholder="Email" ref={register({ required: true, 
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Informe um email válido" }})} />
            <p id="error">{errors.email && <span role="alert">{errors.email.message}</span>}</p>

            <Input type="password" name="password" placeholder="Senha" ref={register({ required: true,
              minLength: { value: 5, message: "Senha deve ter no mínimo 5 caracteres" }})} />
            <p id="error">{errors.password && <span role="alert">{errors.password.message}</span>}</p>

            <FormBtn>Cadastre-se</FormBtn>
          </SignUpForm>
      }
      
      {modal && <FormModal 
        title="Nova senha"
        onFinish={NewPassword}
        exit={() => setModal(false)}
        fields={[
          {type: 'email', name: 'email', placeholder: 'Email'},
          {type: 'text', name: 'username', placeholder: 'Usuário'},
          {type: 'password', name: 'npassword', placeholder: 'Nova Senha'},
          {type: 'password', name: 'fpassword', placeholder: 'Confirme sua Senha'}
          ]} />
        }

      <FooterCredits>
        <a href="https://github.com/maiconloure" target="_blank" rel="noopener noreferrer">
        <img src={Robot} alt="robot-icon"/>
        </a>
        <p>Development by Maicon Lourenço</p>
      </FooterCredits>

    </LandingContainer>
  );
}
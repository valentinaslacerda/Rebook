import React from 'react';
import { Link } from 'react-router-dom';
import rebookLogo from './assets/Icon.svg';
import userIcon from './assets/user.svg';
import emailIcon from './assets/email.svg';
import padlockIcon from './assets/padlock.svg';
import rebookName from './assets/REBOOK.svg';
import './App.css';
import useForm from './useForm';

const Singup = () => {
  const senha = useForm('senha');
  const nome = useForm('nome');
  const email = useForm('email');
  const confirmar = useForm('confirmar');

  function handleSubmit(event) {
    event.preventDefault();

    // Validate all fields before submission
    if (nome.validate() && senha.validate() && email.validate()) {
      if (confirmar.value === senha.value) {
        console.log('Submit form');
        // TODO:Implement form submission logic here (e.g., send data to server)
      } else {
        console.log('Validation failed');
        confirmar.erro();
      }
    } else {
      console.log('Validation failed');
    }
  }

  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <img src={rebookLogo} className="logo rebook" alt="Rebook logo" />
          <h1>Avalie Agora</h1>
          <p>
            Já tem uma conta? <Link to="login">Entrar</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="Nome"
                id="nome"
                value={nome.value}
                onChange={nome.onChange}
                onBlur={nome.onBlur}
              />
              <span className="icon">
                <img src={userIcon} className="user-Icon" alt="Icon User" />
              </span>
              {nome.error && <p className="error">{nome.error}</p>}
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="Email"
                id="email"
                value={email.value}
                onChange={email.onChange}
                onBlur={email.onBlur}
              />
              <span className="icon">
                <img src={emailIcon} className="email-Icon" alt="Icon Email" />
              </span>
              {email.error && <p className="error">{email.error}</p>}
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="Senha"
                id="senha"
                value={senha.value}
                onChange={senha.onChange}
                onBlur={senha.onBlur}
              />
              <span className="icon">
                <img
                  src={padlockIcon}
                  className="padlock-Icon"
                  alt="Icon Padlock"
                />
              </span>
              {senha.error && <p className="error">{senha.error}</p>}
            </div>

            <div className="input-container">
              <input
                type="text"
                placeholder="Confirmar senha"
                id="confirmar"
                value={confirmar.value}
                onChange={confirmar.onChange}
                onBlur={confirmar.onBlur}
              />
            </div>
            {confirmar.error && <p className="error">{confirmar.error}</p>}
            <button className="logar-button">Cadastrar-se</button>
          </form>
        </div>
        <div className="grid-item">
          <div className="place-holder">
            <span className="detalhe"></span>
            <img
              src={rebookName}
              className="nome-rebook"
              alt="Rebook logo alternativa"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;

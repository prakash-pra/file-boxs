import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Filebox from './components/Fileboxs/Filebox';
import LoginForm from './components/Login/LoginForm';
import './App.css';
function App() {
  const [isShownLogin, setShownLogin] = useState(false);
  const [isMainShown, setMainShown] = useState(true);

  const loginFormHandler = (val) => {
    setShownLogin(val);
    setMainShown(false);
  };

  return (
    <>
      <Header loginFormHandler={loginFormHandler} />
      {isMainShown && (
        <main>
          <Filebox />
        </main>
      )}
      {isShownLogin && <LoginForm />}
    </>
  );
}

export default App;

// import react from 'react'
import './LoginForm.css';
import Card from '../UI/Card';
const LoginForm = () => {
  return (
    <section className='login-form'>
      <Card>
        <form>
          <div className='input-container'>
            <label>Email </label>
            <input type='text' name='email' required />
          </div>
          <div className='input-container'>
            <label>Password </label>
            <input type='password' name='pass' required />
          </div>
          <div className='button-container'>
            <input type='submit' />
          </div>
        </form>
      </Card>
    </section>
  );
};

export default LoginForm;

import styled from 'styled-components';

const LoginStyle = WrappedComponent => styled(WrappedComponent)`
  position:relative;
  left:50%;
  top:15vh;
  transform:translateX(-50%);
  max-width:620px;

  .form{
    border:1px solid grey;
    padding:10px 0;
    margin-bottom:15px;
    border-radius:22px;
  }
  button{
    position:relative;
    left:50%;
    transform:translateX(-50%);
  }


`;
export default LoginStyle;

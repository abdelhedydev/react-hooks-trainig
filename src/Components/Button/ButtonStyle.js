import styled from 'styled-components';

const ButtonStyle = WrappedComponent => styled(WrappedComponent)`
  button{
    outline:0;
    border:1px solid black;
    padding:8px 10px;
    background:#f76f8e;
    text-decoration: none;
    cursor: pointer;
    border-radius:22px;
    min-width:220px;
    font-size:18px;
  }
`;
export default ButtonStyle;

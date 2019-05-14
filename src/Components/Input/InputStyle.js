import styled from 'styled-components';

const InputStyle = WrappedComponent => styled(WrappedComponent)`
  margin: 15px 0px;
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  label{
    color: #20232a;
    font-size: 22px;
    margin-right: 5px;
    min-width: 120px;
    font-family: 'Modak', cursive;
  }
  input{
    padding: 5px 5px 2px 15px;
    border-radius: 22px;
    outline: 0;
    border: 1px solid #20232a;
    font-size: 20px;
  }
`;
export default InputStyle;

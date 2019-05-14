import styled from 'styled-components';

const ProfileStyle = WrappedComponent => styled(WrappedComponent)`
  position:relative;
  margin-top:100px;
  margin-left:20px;
  h1{
    font-weight:700;
    text-align:center;
    font-size:18px;
    margin-bottom:10px;
  }
`;
export default ProfileStyle;

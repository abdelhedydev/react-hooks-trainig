import styled from 'styled-components';

const CardStyle = WrappedComponent => styled(WrappedComponent)`
  border:1px solid grey;
  padding:10px 5px;
  margin:5px 20px;
  max-width:250px;
  min-width:180px ;
  cursor: pointer;
  transition:all .5s;
  &:hover{
    background:grey;
  }
  .card{
    &__img{
      max-width:120px;
      height:auto;
      position: relative;
      left:50%;
      transform:translateX(-50%);
      margin-bottom:10px;
    }
    &__name{
      font-weight:700;
      text-align:center;
    }
    &__username{
      font-weight:400;
      text-align:center;
    }
  }
`;
export default CardStyle;

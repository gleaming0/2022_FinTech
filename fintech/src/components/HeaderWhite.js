import React from 'react'
import styled from 'styled-components';

const HeaderBlock = styled.div`
  border-bottom: 1px solid #000;
  text-align: center; //가운데정렬
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const HeaderWhite = ({title}) => {
  return <HeaderBlock>{title}</HeaderBlock>;
}

export default HeaderWhite;
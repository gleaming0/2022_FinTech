import React from 'react';
import HeaderWhite from '../components/HeaderWhite';


const AxiosTest = () => {
  const handleClick = () => {
      console.log("click");
  };

  return (
    <div>
        <HeaderWhite title="HTTP 통신" />
        <button onClick={handleClick}>데이터 요청하기</button>
    </div>
  );
};

export default AxiosTest
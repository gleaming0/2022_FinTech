import axios from 'axios';
import React from 'react';
import HeaderWhite from '../components/HeaderWhite';


const AxiosTest = () => {
  const handleClick = () => {
      console.log("click");
      axios
        .get("https://newsapi.org/v2/everything?q=tesla&from=2022-01-2&sortBy=publishedAt&apiKey=0830ad85ee76460b9285df0e8960a625")
        .then((response) => {
          console.log(response);
      })
      .catch((response) => {
          console.log(response);
      })
  };

  return (
    <div>
        <HeaderWhite title="HTTP 통신" />
        <button onClick={handleClick}>데이터 요청하기</button>
    </div>
  );
};

export default AxiosTest
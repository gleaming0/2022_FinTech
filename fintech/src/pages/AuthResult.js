import React from 'react';
import HeaderWhite from '../components/HeaderWhite';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

const AuthResult = () => {
    console.log(useLocation().search); //-> 쿼리형태로 나열되어 보임
    const parsedResult = queryString.parse(useLocation().search);
    console.log(parsedResult); //-> 오브젝트로 예쁘게 보임
    //console.log(parsedResult.code); //-> 오브젝트 중 code만 보임
  return (
    <div>
        <HeaderWhite title={"AccessToken 요청"}></HeaderWhite>
    </div>
  );
};

export default AuthResult;
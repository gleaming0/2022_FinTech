import React from 'react';
import HeaderWhite from '../components/HeaderWhite';

const AuthPage = () => {
    const handleAuthBtnClick = () => {
        let tmpwindow = window.open("about:blank"); //새로운 창 열기
        tmpwindow.location.href = "https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=e7c1feb4-5c55-47e8-b308-d916c7b7da48&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0" //하이퍼링크로 해당 주소 열기(사용자 인증 요청 샘플 링크)
    };
  return (
    <div>
        <HeaderWhite title={"사용자인증"}></HeaderWhite>
        <button onClick={handleAuthBtnClick}>사용자 인증 받기</button>
    </div>
  );
};

export default AuthPage;
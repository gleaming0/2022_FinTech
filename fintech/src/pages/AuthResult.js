import React, { useState, useEffect } from 'react';
import HeaderWhite from '../components/HeaderWhite';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import axios from 'axios';

const AuthResult = () => {
    console.log(useLocation().search); //-> 쿼리형태로 나열되어 보임
    const { code } = queryString.parse(useLocation().search);
    const [accessToken, setaccessToken] = useState("토큰을 받기 전입니다.");
    const [userSeqNo, setuserSeqNo] = useState("사용자 번호");
    console.log(code); //-> 오브젝트 중 code만 보임

    //페이지 불러오기 전, 불러온 후, 창 닫기, 렌더링 시 동작하는 
    useEffect(() => {
        getAccessToken();
    }, []);

    const getAccessToken = () => {
        const sendData = {
            //사용자 토큰 발급 API에서 요청에 필요한 항목 5가지를 오브젝트로 만듦
            code: code,
            client_id: "e7c1feb4-5c55-47e8-b308-d916c7b7da48",
            client_secret: "d19596b7-673a-46bf-ab3b-ab82fb5079de",
            redirect_uri: "http://localhost:3000/authResult",
            grant_type: "authorization_code",
        };
        
        const encodedData = queryString.stringify(sendData);

        const option = {
            method: "POST",
            url: "https://testapi.openbanking.or.kr/oauth/2.0/token",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            data: encodedData,
        };

        axios(option).then(({ data }) => {
            console.log(data);
            if(data.res_code === "O0001") {
                alert(data.rsp_message);
            } else {
                const accessToken = data.access_token;
                const userSeqNo = data.user_seq_no;
                setaccessToken(accessToken);
                setuserSeqNo(userSeqNo);
                localStorage.setItem("accessToken", data.access_token);
                localStorage.setItem("userSeqNo", data.user_seq_no);
            }
        });
    };

  return (
    <div>
        <HeaderWhite title={"AccessToken 요청"}></HeaderWhite>
        <p>인증코드 : {code}</p>
        <p>AccessToken : {accessToken}</p>
        <p>사용자번호 : {userSeqNo}</p>
        <button onClick={getAccessToken}>토큰 요청</button>
    </div>
  );
};

export default AuthResult;
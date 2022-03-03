import axios from 'axios';
import React, { useState, useEffect } from 'react';
import HeaderWhite from '../components/HeaderWhite';

const MainPage = () => {
    useEffect(() => { //자동으로 getAccountList 함수 실행하도록
        getAccountList();
    }, []);

    const [accountList, setaccountList] = useState([]);

    const getAccountList = () => { //계좌 목록을 가져오는 함수
        //로컬스토리지에 저장했던 accessToken, userSeqNo 데이터 가져오기
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");

        //console.log(userSeqNo);
        //console.log(accessToken);

        // #work7 사용자 정보 조회 API를 통해 accountList에 계좌 목록을 저장 (axios 사용, 메뉴얼 참고)
        //1. axios 요청 작성
        //2. setaccountList 실행

        const sendData = { //object
            user_seq_no: userSeqNo,
        };

        const option = {
            method: "GET",
            url: "/v2.0/user/me", //프록시 설정 안했다면 https://testapi.openbanking.or.kr/v2.0/user/me
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
            params: sendData, //object
        };

        axios(option).then(( data ) => {
            console.log(data);
        });

        
    };

  return (
    <div>
        <HeaderWhite title={"메인페이지(계좌목록)"}></HeaderWhite>
    </div>
  );
};

export default MainPage;
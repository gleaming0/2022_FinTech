import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import HeaderWhite from '../components/HeaderWhite';
import BalanceCard from '../components/Balance/BalanceCard';

const BalancePage = () => {
    useEffect(() => {
        getUserBalance();
    }, []);

    const { fintechUseNo } = queryString.parse(useLocation().search);
    const [balance, setbalance] = useState("");
    console.log(fintechUseNo);

    const getTransId = () => {
        let countnum = Math.floor(Math.random() * 1000000000) + 1; //9자리 숫자 맞춰줌
        let transId = "M202200382" + countnum; //이용기관번호는 자신의 것으로
        return transId;
    };
   
    const getUserBalance = () => {
        //# work8 잔액조회 기능 실습 -> request 생성 및 응답 text 출력
        const accessToken = localStorage.getItem("accessToken");
        //const date = new Date()

        const sendData = { //object
            bank_tran_id: getTransId(),
            fintech_use_num: fintechUseNo,
            tran_dtime: "20220304014059"
        };

        const option = {
            method: "GET",
            url: "/v2.0/account/balance/fin_num", //프록시 설정 안했다면 https://testapi.openbanking.or.kr/v2.0/account/balance/fin_num
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
            params: sendData, //object
        };

        axios(option).then(( data ) => {
            console.log(data);
            setbalance(data);
        });        

    };
  return (
    <div>
        <HeaderWhite title="잔액조회"></HeaderWhite>
        <BalanceCard
            bankName={balance.bank_name}
            fintechNo={balance.fintech_use_num}
            balance={balance.balance_amt}>
        </BalanceCard>
    </div>
  );
};

export default BalancePage;
import axios from "axios";
import React, { useState } from "react";
import HeaderWhite from "../components/HeaderWhite";
import NewsList from "../components/News/NewsList";
import SearchInput from "../components/News/SearchInput";

/*
    searchText : 검색어를 입력할 곳
    searchResultList : 검색 결과를 저장할 곳, request에서 배열([])형태로 받아옴
    handleSearchTextChange : searchText가 변경되었을 때 동작하는 이벤트
    handleSearchButtonClick : searchText 입력 후 버튼을 눌렀을 때 동작하는 이벤트
*/
const NewsApiPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResultList, setSearchResultList] = useState([]);

  const handleSearchTextChange = (e) => {
    //input 변경사항을 searchText에 반영
    const { value } = e.target;
    console.log(value);
    setSearchText(value);
    console.log("searchText : ", searchText);
  };
  
  const handleSearchButtonClick = () => {
    //axios 통해 NewsList 요청하기 searchInput 데이터를 NewsApi에 요청
    const searchApiUrl = `https://newsapi.org/v2/everything?q=${searchText}&from=2022-01-23&sortBy=publishedAt&apiKey=0830ad85ee76460b9285df0e8960a625`
    axios
      .get(searchApiUrl)
      .then((response) => {
        console.log(response);
        setSearchResultList(response.data.articles);
        console.log("뉴스 리스트 데이터는 : ", setSearchResultList);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <HeaderWhite title="뉴스 검색"></HeaderWhite>
      <SearchInput
        handleChange={handleSearchTextChange}
        handleClick={handleSearchButtonClick}
      ></SearchInput>
      <NewsList searchResultList={searchResultList}></NewsList>
    </div>
  );
};

export default NewsApiPage;
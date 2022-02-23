import React from 'react';
import HeaderWhite from '../HeaderWhite';
import SearchInput from './SearchInput';

const NewsList = () => {
  return (
    <div>
        <HeaderWhite title="뉴스 검색"></HeaderWhite>
        <SearchInput></SearchInput>
        <NewsList></NewsList>
    </div>
  );
};

export default NewsList
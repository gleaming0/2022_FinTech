import React from "react";

const NewsList = ({searchResultList}) => {
  return (
    <div>
      {searchResultList.map(({title, url}, index) => {
        return (
            <p><a href={url} key={index}>{title}</a></p>
        );
      })}
    </div>
  );
};

export default NewsList;
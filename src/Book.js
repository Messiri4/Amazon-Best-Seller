import React from "react";

const Book = (props) => {
  const { img, title, author, number } = props;
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <span className="number">{`# ${number + 1}`}</span>
      <h4>{author}</h4>
    </article>
  );
};

export default Book;

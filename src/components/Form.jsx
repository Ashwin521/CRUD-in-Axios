import React, { useState } from "react";

const Form = () => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // addPostData()
  };
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="body"></label>
          <input
            type="text"
            autoComplete="off"
            placeholder="Add Post"
            id="body"
            name="body"
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;

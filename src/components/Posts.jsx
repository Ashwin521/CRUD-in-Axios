import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../Api/PostApi";
import "../App.css";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);

      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => curPost.id !== id);
        setData(newUpdatedPosts);
      }
    } catch (error) {
      console.error("Failed to delete the post:", error);
    }
  };

  return (
    <>
    <section className="section-form">
      <Form data={data} setData={setData}/>
    </section>
      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id}>
                <p>Title: {title}</p>
                <p>Body: {body}</p>
                <button>Edit</button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    handleDeletePost(id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};

export default Posts;

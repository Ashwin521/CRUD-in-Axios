import React, { useEffect } from "react";
import Posts from "./components/Posts";
// import { getPost } from "./Api/PostApi;

const App = () => {
  return (
    <>
      <section className="main-section">
        <Posts />
      </section>
    </>
  );
};

export default App;

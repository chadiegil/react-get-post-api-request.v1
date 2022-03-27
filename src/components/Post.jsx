import axios from "axios";
import { useState, useEffect } from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";
const baseURL = "http://127.0.0.1:8000/api/inventories";

function Post() {
  const [post, setPost] = useState(null);
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setItem(response.data);
      console.log(item);
    });
  }, []);

  //   function createPost() {
  //     axios
  //       .post(baseURL, {
  //         title: "This is sample title",
  //         body: "Sample body",
  //       })
  //       .then((res) => setPost(res));
  //     console.log("post saved!");
  //   }
  function createPost() {
    axios
      .post("http://127.0.0.1:8000/api/inventories/store/", {
        item: {
          product_name: "Dell PXL",
          price: "1245513",
          stocks: "412",
        },
      })
      .then((res) => setItem(res));
    console.log("Post saved!");
  }
  //   if (!post) return "No post!";
  return (
    <div className="container">
      <div>
        <span className="text-success">This the title </span>
        {item.product_name}
      </div>
      <div>
        <span className="text-success">This the body </span>
        {item.price}
      </div>
      <div>
        <span className="text-success">This the body </span>
        {item.stocks}
      </div>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}
export default Post;

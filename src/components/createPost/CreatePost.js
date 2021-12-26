import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseConfig from "../../firebaseConfig.json";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";

function createPost(db, post, successful) {
  const postListRef = ref(db, "posts");
  const newPostRef = push(postListRef);
  set(newPostRef, post);
}

const CreatePost = () => {
  const [text, setText] = useState("");

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseDatabase = getDatabase(firebaseApp);

  let navigate = useNavigate();

  const onSubmit = (e) => {
    let successful = true;

    createPost(
      firebaseDatabase,
      {
        text: text,
      },
      successful
    );

    if (successful) {
      alert("Post created");
      navigate("/", { replace: true });
    } else {
      alert("Post creation failed");
    }
  };

  return (
    <form className="create-post-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Text</label>
        <input
          type="text"
          value={text}
          placeholder="text"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
};

export default CreatePost;

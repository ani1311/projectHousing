import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [text, setText] = useState("");
  
  let navigate = useNavigate();

  const onSubmit = (e) => {
    let successful = true;

    // Some Signup check

    if (successful) {
        alert("Post created")
        navigate("/",{replace:true})

    } else {
        alert("Post creation failed")
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

      <input type="submit" value="Signup" className="btn btn-block" />
    </form>
  );
}

export default CreatePost

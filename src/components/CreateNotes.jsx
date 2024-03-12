import React, { useContext, useEffect } from "react";
import ListContext from "../ListContext";

function CreateNotes({ setIsOpen, type, editData }) {
  const { setData } = useContext(ListContext);

  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  useEffect(() => {
    if (type == "Add") {
      setTitle("");
      setBody("");
    } else {
      setTitle(editData.title || "");
      setBody(editData.body || "");
    }
  }, [editData]);

  const handleAddOrEdit = () => {
    if (type == "Add") {
      handleAdd();
    } else {
      handleEdit();
    }
  };
   
  

  const handleAdd = () => {
    setData((e) => {
      e.push({ title, body });
      return e;
    });
    setIsOpen(false);
  };

  const handleEdit = () => {
    setData((e) => {
        console.log(e , editData);
        let index = e.findIndex((e) => e.title == editData.title)
        // console.log(a);
        e[index] = { title, body };
    //   e[editData] = { title, body };
      return e;
    });
    setIsOpen(false);
  };

  return (
    <>
  
      <div className="paper">
        <span className="flex justify-between">
          <h1 className="text-3xl">{type} Note</h1>
          <span>
            <button className="btn btn-primary btn-sm m-2 px-1" onClick={handleAddOrEdit}>
              Save
            </button>
            <button
              className="btn btn-primary btn-sm px-1"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </span>
        </span>
        <div className="form-groups">
          <h3>Title</h3>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control w-full p-3"
            id="large-input"
            placeholder="Title"
          />

          <h3>Body</h3>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="form-control w-full p-3"
            id="large-input"
            rows={10}
            placeholder="Write Something"
          />
        </div>
      </div>
    </>
  );
}

export default CreateNotes;

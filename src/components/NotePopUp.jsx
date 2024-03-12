import React from "react";

function NotePopUp({ data, setNotePopUp }) {
  return (
    <>
      <div >
        <h1 className="text-3xl">{data.title}</h1>
        <p>{data.body}</p>
      </div>

      <button
        className="btn btn-primary btn-sm float-right p-1"
        onClick={() => setNotePopUp(false)}
      >
        Close
      </button>
    </>
  );
}

export default NotePopUp;

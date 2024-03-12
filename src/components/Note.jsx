import React from "react";
import NotePopUp from "./NotePopUp";

function Note({ note }) {



  return (
    <>
      <span>
        <div className="note-title truncate">{note.title}</div>
        <p className="note-body truncate">{note.body}</p>
      </span>

     
    </>
  );
}

export default Note;

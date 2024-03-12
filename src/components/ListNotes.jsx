import React, { Fragment, useContext } from "react";
import Note from "./Note";
import CreateNotes from "./CreateNotes";
import ListContext from "../ListContext";
import NotePopUp from "./NotePopUp";

function ListNotes() {

  const {data , setData}  = useContext(ListContext)


  const [isOpen, setIsOpen] = React.useState(false);
  const [type, setType] = React.useState("");
  const [editData, setEditData] = React.useState({});
  const [deletePopUp, setDeletePopUp] = React.useState(false);
  const [deleteIndex, setDeleteIndex] = React.useState(0);
  const [notePopUp, setNotePopUp] = React.useState(false);
  const [showData, setShowData] = React.useState({});


  const handleEditData = (note) => {
    setIsOpen(true);
    setType("Edit");
    setEditData(note);
  };

  const handleDeleteData = () => {
    setData((e) => {
      e.splice(deleteIndex, 1);
      return e;
    });
    setDeletePopUp(false);
  };

  const handleNotePopup = (data) => {
    setShowData(data);
    setNotePopUp(true);
  };

  return (
    <>

    
      <div className="flex justify-between p-4">
        {/* <div className="text-3xl text-center"></div> */}
        <h1 className="text-3xl">Notes ( {data.length} )</h1>
        <button
          className="btn btn-primary btn-sm  px-1"
          onClick={() => {
            setIsOpen(true), setType("Add");
          }}
        >
           + Add Note
        </button>
      </div>

      <div className="note grid grid-cols-3 gap-4 p-4">
        {data.map((note, index) => (
          <Fragment key={index}>
            <div className="card border p-4 cursor-pointer">
              <span  onClick={() => handleNotePopup(note)} >
              <Note note={note}/>
              </span>
              <span className="flex justify-end">
                <button
                  className="btn btn-primary btn-sm px-1 ml-2"
                  onClick={() => handleEditData(note)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-primary btn-sm  px-1  ml-2"
                  onClick={() => {
                    setDeletePopUp(true);
                    setDeleteIndex(index);
                  }}
                >
                  Delete
                </button>
              </span>
            </div>
          </Fragment>
        ))}
      <dialog className="paper" open={deletePopUp}>
        <p>Are you sure you want to delete? </p>
        <div className="flex justify-end">
          <button
            className="btn btn-primary btn-sm p-1"
            onClick={() => handleDeleteData()}
          >
            Yes
          </button>
          <button
            className="btn btn-primary btn-sm ml-2 p-1"
            onClick={() => setDeletePopUp(false)}
          >
            No
          </button>
        </div>
      </dialog>
      </div>

      <dialog className="inset-0 w-4/5" open={isOpen}>
        <CreateNotes type={type} setIsOpen={setIsOpen} editData={type==="Edit" && editData} />
      </dialog>

      <dialog className="paper inset-0 w-4/5 " open={notePopUp}>
        <NotePopUp  data={showData} setNotePopUp={setNotePopUp} />
      </dialog>
    </>
  );
}

export default ListNotes;

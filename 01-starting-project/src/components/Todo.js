import { useState } from "react";
import BackDrop from "./BackDrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const deleteHandler = () => {
  //   console.log("execute when rendering");
  //   const deleteEvent = () => {
  //     console.log("Clicked!!");
  //   };
  //   return deleteEvent;
  // };

  const deleteHandler = () => {
    console.log("Clicked!!");
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        {/* <button className="btn" onClick={deleteHandler}> */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <BackDrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;

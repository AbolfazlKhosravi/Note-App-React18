import { useState } from "react";

const AddNewNote = () => {
  const [data, setData] = useState({ title: "", des: "" });
  const handleChangeNote = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title: data.title,
      description: data.des,
      complated: false,
      startedAt: new Date().toISOString(),
      id: Date.now(),
    };
    console.log(newNote);
    setData({ title: "", des: "" });
  };
  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="Note Tiltle ..."
          value={data.title}
          onChange={handleChangeNote}
          name="title"
        />
        <input
          type="text"
          className="text-field"
          placeholder="Note Description ..."
          value={data.des}
          onChange={handleChangeNote}
          name="des"
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;

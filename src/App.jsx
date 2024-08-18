import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
function App() {
  const [notes,setNotes]=useState([])
  return (
    <div className="container">
      <div className="note-header">note Header</div>
      <div className="note-app">
        <AddNewNote setNotes={setNotes}/>
        <div className="note-container">
          <NoteList notes={notes} setNotes={setNotes}/>
        </div>
      </div>
    </div>
  );
}

export default App;

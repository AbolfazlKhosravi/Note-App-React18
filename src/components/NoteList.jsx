const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note) => {
       return <NoteItem key={note.id} note={note} />;
      })}
    </div>
  );
};

function NoteItem({ note }) {
  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button>❌</button>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAd).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </div>
  );
}

export default NoteList;

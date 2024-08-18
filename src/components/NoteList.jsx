const NoteList = ({ notes, setNotes, sortBy }) => {
  let sortedNotes = notes;
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAd) - new Date(b.createdAd)
    );
  }
  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAd) - new Date(a.createdAd)
    );
  }
  if (sortBy === "completed") {
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.complated) - Number(b.complated)
    );
  }
  return (
    <div className="note-list">
      {sortedNotes.map((note) => {
        return <NoteItem key={note.id} note={note} setNotes={setNotes} />;
      })}
    </div>
  );
};

function NoteItem({ note, setNotes }) {
  return (
    <div className={`note-item ${note.complated && "completed"}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            onClick={() =>
              setNotes((preNotes) =>
                preNotes.filter((preNote) => preNote.id !== note.id)
              )
            }
          >
            ❌
          </button>
          <input
            value={note.id}
            id={note.id}
            name={note.id}
            checked={note.complated}
            type="checkbox"
            onChange={() => {
              setNotes((prevNotes) =>
                prevNotes.map((prevNote) =>
                  prevNote.id === note.id
                    ? {
                        ...prevNote,
                        complated: !prevNote.complated,
                      }
                    : prevNote
                )
              );
            }}
          />
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

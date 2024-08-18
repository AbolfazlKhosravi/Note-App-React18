import Message from "./Message";

const NoteSatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.complated).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes) {
    return (
      <Message>
        <h2>No Notes has already been added .</h2>
      </Message>
    );
  }

  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
};

export default NoteSatus;

import Note from './Note';
import AddTraining from './AddTraining';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddTraining handleAddNote={handleAddNote} />
		</div>
	);
};

export default NotesList;
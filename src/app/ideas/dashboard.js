import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Editor from './components/Editor';
import "./UI.css";

export default function Dashboard() {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    }
    const savedNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(savedNotes);
  }, [router]);

  const saveNote = () => {
    if (!currentNote.title.trim()) {
      alert('Заголовок не может быть пустым');
      return;
    }

    const updatedNotes = notes.filter(note => note.id !== currentNote.id);
    const newNote = {
      ...currentNote,
      id: currentNote.id || Date.now(),
      updatedAt: new Date().toISOString(),
    };
    const finalNotes = [...updatedNotes, newNote];
    localStorage.setItem('notes', JSON.stringify(finalNotes));
    setNotes(finalNotes);
    setCurrentNote({ id: null, title: '', content: '' });
  };

  const loadNote = (note) => {
    setCurrentNote(note);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    if (currentNote.id === id) {
      setCurrentNote({ id: null, title: '', content: '' });
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h3>Заметки</h3>
        <ul>
          {notes.map(note => (
            <li key={note.id} onClick={() => loadNote(note)}>
              <span>{note.title}</span>
              <button onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="editor-container">
        <input
          type="text"
          placeholder="Заголовок заметки"
          value={currentNote.title}
          onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
        />
        <Editor
          content={currentNote.content}
          onChange={(value) => setCurrentNote({ ...currentNote, content: value })}
        />
        <button onClick={saveNote}>Сохранить</button>
      </div>
    </div>
  );
}
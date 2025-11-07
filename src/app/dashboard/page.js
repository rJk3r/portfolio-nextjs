"use client";
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, getDoc } from 'firebase/firestore';
import Editor from '../ideas/components/Editor';
import { auth, db } from '../ideas/utils/firebase';
import { encryptNote, decryptNote } from '../ideas/utils/encryption';
import "../ideas/UI.css";

export default function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({ id: null, title: '', content: '' });
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('firebase/auth').then(async ({ onAuthStateChanged }) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user && user.emailVerified) {
            // Проверяем статус подтверждения в Firestore
            const userDocRef = doc(db, 'users', user.uid);
            const userSnap = await getDoc(userDocRef);

            if (userSnap.exists() && userSnap.data().isAdminApproved) {
              setUserId(user.uid);
            } else {
              alert('Ваш аккаунт ещё не подтверждён администратором.');
              window.location.href = '/login';
            }
          } else {
            window.location.href = '/login';
          }
        });
        return () => unsubscribe();
      });
    }
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchNotes = async () => {
      const q = query(collection(db, 'notes'), where('userId', '==', userId));
      const snapshot = await getDocs(q);
      const notesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        content: decryptNote(doc.data().content)
      }));
      setNotes(notesList);
    };

    fetchNotes();
  }, [userId]);

  // Остальная логика: saveNote, loadNote, deleteNote, handleLogout
  const saveNote = async () => {
    if (!currentNote.title.trim()) {
      alert('Заголовок не может быть пустым');
      return;
    }

    const noteData = {
      title: currentNote.title,
      content: encryptNote(currentNote.content),
      userId,
      updatedAt: new Date().toISOString()
    };

    let docRef;
    if (currentNote.id) {
      docRef = doc(db, 'notes', currentNote.id);
      await updateDoc(docRef, noteData);
    } else {
      docRef = await addDoc(collection(db, 'notes'), noteData);
    }

    const newNote = { id: docRef.id, ...noteData, content: currentNote.content };
    setNotes(notes.map(n => n.id === newNote.id ? newNote : n).concat(newNote.id !== currentNote.id ? [newNote] : []));
    setCurrentNote({ id: null, title: '', content: '' });
  };

  const loadNote = (note) => {
    setCurrentNote(note);
  };

  const deleteNote = async (id) => {
    await deleteDoc(doc(db, 'notes', id));
    setNotes(notes.filter(note => note.id !== id));
    if (currentNote.id === id) {
      setCurrentNote({ id: null, title: '', content: '' });
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      window.location.href = '/'; // Редирект через URL
    });
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
        <button onClick={handleLogout} style={{ marginTop: '20px' }}>Выйти</button>
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
"use client"
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../ideas/utils/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import "../ideas/UI.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Пользователь уже вошёл — проверим, подтверждён ли он
        const userDocRef = doc(db, 'users', user.uid);
        getDoc(userDocRef)
          .then(userSnap => {
            if (userSnap.exists() && userSnap.data().isAdminApproved) {
              if (user.emailVerified) {
                window.location.href = '/dashboard';
              } else {
                alert('Пожалуйста, подтвердите ваш email.');
                setLoading(false);
              }
            } else {
              alert('Ваш аккаунт ещё не подтверждён администратором.');
              setLoading(false);
            }
          })
          .catch(err => {
            console.error("Ошибка проверки статуса пользователя:", err);
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Проверяем статус подтверждения в Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists() && userSnap.data().isAdminApproved) {
        if (user.emailVerified) {
          window.location.href = '/dashboard';
        } else {
          alert('Пожалуйста, подтвердите ваш email.');
        }
      } else {
        alert('Ваш аккаунт ещё не подтверждён администратором. Пожалуйста, подождите.');
      }
    } catch (err) {
      console.error("Ошибка входа:", err.code, err.message);
      setError(err.message);
    }
  };

  const handleRequestAccess = () => {
    alert("Свяжись с админом!");
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Авторизация</p>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
      <button onClick={handleRequestAccess}>Запросить доступ</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
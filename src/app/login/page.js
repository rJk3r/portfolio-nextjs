"use client"
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from '../ideas/utils/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import "../ideas/UI.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

  const handleRequestAccess = async () => {
    if (!email || !password) {
      setError('Заполните все поля');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);

      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, {
        email: user.email,
        createdAt: new Date(),
        isAdminApproved: false,
      });

      alert('Регистрация завершена. Проверьте ваш email и дождитесь подтверждения администратора.');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Пользователь с таким email уже существует.');
      } else {
        setError(err.message);
      }
    }
  };

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
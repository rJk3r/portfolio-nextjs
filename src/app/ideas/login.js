import { useState } from 'react';
import { useRouter } from 'next/router';
import "./UI.css";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        const token = btoa(`${username}:${password}`);
        localStorage.setItem('token', token);
        router.push('/dashboard');
      } else {
        setError('Неверный логин или пароль');
      }
    } else {
      setError('Пользователь не зарегистрирован');
    }
  };

  const handleRegister = () => {
    if (username && password) {
      const user = { username, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Регистрация прошла успешно. Войдите снова.');
    } else {
      setError('Введите логин и пароль');
    }
  };

  return (
    <div className="auth-container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Войти</button>
        <button type="button" onClick={handleRegister}>Зарегистрироваться</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
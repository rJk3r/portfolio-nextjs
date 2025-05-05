'use client';

import { useEffect } from 'react';

export default function MainPageThemeLoader() {
  useEffect(() => {
    // Генерируем случайное число от 1 до 6
    const randTheme = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    
    // Загружаем тему динамически
    const themeLink = document.createElement('link');
    themeLink.rel = 'stylesheet';
    themeLink.href = `/themes/main${randTheme}.css`;
    
    document.head.appendChild(themeLink);
    
    // Очистка при размонтировании
    return () => {
      document.head.removeChild(themeLink);
    };
  }, []);

  return null;
}
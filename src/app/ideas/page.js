"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import "./UI.css";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [router]);

  return <div>rJk3r's IDEA loading...</div>;
}
"use client"

import MainPageThemeLoader from './mainPageThemeLoader';
import Label  from '@/components/ui/label';
import Menu  from '@/components/ui/menu';
import MobileMenu from '@/components/ui/mobile-menu';
import Link from 'next/link';

import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function Welcome() {
  const isMinimumReached = useMediaQuery(1054)

    return (
      <>
      { isMinimumReached ? (
        <div>
          <MainPageThemeLoader />
          <div className='layout' style={
            {
              background: 'var(--primary)',
              display: 'flex', 
              flexDirection: 'column',
              width: '100%', 
              minHeight: '100vh', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              flex: '1 0 0',
              alignSelf: 'stretch'
              }}>
                <MobileMenu primary='var(--primary)' secondary='var(--secondary)'/>
              </div>
        </div>
      ) : (
        <div>
          <MainPageThemeLoader />
          <div className='layout' style={
            {
              background: 'var(--primary)',
              display: 'flex', 
              flexDirection: 'column',
              width: '100%', 
              minHeight: '100vh', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              flex: '1 0 0',
              alignSelf: 'stretch'
              }}>
              <Label secondary='var(--secondary)'/>
              <Menu primary='var(--primary)' secondary='var(--secondary)'/>
            </div>
        </div>
        )}
      </>
    )}

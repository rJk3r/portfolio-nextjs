import MainPageThemeLoader from './mainPageThemeLoader';
import Label  from '@/components/ui/label';
import Menu  from '@/components/ui/menu';

export default function Welcome() {
  return (
    <>
      <MainPageThemeLoader />
      <div className='layout' style={
        {
          display: 'flex', 
          flexDirection: 'column',
          background: 'white', 
          width: '100%', 
          minHeight: '100vh', 
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flex: '1 0 0',
          alignSelf: 'stretch'
          }}>
          <Label />
          <Menu />
          <h1 style={{ color: 'var(--primary)' }}>Страница со случайной темой</h1>
          <p>При каждой загрузке тема будет меняться</p>
        </div>
    </>
  );
}

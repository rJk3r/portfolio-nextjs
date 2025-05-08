import MainPageThemeLoader from './mainPageThemeLoader';
import Label  from '@/components/ui/label';
import Menu  from '@/components/ui/menu';

export default function Welcome() {
  const [width, height] = useDeviceSize()
  
  if (width > 1054) {
    return (
      <>
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
            <h1 style={{ color: 'var(--secondary)' }}>Страница со случайной темой</h1>
            <p>При каждой загрузке тема будет меняться</p>
          </div>
      </>
    ); 
  }
  else { return(<><div><h1>resized</h1></div></>)}
}

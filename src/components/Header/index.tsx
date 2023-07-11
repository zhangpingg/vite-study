import { useEffect } from 'react';
import styles from './index.module.scss';
import logoSrc from '@assets/imgs/vite.png';
// import ReactLogo from '@assets/icons/logo.svg'; // 当图片去引用
import { ReactComponent as Logo } from '@assets/icons/logo.svg'; // 当组件去引用
import { version } from '../../../package.json';
import Worker from './example.js?worker';

const Header = () => {
  useEffect(() => {
    // 1)Worker
    const worker = new Worker();
    worker.addEventListener('message', (e) => {
      console.log(e.data);
    });
  }, []);

  return (
    <div>
      <p className={styles['header']}>header</p>
      <img src={logoSrc} alt="" />
      <Logo />
      <p>{version}</p>
      <img
        src={new URL('./wp-content/uploads/2020/08/20200820_5f3eb3dcddd08.jpg', import.meta.env.VITE_IMG_BASE_URL).href}
        style={{width: '100px'}}
      />
    </div>
  );
};

export { Header };

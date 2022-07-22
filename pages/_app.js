import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/style.css';
import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp

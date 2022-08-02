
import AOS from 'aos';
import '../styles/style.css';
import '../styles/globals.css'
import '../styles/Welcome.css'
import '../styles/AboutUs.css'
import '../styles/UpcomingEvents.css'
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

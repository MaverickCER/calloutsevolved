import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import { eventLog } from '../firebase/firebaseClient';
import Layout from '../components/Layout';
import { AuthProvider } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  useEffect(() => {
    hotjar.initialize(2873078, 6);
    const routerEvent = (url) => {
      eventLog('screen_view', {
        screen_name: url,
      });
    };
    routerEvent(window.location.pathname);
    routers.events.on('routeChangeComplete', routerEvent);
    return () => {
      routers.events.off('routeChangeComplete', routerEvent);
    };
  }, []);

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;

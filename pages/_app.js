import LayoutA from '../components/layoutA';
import './../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <LayoutA>
  <Component {...pageProps} />
  </LayoutA>
  </>)
}

export default MyApp

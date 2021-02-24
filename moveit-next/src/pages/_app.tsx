import "../styles/global.css";

// _app -> carregado em todas as paginas

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp

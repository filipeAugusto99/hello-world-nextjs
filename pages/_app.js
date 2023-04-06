import '/styles/globals.css'

function App({ Component, pageProps }) {
  return <>
    <h1>TITULO FIXO</h1>
    <div>
      <Component {...pageProps} />
    </div>
  </>
}

export default App

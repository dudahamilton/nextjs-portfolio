import '@/styles/globals.css'
import Navbar from "../components/Navbar"
import Footer from"../components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
    {/* navbar above */}
      <Navbar />
      <Component {...pageProps} />
    {/* footer below */}
      <Footer />
    </>
  )
}
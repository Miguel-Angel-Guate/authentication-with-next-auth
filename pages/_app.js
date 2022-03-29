import '../styles/globals.css'
import "../components/Navbar.css"
import Navbar from '../components/navbar'
import { SessionProvider } from "next-auth/react"

function MyApp({ 
  Component,
  pageProps: { session, ...pageProps },
 }) {
  return (
  <>
  <Navbar />
  
  <Component {...pageProps} />
  </>
  )
}

export default MyApp

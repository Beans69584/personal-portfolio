import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jacob Walton | Portfolio</title>
        <meta name="description" content="Portfolio of Jacob Walton, Full-Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
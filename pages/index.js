import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About/About'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Headers/Header'
import Main from '../Components/Main/Main'
import Projects from '../Components/Project/Projects'
import Skills from '../Components/Skills/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sudeep Bhandari|Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

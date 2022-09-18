import Head from "next/head"
import Image from "next/image"
import Header from "components/Header"
import Tanit from "components/Tanitim"
import Footer from "components/Footer"
export default function Home() {
  return (
    <div className=" bg-slate-900 ">
      <Head>
        <title>Dessay - Özgür, Merkeziyetsiz Platform</title>
        <meta
          name="description"
          content="Dessay - Merkeziyetsiz yazı ve makale paylaş"
        />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Header />
      <Tanit />
      <Footer />
    </div>
  )
}

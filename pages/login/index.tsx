import Head from "next/head"
import Input from "../../components/input"
import styles from "./login.module.scss"

export default function Home() {
  return (
    <div>
      <Head>
        <title>FEM-intro component with sign-up form</title>
        <meta name="description" content="intro component with sign-up form" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main>
        <Input type="text" placeholder="LastName" id="text" />
      </main>
    </div>
  )
}

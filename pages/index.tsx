import Head from "next/head"
import Link from "next/link"
// import LoginPage from "../components/pages/login"

export default function Home() {
  return (
    <div>
      <Head>
        <title>FEM-intro component with sign-up form</title>
        <meta name="description" content="intro component with sign-up form" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Link href="/login">Go to login page</Link>
    </div>
  )
}

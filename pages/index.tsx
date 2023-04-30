import Head from "next/head"
import LoginPage from "../components/pages/login"

export default function Login() {
  return (
    <div>
      <Head>
        <title>FEM-intro component with sign-up form</title>
        <meta name="description" content="intro component with sign-up form" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <LoginPage />
    </div>
  )
}

import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>FEM-intro component with sign-up form</title>
        <meta name="description" content="intro component with sign-up form" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Link href="/signup">Go to sign up page</Link>
    </div>
  )
}

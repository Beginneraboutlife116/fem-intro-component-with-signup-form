import Head from "next/head"
import { useState, FormEventHandler, ChangeEventHandler } from "react"
import { determineEmptyString, determineValidateEmail } from "../../utilities"
import styles from "./signup.module.scss"
import FormItem from "../../formItem"

type formData = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const initialFormData: formData = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

const Signup = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [disabled, setDisabled] = useState(false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    setDisabled(true)
    if (Object.values(formData).some((value) => value === "")) {
      console.error("Some unexpected behavior happened.")
      setDisabled(false)
      return
    }
    try {
      const response = await fetch("./api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      if (response.ok && response.status === 200) {
        const data = await response.json()
        console.log(data)
      } else {
        throw new Error("Something wrong from response")
      }
    } catch (error) {
      throw new Error("Something wrong from server")
    } finally {
      setDisabled(false)
    }
  }

  return (
    <div className={`pi-4 pbe-6 ${styles["signup-page"]}`}>
      <Head>
        <title>Sign-up form</title>
        <meta name="description" content="intro component with sign-up form" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div className={styles["signup-page__wrapper"]}>
        <section className={`mbe-6 ${styles["signup-page__description"]}`}>
          <h1 className="mbe-3">Learn to code by watching others</h1>
          <p className="line-height">
            See how experienced developers solve problems in real-time Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <main>
          <div
            className={`radius shadow mbe-3 ${styles["signup-page__banner"]}`}>
            <p>
              <em>Try it free 7 days</em> then $20/mo. thereafter
            </p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className={`radius shadow ${styles["signup-page__form"]}`}>
              <FormItem
                id="firstName"
                name="firstName"
                handleChange={handleChange}
                placeholder="First Name"
                value={formData.firstName}
                inputClass={`${styles["signup-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                successStyle={styles.success}
                rule={determineEmptyString}
                errorMessage="First Name cannot be empty"
                errorMessageStyle={styles.error__message}
              />
              <FormItem
                id="lastName"
                name="lastName"
                handleChange={handleChange}
                placeholder="Last Name"
                value={formData.lastName}
                inputClass={`${styles["signup-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                successStyle={styles.success}
                rule={determineEmptyString}
                errorMessage="Last Name cannot be empty"
                errorMessageStyle={styles.error__message}
              />
              <FormItem
                id="email"
                name="email"
                handleChange={handleChange}
                placeholder="Email Address"
                value={formData.email}
                inputClass={`${styles["signup-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                successStyle={styles.success}
                rule={determineValidateEmail}
                errorMessage="Looks like this is not an email"
                errorMessageStyle={styles.error__message}
              />
              <FormItem
                id="password"
                name="password"
                type="password"
                handleChange={handleChange}
                placeholder="Password"
                value={formData.password}
                inputClass={`${styles["signup-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                successStyle={styles.success}
                rule={determineEmptyString}
                errorMessage="Password cannot be empty"
                errorMessageStyle={styles.error__message}
              />
              <button type="submit" disabled={disabled}>
                CLAIM YOUR FREE TRIAL
              </button>
              <p className={styles["signup-page__statement"]}>
                By clicking the button, you are agreeing to our{" "}
                <a href="#">Terms and Services</a>
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Signup

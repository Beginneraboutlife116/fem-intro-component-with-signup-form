import { useState, FormEventHandler, ChangeEventHandler } from "react"
import { determineEmptyString, determineValidateEmail } from "../../utilities"
import styles from "./login.module.scss"
import FormItem from "../../formItem"

type formData = {
  firstName: string | undefined
  lastName: string | undefined
  email: string | undefined
  password: string | undefined
}

const initialFormData: formData = {
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  password: undefined
}

const LoginPage = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [disabled, setDisabled] = useState(false)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit: FormEventHandler = (e) => {
    // TODO: set button disabled when user delete `require` in HTML intentionally
    e.preventDefault()
  }

  return (
    <div className={`pi-4 pbe-6 ${styles["login-page"]}`}>
      <div className={styles["login-page__wrapper"]}>
        <section className={`mbe-6 ${styles["login-page__description"]}`}>
          <h1 className="mbe-3">Learn to code by watching others</h1>
          <p className="line-height">
            See how experienced developers solve problems in real-time Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        <main>
          <div
            className={`radius shadow mbe-3 ${styles["login-page__banner"]}`}>
            <p>
              <em>Try it free 7 days</em> then $20/mo. thereafter
            </p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className={`radius shadow ${styles["login-page__form"]}`}>
              <FormItem
                id="firstName"
                name="firstName"
                handleChange={handleChange}
                placeholder="First Name"
                value={formData.firstName}
                inputClass={`${styles["login-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
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
                inputClass={`${styles["login-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
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
                inputClass={`${styles["login-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                rule={determineValidateEmail}
                errorMessage="Looks like this is not an email"
                errorMessageStyle={styles.error__message}
              />
              <FormItem
                id="password"
                name="password"
                handleChange={handleChange}
                placeholder="First Name"
                value={formData.password}
                inputClass={`${styles["login-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                rule={determineEmptyString}
                errorMessage="Password cannot be empty"
                errorMessageStyle={styles.error__message}
              />
              <button type="submit" disabled={disabled}>
                CLAIM YOUR FREE TRIAL
              </button>
              <p className={styles["login-page__statement"]}>
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

export default LoginPage

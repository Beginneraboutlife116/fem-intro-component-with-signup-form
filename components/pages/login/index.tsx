import { useState, FormEventHandler, ChangeEventHandler } from "react"
import styles from "./login.module.scss"
import Input from "../../input"

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

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className={`pi-4 pbs-12 pbe-6 ${styles["login-page"]}`}>
      <section className="mbe-6">
        <h1 className="mbe-3 pi-2">Learn to code by watching others</h1>
        <p className="line-height">
          See how experienced developers solve problems in real-time Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <main>
        <div className={`radius shadow mbe-3 ${styles["login-page__banner"]}`}>
          <p>
            <em>Try it free 7 days</em> then $20/mo. thereafter
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className={`radius shadow ${styles["login-page__form"]}`}>
            <label>
              <Input
                id="firstName"
                name="firstName"
                handleChange={handleChange}
                placeholder="First Name"
                value={formData.firstName}
                className={`${styles["login-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                rule={(value: string) => value !== undefined && value === ""}
              />
            </label>
            <label>
              <Input
                id="lastName"
                name="lastName"
                handleChange={handleChange}
                placeholder="Last Name"
                value={formData.lastName}
                className={`${styles["login-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                rule={(value: string) => value !== undefined && value === ""}
              />
            </label>
            <label>
              <Input
                id="email"
                name="email"
                handleChange={handleChange}
                placeholder="Email Address"
                value={formData.email}
                className={`${styles["login-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                // change the examining method
                rule={(value: string) => value !== undefined && value === ""}
              />
            </label>
            <label>
              <Input
                id="password"
                name="password"
                handleChange={handleChange}
                placeholder="Password"
                value={formData.password}
                className={`${styles["login-page__input"]}`}
                isRequired={true}
                errorStyle={styles.error}
                rule={(value: string) => value !== undefined && value === ""}
              />
            </label>
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
            <p>
              By clicking the button, you are agreeing to our{" "}
              <a href="#">Terms and Services</a>
            </p>
          </form>
        </div>
      </main>
    </div>
  )
}

export default LoginPage

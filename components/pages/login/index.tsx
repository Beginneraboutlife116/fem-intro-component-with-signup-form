import { useState, FormEventHandler, ChangeEventHandler } from "react"
import styles from "./login.module.scss"

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

export default function LoginPage() {
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
    <div className={styles["login-page"]}>
      <section>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </section>
      <main>
        <div>
          <p>
            <em>Try it free 7 days</em> then $20/mo. thereafter
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                type="text"
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </label>
            <label>
              <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                type="text"
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </label>
            <label>
              <input
                id="email"
                name="email"
                value={formData.email}
                type="email"
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </label>
            <label>
              <input
                id="password"
                name="password"
                value={formData.password}
                type="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </label>
            <button type="submit">CLAIM YOUR FREE TRIAL</button>
          </form>
          <p>
            By clicking the button, you are agreeing to our{" "}
            <em>Terms and Services</em>
          </p>
        </div>
      </main>
    </div>
  )
}

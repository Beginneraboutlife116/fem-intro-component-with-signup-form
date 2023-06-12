import Head from "next/head"
import { Controller, useForm, SubmitHandler } from "react-hook-form"
import { determineEmptyString, determineValidateEmail } from "../../utilities"
import styles from "./signup.module.scss"
import FormItem from "../../formItem"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const initialFormData: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting }
  } = useForm<FormValues>({ defaultValues: initialFormData })

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    if (Object.values(data).some((value) => value === "")) {
      console.error("Some unexpected behavior happened.")
      return
    }
    try {
      const response = await fetch("./api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.ok && response.status === 200) {
        const data = await response.json()
        console.log("return data: ", data)
      } else {
        throw new Error("Something wrong from response")
      }
    } catch (error) {
      throw new Error("Something wrong from server")
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
              onSubmit={handleSubmit(onSubmit)}
              className={`radius shadow ${styles["signup-page__form"]}`}>
              <Controller
                control={control}
                name="firstName"
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                  formState: { errors }
                }) => (
                  <FormItem
                    id="firstName"
                    name="firstName"
                    handleChange={onChange}
                    placeholder="First Name"
                    value={value}
                    inputClass={`${styles["signup-page__input"]}`}
                    errorStyle={styles.error}
                    isRequired={true}
                    successStyle={styles.success}
                    rule={determineEmptyString}
                    errorMessage="First Name cannot be empty"
                    errorMessageStyle={styles.error__message}
                  />
                )}
              />
              <Controller
                control={control}
                name="lastName"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <FormItem
                    id="lastName"
                    name="lastName"
                    handleChange={onChange}
                    placeholder="Last Name"
                    value={value}
                    inputClass={`${styles["signup-page__input"]}`}
                    isRequired={true}
                    errorStyle={styles.error}
                    successStyle={styles.success}
                    rule={determineEmptyString}
                    errorMessage="Last Name cannot be empty"
                    errorMessageStyle={styles.error__message}
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <FormItem
                    id="email"
                    name="email"
                    handleChange={onChange}
                    placeholder="Email Address"
                    value={value}
                    inputClass={`${styles["signup-page__input"]}`}
                    isRequired={true}
                    errorStyle={styles.error}
                    successStyle={styles.success}
                    rule={determineValidateEmail}
                    errorMessage="Looks like this is not an email"
                    errorMessageStyle={styles.error__message}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <FormItem
                    id="password"
                    name="password"
                    type="password"
                    handleChange={onChange}
                    placeholder="Password"
                    value={value}
                    inputClass={`${styles["signup-page__input"]}`}
                    isRequired={true}
                    errorStyle={styles.error}
                    successStyle={styles.success}
                    rule={determineEmptyString}
                    errorMessage="Password cannot be empty"
                    errorMessageStyle={styles.error__message}
                  />
                )}
              />
              <button
                type="submit"
                disabled={isValid ? (isSubmitting ? true : false) : true}>
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

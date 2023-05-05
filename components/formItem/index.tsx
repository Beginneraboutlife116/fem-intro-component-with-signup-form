import React, {
  ReactElement,
  ChangeEventHandler,
  ChangeEvent,
  useState
} from "react"
import Image from "next/image"
import styles from "./formItem.module.scss"

interface FormItem {
  type?: "text" | "email" | "number" | "password"
  title?: string | ReactElement
  placeholder?: string
  id?: string
  inputClass?: string
  labelClass?: string
  name?: string
  value: string | number | undefined
  handleChange: ChangeEventHandler<HTMLInputElement>
  isRequired?: boolean
  errorStyle?: string
  successStyle?: string
  errorMessage?: string | ReactElement
  errorMessageStyle?: string
  rule?: Function | null
}

const FormItem = ({
  type = "text",
  placeholder = "",
  id = "",
  inputClass = "",
  labelClass = "",
  name = "",
  handleChange,
  value,
  isRequired = false,
  errorStyle = "",
  successStyle = "",
  rule,
  errorMessage,
  errorMessageStyle = "",
  title
}: FormItem) => {
  const [isTyping, setIsTyping] = useState(false)
  let error = false

  if (rule) {
    error = rule(value)
  }

  const titleElement = typeof title === "string" ? <p>{title}</p> : title

  const errorMessageElement =
    typeof errorMessage === "string" ? (
      <p className={errorMessageStyle}>{errorMessage}</p>
    ) : (
      errorMessage
    )

  const handleTyping = (event: ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true)
    handleChange(event)
  }

  return (
    <label className={labelClass} style={{ position: "relative" }}>
      {titleElement}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleTyping}
        id={id}
        className={`${inputClass} ${
          isTyping ? (error ? errorStyle : successStyle) : ""
        }`.trim()}
        name={name}
        required={isRequired}
      />
      {isTyping ? error && errorMessageElement : null}
      {isTyping
        ? error && (
            <Image
              className={styles.icon}
              src="/images/icon-error.svg"
              alt=""
              width={24}
              height={24}
            />
          )
        : null}
    </label>
  )
}

export default FormItem

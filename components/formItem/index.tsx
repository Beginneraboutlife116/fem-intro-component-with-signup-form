import React, { ChangeEvent, useState } from "react"
import Image from "next/image"
import { FormItem } from "./formItem"
import styles from "./formItem.module.scss"

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
        className={`${inputClass} ${isTyping && error ? errorStyle : ""}`.trim()}
        name={name}
        required={isRequired}
      />
      {isTyping && error && errorMessageElement}
      {isTyping && error && (
        <Image
          className={styles.icon}
          src="/images/icon-error.svg"
          alt=""
          width={24}
          height={24}
        />
      )}
    </label>
  )
}

export default FormItem

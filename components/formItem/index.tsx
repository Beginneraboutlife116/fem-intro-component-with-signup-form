import React from "react"
import { FormItem } from "./formItem"

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
  let error

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

  return (
    <label className={labelClass} style={{ position: "relative" }}>
      {titleElement}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        id={id}
        className={`${inputClass} ${error ? errorStyle : ""}`.trim()}
        name={name}
        required={isRequired}
      />
      {error ? errorMessageElement : null}
    </label>
  )
}

export default FormItem

import React, { useState } from "react"
import { InputType } from "./input"

const Input = ({
  type = "text",
  placeholder = "",
  id = "",
  className = "",
  name = "",
  handleChange,
  value,
  isRequired = false,
  errorStyle = "",
  rule
}: InputType) => {
  let error
  if (rule) {
    error = rule(value)
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      id={id}
      className={(`${className} ${error ? errorStyle : ""}`).trim()}
      name={name}
      required={isRequired}
    />
  )
}

export default Input

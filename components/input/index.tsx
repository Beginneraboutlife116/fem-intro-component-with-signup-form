import React, { useState } from "react"
import { InputType } from "./input"
const Input = ({ type, placeholder = "", id = "", className = "", name = "" }: InputType) => {
  const [value, setValue] = useState("")

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        setValue(event.target.value)
      }}
      id={id}
      className={className}
      name={name}
    />
  )
}

export default Input

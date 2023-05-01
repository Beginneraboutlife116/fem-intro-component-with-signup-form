import { ChangeEventHandler } from "react"

type InputType = {
  type?: "text" | "email" | "number" | "password"
  placeholder?: string
  id?: string
  className?: string
  name?: string
  value: string | number | undefined
  handleChange: ChangeEventHandler<HTMLInputElement>
  isRequired?: boolean
  errorStyle?: string
  rule?: Function | null
}

export { type InputType }

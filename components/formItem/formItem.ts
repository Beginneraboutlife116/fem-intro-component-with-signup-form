import { CSSProperties, ChangeEventHandler, ReactElement } from "react"

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
  errorMessage?: string | ReactElement
  errorMessageStyle?: string
  rule?: Function | null
}

export { type FormItem }

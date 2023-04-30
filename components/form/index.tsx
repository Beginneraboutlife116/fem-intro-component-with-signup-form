import { useState, ReactElement } from "react"
type Form = {
  children: ReactElement
}

const Form = ({children}: Form) => {
  const [inputError, setInputError] = useState(null)
}

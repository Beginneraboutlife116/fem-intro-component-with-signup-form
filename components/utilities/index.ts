const determineEmptyString: (value: string) => boolean = (value) => value === ""

const determineValidateEmail: (value: string) => boolean = (value) => {
  const pattern = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  return value !== undefined && !pattern.test(value)
}

export { determineEmptyString, determineValidateEmail }

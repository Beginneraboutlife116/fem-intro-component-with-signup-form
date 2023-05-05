const determineEmptyString: (value: string) => boolean = (value) => value === ""

const determineInputExceedsLimit: (limit: number) => (value: string) => boolean = (limit) => (value) => value ? value.length > limit : false

const determineValidateEmail: (value: string) => boolean = (value) => {
  const pattern = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  return value !== undefined && !pattern.test(value)
}

export {
  determineEmptyString,
  determineInputExceedsLimit,
  determineValidateEmail
}

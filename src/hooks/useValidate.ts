import { PaymentDetails } from '../types'
import { useState } from 'react'

interface Errors {
  bill: string
  numberOfPeople: string
}

export const useValidate = () => {
  const [errors, setErrors] = useState<Errors>({
    bill: '',
    numberOfPeople: '',
  })
  const validate = (payment: PaymentDetails) => {
    const newErrors = {} as Errors

    if (payment.numberOfPeople === 0) {
      newErrors.numberOfPeople = `Can’t be zero`
    }

    if (payment.bill === 0) {
      newErrors.bill = `Can’t be zero`
    }

    setErrors({ ...newErrors })

    return !!Object.keys(newErrors).length
  }

  return {
    errors,
    validate,
  }
}

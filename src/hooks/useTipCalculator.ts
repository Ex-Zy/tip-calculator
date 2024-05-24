import { useCalculate } from './useCalculate.ts'
import React from 'react'

export const useTipCalculator = () => {
  const { paymentDetails, coastDetails, handlePaymentChange } = useCalculate({
    tip: 15,
    bill: 142.55,
    numberOfPeople: 5,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    handlePaymentChange({ ...paymentDetails, [name]: Number(value) })
  }

  const handleReset = () => {
    handlePaymentChange({ tip: 0, bill: 0, numberOfPeople: 0 })
  }

  return {
    paymentDetails,
    coastDetails,
    handleChange,
    handleReset,
  }
}

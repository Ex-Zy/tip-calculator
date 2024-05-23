import { CoastDetails, PaymentDetails } from '../types'
import { useEffect, useState } from 'react'
import { roundToTwoDecimal } from '../utils'

export const useCalculate = (initialPayments: PaymentDetails) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>(initialPayments)
  const [coastDetails, setCoastDetails] = useState<CoastDetails>({ tipAmount: 0, total: 0 })

  useEffect(() => {
    calculateTip(paymentDetails)
  }, [])

  function calculateTip({ tip, bill, numberOfPeople }: PaymentDetails) {
    const totalTip = (tip / 100) * bill
    const tipPerPerson = roundToTwoDecimal(totalTip / numberOfPeople)
    const totalPerPerson = roundToTwoDecimal((bill + totalTip) / numberOfPeople)

    setCoastDetails({
      tipAmount: isNaN(tipPerPerson) ? 0 : tipPerPerson,
      total: isNaN(totalPerPerson) ? 0 : totalPerPerson,
    })
  }

  function handlePaymentChange(payment: PaymentDetails) {
    setPaymentDetails(payment)
    calculateTip(payment)
  }

  return {
    paymentDetails,
    coastDetails,
    handlePaymentChange,
  }
}

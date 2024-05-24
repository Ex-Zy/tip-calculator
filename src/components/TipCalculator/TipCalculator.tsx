import './TipCalculator.scss'
import React from 'react'
import { useTipCalculator } from '../../hooks/useTipCalculator.ts'
import { CoastDetails } from '../CoastDetails/CoastDetails.tsx'
import { PaymentDetails } from '../PaymentDetails/PaymentDetails.tsx'

interface Props {
  className: string
}

export const TipCalculator: React.FC<Props> = ({ className = '' }: Props) => {
  const { paymentDetails, coastDetails, handleChange, handleReset } = useTipCalculator()

  return (
    <form className={`tip-calculator ${className}`}>
      <PaymentDetails details={paymentDetails} handleChange={handleChange} />
      <CoastDetails details={coastDetails} handleReset={handleReset} />
    </form>
  )
}

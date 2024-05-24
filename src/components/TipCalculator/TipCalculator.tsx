import './TipCalculator.scss'
import React from 'react'
import { useTipCalculator } from '../../hooks/useTipCalculator.ts'
import { InputField } from '../InputField/InputField.tsx'
import { RadioGroup } from '../RadioGroup/RadioGroup.tsx'
import { CoastDetails } from '../CoastDetails/CoastDetails.tsx'

interface Props {
  className: string
}

export const TipCalculator: React.FC<Props> = ({ className = '' }: Props) => {
  const { paymentDetails, coastDetails, handleChange, handleReset } = useTipCalculator()

  return (
    <form className={`tip-calculator ${className}`}>
      <div className="payment-details">
        <InputField
          label="Bill"
          type="number"
          name="bill"
          value={paymentDetails.bill}
          min={0}
          onChange={handleChange}
        />
        <RadioGroup values="5,10,15,25,50" groupName="tip" selected={paymentDetails.tip} handleChange={handleChange}>
          <InputField type="number" name="tip" value={paymentDetails.tip} min={0} onChange={handleChange} />
        </RadioGroup>
        <InputField
          label="Number of People"
          type="number"
          name="numberOfPeople"
          value={paymentDetails.numberOfPeople}
          min={0}
          onChange={handleChange}
        />
      </div>
      <CoastDetails details={coastDetails} handleReset={handleReset} />
    </form>
  )
}

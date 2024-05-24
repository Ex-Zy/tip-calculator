import './PaymentDetails.scss'
import { InputField } from '../InputField/InputField.tsx'
import { RadioGroup } from '../RadioGroup/RadioGroup.tsx'
import React from 'react'
import { PaymentDetails as IPaymentDetails } from '../../types'

interface Props {
  details: IPaymentDetails
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const PaymentDetails: React.FC<Props> = ({ details, handleChange }: Props) => {
  return (
    <div className="payment-details">
      <InputField label="Bill" type="number" name="bill" value={details.bill} min={0} onChange={handleChange} />
      <RadioGroup values="5,10,15,25,50" groupName="tip" selected={details.tip} handleChange={handleChange}>
        <InputField type="number" name="tip" value={details.tip} min={0} onChange={handleChange} />
      </RadioGroup>
      <InputField
        label="Number of People"
        type="number"
        name="numberOfPeople"
        value={details.numberOfPeople}
        min={0}
        onChange={handleChange}
      />
    </div>
  )
}

import './TipCalculator.scss'
import React from 'react'
import { useTipCalculator } from '../../hooks/useTipCalculator.ts'
import { InputField } from '../InputField/InputField.tsx'

interface Props {
  className: string
}

export const TipCalculator: React.FC<Props> = ({ className = '' }: Props) => {
  const { paymentDetails, coastDetails, handleChange, handleReset } = useTipCalculator()

  return (
    <form className={`tip-calculator ${className}`}>
      <div className="bill-section">
        <InputField
          label="Bill"
          type="number"
          name="bill"
          value={paymentDetails.bill}
          min={0}
          onChange={handleChange}
        />
        <fieldset>
          <legend>Select Tip %</legend>
          <label>
            5%
            <input type="radio" name="tip" value="5" checked={paymentDetails.tip === 5} onChange={handleChange} />
          </label>
          <label>
            10%
            <input type="radio" name="tip" value="10" checked={paymentDetails.tip === 10} onChange={handleChange} />
          </label>
          <label>
            15%
            <input type="radio" name="tip" value="15" checked={paymentDetails.tip === 15} onChange={handleChange} />
          </label>
          <label>
            25%
            <input type="radio" name="tip" value="25" checked={paymentDetails.tip === 25} onChange={handleChange} />
          </label>
          <label>
            50%
            <input type="radio" name="tip" value="50" checked={paymentDetails.tip === 50} onChange={handleChange} />
          </label>
        </fieldset>
        <InputField
          label="Number of People"
          type="number"
          name="numberOfPeople"
          value={paymentDetails.numberOfPeople}
          min={0}
          onChange={handleChange}
        />
      </div>
      <div className="result-section">
        <div className="result">
          <div className="result__desc">
            <div className="resul__title">Tip Amount</div>
            <div className="resul__sub">/ person</div>
          </div>
          <div className="result__value">${coastDetails.tipAmount}</div>
        </div>
        <div className="result">
          <div className="result__desc">
            <div className="resul__title">Total</div>
            <div className="resul__sub">/ person</div>
          </div>
          <div className="result__value">${coastDetails.total}</div>
        </div>
        <button type="button" className="btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  )
}

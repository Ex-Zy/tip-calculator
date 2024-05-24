import React from 'react'
import { CoastDetails as ICoastDetails } from '../../types'
import './CoastDetails.scss'

interface Props {
  details: ICoastDetails
  handleReset: () => void
}

export const CoastDetails: React.FC<Props> = ({ details, handleReset }: Props) => {
  return (
    <div className="coast-details">
      <div className="details">
        <div className="details__desc">
          <div className="details__title">Tip Amount</div>
          <div className="details__sub">/ person</div>
        </div>
        <div className="details__value">${details.tipAmount}</div>
      </div>
      <div className="details">
        <div className="details__desc">
          <div className="details__title">Total</div>
          <div className="details__sub">/ person</div>
        </div>
        <div className="details__value">${details.total}</div>
      </div>
      <button type="button" className="coast-details__btn btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  )
}

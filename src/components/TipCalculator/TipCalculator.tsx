import './TipCalculator.scss'
import React from 'react'

interface Props {
  className: string
}

export const TipCalculator: React.FC<Props> = ({ className = '' }: Props) => {
  return (
    <form className={`tip-calculator ${className}`}>
      <h1>Tip calculator</h1>
    </form>
  )
}

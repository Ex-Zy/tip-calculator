import './RadioButton.scss'
import React from 'react'

interface Props {
  name: string
  label: string
  checked: boolean
  value: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioButton: React.FC<Props> = (props: Props) => {
  return (
    <label className={`radio ${props.checked ? 'radio--checked' : ''}`}>
      {props.label && <span className="radio__label">{props.label}</span>}
      <input
        type="radio"
        name={props.name}
        className="radio__el"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
    </label>
  )
}

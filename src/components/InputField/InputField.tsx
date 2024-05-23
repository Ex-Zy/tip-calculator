import './InputField.scss'
import React from 'react'

interface Props {
  type: 'text' | 'number'
  name: string
  value: string | number
  label?: string
  placeholder?: string
  disabled?: boolean
  error?: boolean
  errorText?: string
  min?: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputField: React.FC<Props> = (props: Props) => {
  return (
    <label className="input-field">
      {props.label && <span className="input-field__label">{props.label}</span>}
      <input
        type={props.type}
        name={props.name}
        min={props.min}
        placeholder={props.placeholder}
        className={`input-field__el ${props.error ? 'input-field__el--error' : ''}`}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      {props.errorText && <span className="input-field__error">{props.errorText}</span>}
    </label>
  )
}

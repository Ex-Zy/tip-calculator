import './RadioGroup.scss'
import React from 'react'
import { RadioButton } from '../RadioButton/RadioButton.tsx'

interface Props {
  values: string
  selected: number
  groupName: string
  children?: React.ReactElement
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RadioGroup: React.FC<Props> = (props: Props) => {
  const values = props.values.split(',')

  return (
    <fieldset className="radio-group">
      <legend className="radio-group__label">Select Tip %</legend>
      {values.map((value) => {
        return (
          <RadioButton
            key={value}
            name={props.groupName}
            value={value}
            label={value + '%'}
            checked={value === String(props.selected)}
            onChange={props.handleChange}
          />
        )
      })}
      {props.children}
    </fieldset>
  )
}

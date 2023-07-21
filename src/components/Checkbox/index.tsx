import React from 'react'

import { Check } from '@phosphor-icons/react'

import styles from './styles.module.css'

interface CheckboxProps {
  checked: boolean
  onClick(): void
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked, onClick }) => {
  return (
    <button className={styles.container} onClick={onClick}>
      <div data-checked={checked}>{checked && <Check size={10} />}</div>
    </button>
  )
}

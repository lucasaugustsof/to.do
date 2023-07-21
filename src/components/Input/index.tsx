import React from 'react'

import styles from './styles.module.css'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

// const regexCheckForCharacters = '/^[a-zA-Z]*$/'

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className={styles.container}
      type="text"
      placeholder="Adicione uma nova tarefa"
      // pattern={regexCheckForCharacters}
      {...props}
    />
  )
}

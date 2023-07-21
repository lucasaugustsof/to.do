import React from 'react'

import { PlusCircle } from '@phosphor-icons/react'

import styles from './styles.module.css'

type FormProps = React.FormHTMLAttributes<HTMLFormElement>

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
  return (
    <form className={styles.container} {...props}>
      {children}

      <button>
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  )
}

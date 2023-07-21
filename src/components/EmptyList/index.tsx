import React from 'react'

import styles from './styles.module.css'

export const EmptyList: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  )
}

import React from 'react'

import styles from './styles.module.css'

interface EmptyListProps {
  testID?: string
}

export const EmptyList: React.FC<EmptyListProps> = ({ testID }) => {
  return (
    <div className={styles.container} data-testid={testID}>
      <span>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </span>
    </div>
  )
}

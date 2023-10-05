import React from 'react'

import styles from './styles.module.css'

interface QuantitiesProps {
  testID?: string
  created?: number
  completed?: number
}

export const Quantities: React.FC<QuantitiesProps> = ({
  testID,
  created = 0,
  completed = 0,
}) => {
  return (
    <div className={styles.container} data-testid={testID}>
      <div>
        <strong>Tarefas criadas</strong>

        <span className={styles.counter}>{created}</span>
      </div>

      <div>
        <strong>Concluídas</strong>

        <span className={styles.counter}>
          {created > 0 ? `${completed} de ${created}` : completed}
        </span>
      </div>
    </div>
  )
}

import React from 'react'

import styles from './styles.module.css'

interface InformationProps {
  created?: number
  completed?: number
}

export const Quantities: React.FC<InformationProps> = ({
  created = 0,
  completed = 0,
}) => {
  return (
    <div className={styles.container}>
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

import React, { useState } from 'react'

import { Trash } from '@phosphor-icons/react'

import { Checkbox } from '../Checkbox'

import styles from './styles.module.css'

interface TaskItemProps {
  testID?: string
  title: string
  onCompleteTask(): void
  onDeleteTask(): void
}

export const TaskItem: React.FC<TaskItemProps> = ({
  testID,
  title,
  onCompleteTask,
  onDeleteTask,
}) => {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckChange() {
    setIsChecked(!isChecked)

    onCompleteTask()
  }

  return (
    <li className={styles.container} data-testid={testID}>
      <div>
        <Checkbox onClick={handleCheckChange} checked={isChecked} />

        <p className={styles.taskTitle} data-completed={isChecked}>
          {title}
        </p>
      </div>

      <button className={styles.deleteButton} onClick={onDeleteTask}>
        <Trash size={14} />
      </button>
    </li>
  )
}

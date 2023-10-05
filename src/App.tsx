import React, { useState } from 'react'
import './global.css'

import { v4 as uuid } from 'uuid'

import { Form } from './components/Form'
import { Input } from './components/Input'
import { Quantities } from './components/Quantities'
import { EmptyList } from './components/EmptyList'
import { TaskItem } from './components/TaskItem'

import logoSvg from './assets/logo.svg'

import styles from './App.module.css'

interface TaskList {
  id: string
  title: string
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskList[]>([])
  const [completedTasks, setCompletedTasks] = useState<string[]>([])

  const [taskName, setTaskName] = useState('')

  function handleFieldAddTaskName(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value)

    event.target.setCustomValidity('')
  }

  function handleFieldInvalidation(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('O nome da tarefa é obrigatório')
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: String(uuid()), title: taskName },
    ])

    setTaskName('')
  }

  function removeCompletedTask(taskId: string) {
    const newListCompletedWithoutTask = completedTasks.filter(
      (id) => id !== taskId,
    )

    setCompletedTasks(newListCompletedWithoutTask)
  }

  function handleCompleteTask(taskId: string) {
    const isCompleted = completedTasks.includes(taskId)

    if (isCompleted) {
      return removeCompletedTask(taskId)
    }

    setCompletedTasks((prevIdCompletedTasks) => [
      ...prevIdCompletedTasks,
      taskId,
    ])
  }

  function handleDeleteTask(taskId: string) {
    const newListWithoutDeletedItem = tasks.filter((task) => task.id !== taskId)

    setTasks(newListWithoutDeletedItem)

    removeCompletedTask(taskId)
  }

  return (
    <div className={styles.container}>
      <header>
        <img src={logoSvg} alt="Logomarca do to.do" />
      </header>

      <main>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleFieldAddTaskName}
            value={taskName}
            onInvalid={handleFieldInvalidation}
            required
            data-testid="test:input"
          />
        </Form>

        <Quantities created={tasks.length} completed={completedTasks.length} />

        {tasks.length ? (
          <ul data-testid="test:task-list">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                title={task.title}
                onCompleteTask={() => handleCompleteTask(task.id)}
                onDeleteTask={() => handleDeleteTask(task.id)}
              />
            ))}
          </ul>
        ) : (
          <EmptyList testID="test:empty-list" />
        )}
      </main>
    </div>
  )
}

export default App

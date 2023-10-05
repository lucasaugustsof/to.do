import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import App from './App'

describe('App', () => {
  const setupCreateTask = async () => {
    render(<App />)

    const inputComponent = screen.getByTestId<HTMLInputElement>('test:input')
    const createButtonComponent =
      screen.getByTestId<HTMLButtonElement>('test:create-button')

    await userEvent.type(inputComponent, 'Refactor my code')
    await userEvent.click(createButtonComponent)

    return {
      inputComponent,
      createButtonComponent,
      taskListComponent: screen.getByTestId('test:task-list'),
    }
  }

  it('should create a task correctly', async () => {
    const { taskListComponent } = await setupCreateTask()
    expect(taskListComponent.children.length).not.toEqual(0)
  })

  it('should delete a task correctly', async () => {
    const { taskListComponent } = await setupCreateTask()

    const taskItemComponent = taskListComponent.children[0]
    const deleteTaskButton = taskItemComponent.children[1]

    await userEvent.click(deleteTaskButton)

    const emptyListComponent = screen.getByTestId('test:empty-list')

    expect(emptyListComponent).toBeInTheDocument()
  })
})

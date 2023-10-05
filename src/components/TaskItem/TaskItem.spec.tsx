import { describe, it, expect, vi } from 'vitest'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { TaskItem } from '.'

const onCompleteTask = vi.fn()
const onDeleteTask = vi.fn()

const testID = 'test:task-item'

describe('Components/TaskItem', () => {
  it('Should render the TaskItem component correctly', () => {
    const { asFragment } = render(
      <TaskItem
        title="Refactor my code"
        onCompleteTask={onCompleteTask}
        onDeleteTask={onDeleteTask}
      />,
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('should call the onCompleteTask function once', async () => {
    render(
      <TaskItem
        testID={testID}
        title="Refactor my code"
        onCompleteTask={onCompleteTask}
        onDeleteTask={onDeleteTask}
      />,
    )

    const checkboxComponent = screen.getByTestId(testID).children[0].children[0]
    await userEvent.click(checkboxComponent)

    expect(onCompleteTask).toBeCalledTimes(1)
  })

  it('should call the onDeleteTask function once', async () => {
    render(
      <TaskItem
        testID={testID}
        title="Refactor my code"
        onCompleteTask={onCompleteTask}
        onDeleteTask={onDeleteTask}
      />,
    )

    const deleteButtonComponent = screen.getByTestId(testID).children[1]
    await userEvent.click(deleteButtonComponent)

    expect(onCompleteTask).toBeCalledTimes(1)
  })
})

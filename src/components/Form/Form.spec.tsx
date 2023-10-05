import { FormEvent } from 'react'

import { describe, it, expect, vi } from 'vitest'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Form } from '.'

describe('Components/Form', () => {
  it('should render the Form component correctly', () => {
    const { asFragment } = render(<Form />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should call the submit function after clicking the create button', async () => {
    const onSubmit = vi.fn((event: FormEvent) => event.preventDefault())

    render(<Form onSubmit={onSubmit} />)

    const createButtonComponent = screen.getByTestId('test:create-button')
    await userEvent.click(createButtonComponent)

    expect(onSubmit).toBeCalled()
  })

  it('should render its children correctly', () => {
    const testID = 'test:root-form'

    render(
      <Form data-testid={testID}>
        <h1>Create a new task</h1>
      </Form>,
    )

    const formComponent = screen.getByTestId(testID)

    expect(formComponent.children.length).toEqual(2)
  })
})

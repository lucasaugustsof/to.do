import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Input } from '.'

const testID = 'test:input'
describe('Components/Input', () => {
  it('should render the Form component correctly', () => {
    const { asFragment } = render(<Input />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should write a text correctly', async () => {
    const testInputValue = 'Typed text'

    render(<Input data-testid={testID} />)

    const inputComponent = screen.getByTestId<HTMLInputElement>(testID)
    await userEvent.type(inputComponent, testInputValue)

    expect(inputComponent.value).toBe(testInputValue)
  })

  it('should render correct placeholder', () => {
    render(<Input data-testid={testID} />)

    const inputComponent = screen.getByTestId<HTMLInputElement>(testID)

    expect(inputComponent.placeholder).not.toEqual('Placeholder')
  })

  it('should be disabled when the disable property is activated', () => {
    render(<Input data-testid={testID} disabled />)

    const inputComponent = screen.getByTestId<HTMLInputElement>(testID)

    expect(inputComponent.disabled).toBeTruthy()
  })
})

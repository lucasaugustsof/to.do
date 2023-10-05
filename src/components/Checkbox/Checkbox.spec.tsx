import { describe, it, vi, expect } from 'vitest'

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Checkbox } from '.'

const onClick = vi.fn()

describe('Components/Checkbox', () => {
  it('should render the Checkbox component correctly', () => {
    const { asFragment } = render(<Checkbox onClick={onClick} checked />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should call the click event at least 1 time', async () => {
    render(<Checkbox onClick={onClick} checked={false} />)

    const checkboxComponent = screen.getByRole('button')
    await userEvent.click(checkboxComponent)

    expect(onClick).toHaveBeenCalledOnce()
  })

  it('should render a check icon when the checked property is true', () => {
    render(<Checkbox onClick={onClick} checked />)

    const checkboxComponent = screen.getByRole('button').children[0]
    const checkboxCheckIcon = checkboxComponent.children[0]

    expect(checkboxComponent.getAttribute('data-checked')).toBeTruthy()
    expect(checkboxCheckIcon.getElementsByTagName('svg')).toBeTruthy()
  })
})

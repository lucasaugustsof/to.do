import { describe, it, expect } from 'vitest'

import { render } from '@testing-library/react'

import { EmptyList } from '.'

describe('Components/EmptyList', () => {
  it('should render the EmptyList component correctly', () => {
    const { asFragment } = render(<EmptyList />)

    expect(asFragment()).toMatchSnapshot()
  })
})

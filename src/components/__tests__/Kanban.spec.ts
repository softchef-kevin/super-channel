import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Kanban from '../Kanban.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Kanban, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

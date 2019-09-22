import { shallowMount } from '@vue/test-utils'
import Button from "./Button.vue";

describe('Button.vue', () => {
  it('renders button label', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Button, {
      slots:{default: msg}
    });
    expect(wrapper.text()).toMatch(msg)
  })
})
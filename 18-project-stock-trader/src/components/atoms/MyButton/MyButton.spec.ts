import { shallowMount } from '@vue/test-utils'
import MyButton from "./MyButton.vue";

describe('MyButton.vue', () => {
  it('renders button label', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MyButton, {
      slots:{default: msg}
    });
    expect(wrapper.text()).toMatch(msg)
  })
})
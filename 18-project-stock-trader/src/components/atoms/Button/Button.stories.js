/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Button from '../components/Button.vue'

storiesOf('Button', module)
  .add('with text', () => ({
    components: { Button },
    template: '<app-button @click="action">Hello Button</app-button>',
    methods: { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { Button },
    render() {
      return <app-button onClick={this.action}>With JSX</app-button>;
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { Button },
    template: '<app-button @click="action">😀 😎 👍 💯</app-button>',
    methods: { action: action('clicked') }
  }))

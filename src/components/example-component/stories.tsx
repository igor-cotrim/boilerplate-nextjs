import { Meta, Story } from '@storybook/react'

import ExampleComponent from '.'

export default {
  title: 'Boilerplate NextJS',
  component: ExampleComponent
} as Meta

export const Basic: Story = (args) => <ExampleComponent {...args} />

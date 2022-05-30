import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "./button"

export default {
  title: "Example/Button",
  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      options: ["primary", "secondary", "inverse"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  variant: "primary",
  label: "Button",
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: "secondary",
  label: "Button",
}

export const Inverse = Template.bind({})
Inverse.args = {
  variant: "inverse",
  label: "Button",
}

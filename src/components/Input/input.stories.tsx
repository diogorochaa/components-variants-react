import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Input } from "./input"

export default {
	title: "Example/Input",
	component: Input,

	argTypes: {
		size: {
			options: ["sm", "md", "lg"],
			control: { type: "radio" },
		},
		label: { control: "text" },
	},
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Error = Template.bind({})

Error.args = {
	variant: "error",
	label: "Error",
}

export const Success = Template.bind({})
Success.args = {
	variant: "success",
	label: "Success",
}

export const Default = Template.bind({})
Default.args = {
	variant: "default",
	label: "Default",
}

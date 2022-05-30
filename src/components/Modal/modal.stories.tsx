import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Modal } from "./modal"

export default {
	title: "Example/Modal",
	component: Modal,

	argTypes: {
		show: {
			options: ["true", "false"],
			control: { type: "radio" },
		},
	},
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Show = Template.bind({})
Show.args = {
	show: true,
	title: "Modal",
	children: "Modal content",
}

export const Hide = Template.bind({})
Hide.args = {
	show: false,
	title: "Modal",
	children: "Modal content",
}

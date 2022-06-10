import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Header } from "./header"

export default {
	title: "Example/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const LoggedOut = Template.bind({})
LoggedOut.args = {
	label: "Header",
}

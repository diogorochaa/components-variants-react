import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Header } from "./Header"

export default {
	title: "Example/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const LoggedOut = Template.bind({})
LoggedOut.args = {}

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Card } from "./card"

export default {
	title: "Example/Card",
	component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Show = Template.bind({})
Show.args = {
	title: "Card",
	children: "Card content",
}

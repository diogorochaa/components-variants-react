import { render } from "@testing-library/react"
import { Card } from "./card"
import renderer from "react-test-renderer"

it("text", () => {
	const { getByText } = render(<Card title="Card" children="Card content" />)
	expect(getByText("Card")).toBeTruthy()
})

it("renders correctly", () => {
	const tree = renderer
		.create(<Card title="Card" children="Card content" />)
		.toJSON()
	expect(tree).toMatchSnapshot()
})

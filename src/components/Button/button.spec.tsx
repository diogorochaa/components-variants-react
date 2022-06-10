import { render } from "@testing-library/react"
import { Button } from "./button"
import renderer from "react-test-renderer"

it("text", () => {
	const { getByText } = render(<Button label="Button" />)
	expect(getByText("Button")).toBeTruthy()
})

it("renders correctly", () => {
	const tree = renderer.create(<Button label="Button" />).toJSON()
	expect(tree).toMatchSnapshot()
})

import { render } from "@testing-library/react"
import { Input } from "./input"
import renderer from "react-test-renderer"

it("text", () => {
	const { getByText } = render(
		<Input label="Default" variant="default" size="md" />
	)
	expect(getByText("Default")).toBeTruthy()
})

it("renders correctly", () => {
	const tree = renderer.create(<Input label="Default" />).toJSON()
	expect(tree).toMatchSnapshot()
})

import { render } from "@testing-library/react"
import { Header } from "./header"
import renderer from "react-test-renderer"

it("text", () => {
	const { getByText } = render(<Header label="Header" />)
	expect(getByText("Header")).toBeTruthy()
})

it("renders correctly", () => {
	const tree = renderer.create(<Header label="Header" />).toJSON()
	expect(tree).toMatchSnapshot()
})

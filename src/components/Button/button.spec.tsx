import { render } from "@testing-library/react"
import { Button } from "./button"

test("text", () => {
  const { getByText } = render(<Button label="Button" />)
  expect(getByText("Button")).toBeTruthy()
})

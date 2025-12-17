import type { ComponentProps, JSX } from "react"

export const Button = (props: ComponentProps<"button">): JSX.Element => {
	return (
		<button {...props}></button>
	)
}

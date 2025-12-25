import type { ComponentProps, JSX } from "react";

export default function Input(props: ComponentProps<"input">): JSX.Element {
	return <input {...props}></input>;
}

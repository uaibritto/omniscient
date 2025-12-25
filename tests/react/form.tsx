import { type JSX, useActionState } from "react";
import { action } from "@/actions";

export default function Form(): JSX.Element {
	const [_, formAction, isPending] = useActionState(action, null);

	return (
		<form action={formAction}>
import type { JSX } from "react"

export const Form = (): JSX.Element => {
	return (

	)
}			<button type="submit" disabled={isPending}>
				{isPending ? "Loading..." : "Submit"}
			</button>
		</form>
	);
}

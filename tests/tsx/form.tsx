import { type JSX, useActionState } from "react"
import { action } from "~/actions"

export default function Form(): JSX.Element {
	const [state, formAction, isPending] = useActionState(action, null)

	return (
		<form action={action}>

			<button type="submit" disabled={isPending}>
				{isPending ? "Loading..." : "Submit"}
			</button>
		</form>
	)
}

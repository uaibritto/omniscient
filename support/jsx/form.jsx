import { useActionState } from "react"
import { action } from "~/actions"

export default function Form() {
	const [state, formAction, isPending] = useActionState(action, null)

	return (
		<form action={formAction}>
			<button type="submit" disabled={isPending}>
				{isPending ? "Loading..." : "Submit"}
			</button>
		</form>
	)
}

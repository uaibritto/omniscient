export async function action(_: null, form: FormData) {
	const name = form.get("name")

	console.log(name)
}

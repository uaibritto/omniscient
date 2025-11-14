import { useQuery } from "@tanstack/react-query"
import type { JSX } from "react"

export default function List(): JSX.Element {
	const [data, isLoading, error] = useQuery({
		queryKey: [""],
		queryFn: async () => {}
	})

	return (

	)
}

import { useQuery } from "@tanstack/react-query"

export default function List() {
	const [data, isLoading, error] = useQuery({
		queryKey: [""],
		queryFn: async () => {  }
	})

	return (

	)
}

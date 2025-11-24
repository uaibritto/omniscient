import type { JSX } from "react"
import { BrowserRouter, Route, Routes } from "react-router"

export default function Router(): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<h1>Layout</h1>}>
					<Route index element={<h1>Home</h1>} />
				</Route>

				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	)
}

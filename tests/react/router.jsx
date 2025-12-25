import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "@/pages";
import { NotFound } from "@/pages/erros";
import RootLayout from "@/rootLayout";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

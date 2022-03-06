import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./pages";
import { Sidebar } from "./components";

const App = () => {
  return (
		<div className="flex">
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</div>
	);
}

export default App
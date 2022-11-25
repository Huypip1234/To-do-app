import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="h-[100vh] flex items-center justify-center flex-col bg-slate-100">
			<div className="h-[calc(100vh-(5rem+1.25rem+20rem))]">
				<Header />
				<Body />
			</div>
			<Footer />
		</div>
	);
}

export default App;

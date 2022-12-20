import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//detect mobile
import { isMobile } from "react-device-detect";

function App() {
	return (
		<div
			className={`${
				isMobile ? "h-90vh" : "h-screen"
			} flex items-center justify-center flex-col`}
		>
			<div className="h-[36rem]">
				<Header />
				<Body />
			</div>
			<Footer />
		</div>
	);
}

export default App;

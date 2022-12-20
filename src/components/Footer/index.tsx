import React from "react";
import avatar from "../../image/avatar.jpg";

const index = () => {
	return (
		<div
			className={`h-20 w-72 ${
				window.screen.height < 800 ? "hidden" : "flex"
			} justify-center bg-white my_shadow rounded-full cursor-pointer`}
		>
			<div className="flex w-[15.5rem] justify-between items-center">
				<div className="w-16">
					<img
						src={avatar}
						alt="Lỗi ảnh cmnr"
						className="w-full rounded-full drop-shadow-2xl"
					/>
				</div>
				<div className="text-xl drop-shadow-2xl">Copyright © 2022</div>
			</div>
		</div>
	);
};

export default index;

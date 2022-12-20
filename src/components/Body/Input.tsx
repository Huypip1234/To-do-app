import React from "react";
import { useContext, useEffect } from "react";
//context
import { myContext } from "./context";
//react icon
import { IoIosAdd } from "react-icons/io";
//detect mobile
import { isMobile } from "react-device-detect";

const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
	const { item, addItem, onChangeHandle, scrollFocus, focusInput } =
		useContext(myContext);

	if (isMobile) {
		//mobile: Bo het ScrollFocus va FocusInput
		return (
			<div className="flex items-center">
				<form
					onSubmit={(e) => {
						addItem(e);
					}}
				>
					<input
						ref={ref}
						type="text"
						value={item}
						placeholder="task..."
						onChange={(e) => {
							onChangeHandle(e.target.value);
						}}
						spellCheck={false}
						className="h-10 w-64 ssm:w-72 sm:w-80 outline-none rounded-md px-4 py-2 my_shadow"
					/>
				</form>
				<div
					onClick={() => {
						addItem();
					}}
					className="ml-3"
				>
					<IoIosAdd className="cursor-pointer" size="1.875rem" />
				</div>
			</div>
		);
	}

	//PC - laptop: Giu nguyen ScrollFocus va FocusInput
	useEffect(() => {
		scrollFocus();
	});

	return (
		<div className="flex items-center">
			<form
				onSubmit={(e) => {
					addItem(e);
					scrollFocus();
				}}
			>
				<input
					ref={ref}
					type="text"
					value={item}
					placeholder="task..."
					onChange={(e) => {
						onChangeHandle(e.target.value);
					}}
					spellCheck={false}
					className="h-10 w-64 ssm:w-72 sm:w-80 outline-none rounded-md px-4 py-2 my_shadow"
				/>
			</form>
			<div
				onClick={() => {
					addItem();
					focusInput();
					scrollFocus();
				}}
				className="ml-3"
			>
				<IoIosAdd className="cursor-pointer" size="1.875rem" />
			</div>
		</div>
	);
});

export default Input;

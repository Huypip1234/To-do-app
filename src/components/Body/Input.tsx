import React from "react";
import { useState, useContext, useRef, useEffect } from "react";
//context
import { myContext } from './context';
//react icon
import { IoIosAdd } from "react-icons/io";

const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
    const {item, addItem, onChangeHandle, scrollFocus, focusInput} = useContext(myContext);
    useEffect(() => {
        scrollFocus();
    })
	return (
		<div className="flex items-center">
            <form onSubmit={e => {addItem(e), scrollFocus()}}>
                <input ref={ref} type="text" value={item} placeholder="task..."
                onChange = {e => {onChangeHandle(e.target.value)}} spellCheck={false} 
                className="h-10 w-72 ssm:w-80 outline-none rounded-md px-4 py-2 my_shadow"
                />
            </form>
            <div onClick={() => {addItem(), focusInput(), scrollFocus()}} className="ml-3">
                <IoIosAdd className="cursor-pointer" size="1.875rem"/>
            </div>
		</div>
	);
});

export default Input;

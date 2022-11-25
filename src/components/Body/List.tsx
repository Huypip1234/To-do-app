import React from "react";
import { useState, useContext, useRef, useEffect } from "react";
//context
import { myContext } from './context';
//React-Icon
import {MdDeleteOutline} from "react-icons/md";

const List = React.forwardRef<{}, HTMLLIElement>((props: {element: string, myKey: number}, ref) => {
    const {deleteItem} = useContext(myContext);
	const [check, setCheck] = useState(false);
	return (
		<>
			<li ref={ref} className='text-lg flex justify-between items-center break-all mr-4 mb-2 ml-2'>
				<div>
					<input type="checkbox" onChange={(e) => {e.target.checked ? setCheck(true) : setCheck(false)}}
						className="h-5 w-5 accent-black cursor-pointer my_shadow"/>
				</div>
				<div className={`w-56 ssm:w-64 ${check ? 'line-through' : ''}`}>
					{props.element}
				</div>
				<div onClick={() => {deleteItem(props.myKey)}} className=""> 
					<MdDeleteOutline className="cursor-pointer" size="1.5rem"/>
				</div>
			</li>
		</>
	);
});

export default List;

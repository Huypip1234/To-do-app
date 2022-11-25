import React from "react";
import { useState, useContext, useRef } from "react";
//context
import { myContext } from './context';
//component
import Input from "./Input";
import List from "./List";

interface IList {
    key: number, 
    value: string,
}

const index = () => {

    const [item, setItem] = useState<string>('');
    const [list, setList] = useState<IList[]>([]);
    const [currentKey, setCurrentKey] = useState(0);

    const addItem = (e?: React.FormEvent<HTMLFormElement>) => {
        if(e!==undefined) {e.preventDefault();}
        if(item!=='') {
            /* list.push({key: currentKey, value: item});
            const updatedList = list; */
            setList([...list, {key: currentKey, value: item}]);
            setItem('');
            setCurrentKey(currentKey+1);
        }
    }

    const deleteItem = (chooseId: number) => {
        const updatedList = list.filter((ele, index) => {
            return ele.key!=chooseId;
        })
        setList(updatedList);
	}
    
    const onChangeHandle = (e: string) => {
        setItem(e);
    }
    
    const inputRef = useRef<HTMLInputElement>(null)
    const focusInput = () => {
        if(inputRef.current) { //phai check inputRef!==null
            inputRef.current.focus();
        }
    }
    const itemRef = useRef<HTMLLIElement>(null)
    const scrollFocus = () => {
        if(itemRef.current) { //phai check inputRef!==null
            itemRef.current.scrollIntoView();
        }
    };
	return (
            <myContext.Provider value={{item, list, addItem, deleteItem, onChangeHandle, focusInput, scrollFocus}}>
                <div className="mt-3">
                    <Input ref={inputRef} />
                    <div className="h-[20rem] my-12
                    overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100">
                        <ul>
                            {list.map((element, index) => (
                                <List element={element.value} myKey={element.key} key={element.key} ref={itemRef}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </myContext.Provider>
	);
};

export default index;

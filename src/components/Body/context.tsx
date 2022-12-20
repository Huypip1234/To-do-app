import React from "react";
import { useState, useContext, createContext } from "react";

interface IContext {
    item: string
    list: {key: number, value: string}[]
    addItem: (e?: React.FormEvent<HTMLFormElement>) => void
    deleteItem: (index: number) => void
    onChangeHandle: (e: string) => void
    focusInput: () => void
    scrollFocus:() => void
}

const initContext: IContext = {
    item: '',
    list: [],
    addItem: () => {},
    deleteItem: () => {},
    onChangeHandle: () => {},
    focusInput: () => {},
    scrollFocus: () => {}
}

export const myContext = createContext<IContext>(initContext);
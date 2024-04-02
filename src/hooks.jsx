import React, { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

export const useFlip = () => {
  const [ state, setState ] = useState(true);
  const toggleState = () => {
    setState(state => !state)
  }
  return [state, toggleState];
};


export const useAxios = (url) => {
  const [list, setList ] = useState([]);
  const addToList = async (endString = '') => {
    const response = await axios.get(
      `${url}${endString}`
    );
    setList(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [list, addToList];
};
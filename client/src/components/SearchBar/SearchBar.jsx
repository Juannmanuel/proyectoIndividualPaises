import { useSelector, useDispatch} from "react-redux";
import React, { useState, useEffect } from "react";
import { getByName } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import style from "./SearchBar.module.css";


export default function SearchBar() {

const [inputValue, setInputValue] = useState("")

const dispatch = useDispatch()

const handlerChange = (event) => {
  setInputValue(event.target.value)
  dispatch(getByName(event.target.value))

}


  return (
    <div className={style.container}>
      <input
      className={style.input}
      placeholder="Search"
      type="search"
      value={inputValue}
      onChange={handlerChange}
      />

    </div>
  );
}

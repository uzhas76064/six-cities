import {SortingParams} from "../../types/SortingParams";
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setSortingParam} from "../../store/action";

type PlacesSorterProps = {
  readonly params: SortingParams,
  readonly isOpened: boolean
}

type PlaceOptionProps = {
  readonly param: string,
  index: number
}

const PlacesOption = ({param,index}: PlaceOptionProps) => {
  const dispatch = useAppDispatch();
  const chosenParam = useAppSelector((state) => state.sortingParams.params[index]);

  const handleClick = () => {
    console.log(chosenParam, index);
    dispatch(setSortingParam(index));
  }

  return (
    <li
      className="places__option places__option--active"
      tabIndex={index}
      onClick={handleClick}
    >
      {param}
    </li>
  )
}

const PlacesSorter = ({params, isOpened}: PlacesSorterProps) => {
  return (
    <ul className={`places__options places__options--custom ${isOpened ? "places__options--opened" : ""}`} >
      {Object.values(params.params).map((param, index) => {
        return <PlacesOption key={param + String(index)} param={param} index={index}/>
      })}
    </ul>
  )
}

export default PlacesSorter;

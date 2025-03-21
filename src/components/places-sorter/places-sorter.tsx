import {SortingParams} from "../../types/SortingParams";
import {setSortingParam} from "../../store/action";
import {useAppDispatch, useAppSelector} from "../../hooks";

type PlacesSorterProps = {
   params: SortingParams,
   isOpened: boolean
}

type PlaceOptionProps = {
  param: string,
  index: number
}

const PlacesOption = ({param,index}: PlaceOptionProps) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
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

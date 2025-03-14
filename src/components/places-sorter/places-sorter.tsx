import {SortingParams} from "../../types/SortingParams";

type PlacesSorterProps = {
  readonly params: SortingParams
}

type PlaceOptionProps = {
  readonly param: string
}

const PlacesOption = ({param}: PlaceOptionProps) => {
  return (
    <li
      className="places__option places__option--active"
      tabIndex={0}
    >
      {param}
    </li>
  )
}

const PlacesSorter = ({params}: PlacesSorterProps) => {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {Object.values(params.params).map((param, index) => {
        return <PlacesOption key={param + String(index)} param={param}/>
      })}
    </ul>
  )
}

export default PlacesSorter;

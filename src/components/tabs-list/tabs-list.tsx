import {cities} from "../../const";
import LocationsItem from "../locations-item/locations-item";
import {setCity} from "../../store/action";
import {CityName} from "../../types/Location";
import {useAppDispatch, useAppSelector} from "../../hooks";

const TabsList = () => {
  const activeCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();

  const handleClick = (name: CityName) => {
    dispatch(setCity(name))
  }

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <LocationsItem key={city} name={city} isActive={city === activeCity.name} onClick={() => handleClick(city)}/>
      ))}
    </ul>
  );
}

export default TabsList;

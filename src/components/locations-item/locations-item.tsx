import {NavLink} from "react-router-dom";
import {CityName} from "../../types/Location";

type LocationsItemProps = {
  name: CityName,
  isActive: boolean,
  onClick: (name: CityName) => void
}

const LocationsItem = ({name, isActive, onClick}: LocationsItemProps) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <li className="locations__item" onClick={() => handleClick()}>
      <NavLink className={`locations__item-link tabs__item ${isActive ? "tabs__item--active" : ''}`} to="#">
        <span>{name}</span>
      </NavLink>
    </li>
  )
}

export default LocationsItem;

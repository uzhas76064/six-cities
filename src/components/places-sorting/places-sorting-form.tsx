import PlacesSorter from "../places-sorter/places-sorter";
import {useAppSelector} from "../../hooks/hooks";
import {useState} from "react";

const PlacesSortingForm = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const defaultParamId = useAppSelector((state) => state.sortingParams.default);
  const defaultParam = useAppSelector((state) => state.sortingParams.params[defaultParamId]);

  const handleOpenSorter = () => {
    setIsOpened((prevState) => !prevState);
  }

  const sortingParams = useAppSelector((state) => state.sortingParams);

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleOpenSorter}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
                                {defaultParam}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
      <PlacesSorter params={sortingParams} isOpened={isOpened}/>
    </form>
  )
}

export default PlacesSortingForm

import React, {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import {City} from "../../types/City";
import {Location} from "../../types/Location";
import useMap from "../../hooks/useMap";
import {Icon, Marker} from "leaflet";

type MapProps = {
  city: City;
  locations: Location[];
  place?: 'cities' | 'property';
};

const defaultCustomIcon = new Icon({
  iconUrl: "/img/pin.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({ city, locations, place = 'cities' }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      locations.forEach(({ latitude: lat, longitude: lng }) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, locations]);

  return <section className={`${place}__map map`} ref={mapRef} />;
};

export default Map;

import React from "react";
import "./About.scss";
import { YMaps, Map, Placemark } from "react-yandex-maps";

interface MapProps {
  geo: {
    lat: number;
    lng: number;
  };
  text: string;
}

export const UserLocation: React.FC<MapProps> = (props) => {
  return (
    <YMaps
    
      query={{
        apikey: "50b7abf5-f8ea-47b7-8eba-f234ed74eb9b&lang=ru_RU",
      }}
      version={"2.1"}
    >
      <Map
      className="userMap"
        defaultState={{
          center: [props.geo.lat, props.geo.lng],
          zoom: 1,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
      >
        <Placemark
          modules={["geoObject.addon.balloon"]}
          geometry={[props.geo.lat, props.geo.lng]}
          properties={{
            balloonContent: props.text,
          }}
        />
      </Map>
    </YMaps>
  );
};
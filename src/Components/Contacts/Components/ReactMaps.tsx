import React from "react";
import "../Contacts.scss";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const ReactMaps = () => {
  return (
    <div className="mapContainer">
      <YMaps
        query={{
          apikey: "50b7abf5-f8ea-47b7-8eba-f234ed74eb9b&lang=ru_RU",
        }}
        version={"2.1"}
      >
        <Map
          className="yMap"
          defaultState={{
            center: [43.24461732411643, 76.91852930395504],
            zoom: 13,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            modules={["geoObject.addon.balloon"]}
            geometry={[43.26415356870247, 76.92992332785028]}
            properties={{
              balloonContent: "Mega Park Алматы",
            }}
          />
          <Placemark
            modules={["geoObject.addon.balloon"]}
            geometry={[43.23009975877215, 76.94609704821009]}
            options={{
              iconLayout: "default#image",
              iconImageHref: require("./img/mapIcon.png"),
              iconImageSize: [50, 50],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

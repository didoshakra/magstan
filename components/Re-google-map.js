//re-google-map //https://demos.creative-tim.com/nextjs-material-kit-pro/documentation/google-maps
//Как получить API-ключ для Google Maps //https://art-lemon.com/google-maps-api-key
// key:AIzaSyBg9GjxyvRbNqKgltcsPSdwttcog3fKe_0
// key:AIzaSyD4W0-r41G_TRnTU9fwoyI1kwGponlvlJc
// kalush = { lat: 49.029342, lng: 24.360938 }
//zoom: 14,
//center: kalush

import React from "react";
// import { useRouter } from "next/router";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// import useTranslation from "../translations/useTranslation";

const onClickMarker1 = evn => {
  // textInput.current.focus();
  // window.location.replace("/en/shops/#m1"); //Не вертає назад по стрілці одну подію, але не перегружає
  // window.location.href = "/en/shops/#m1";//Вертає назад по стрілці але пересвічує
  // window.location.assign("/en/shops/#m1");//Вертає назад по стрілці але пересвічує
  // <Link href="/[lang]/google-map" as={`/${locale}/google-map`}></Link>
  console.log("+++ /re-google-map.js/onMarkerClick/lat=", evn.latLng.lat()); // lat of click event
  console.log("+++ /re-google-map.js/onMarkerClick/lng=", evn.latLng.lng());
  console.log("+++ /re-google-map.js/onMarkerClick/evn=", evn);
};
const onClickMarker2 = evn => {
  // window.location.replace("/en/shops/#m2"); //Працює але перегружає
};

const onClickMarker3 = evn => {
  // window.location.replace("/en/shops/#m3"); //Працює але перегружає
};
const onClickMarker4 = evn => {
  // window.location.replace("/en/shops/#m4"); //Працює але перегружає
};
const onClickMarker5 = evn => {
  // window.location.replace("/en/shops/#m5"); //Працює але перегружає
};
const onClickMarker6 = evn => {
  // window.location.replace("/en/shops/#m6"); //Працює але перегружає
};
const onClickMarker7 = evn => {
  // window.location.replace("/en/shops/#m7"); //Працює але перегружає
};
const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      // defaultZoom={8}
      defaultZoom={14}
      defaultCenter={{ lat: 49.0297, lng: 24.360938 }} //Калуш
      defaultOptions={{
        scrollwheel: false //відключено ScrollZoom(Зміни маштабу по скролу)
        // scrollwheel: true //включено ScrollZoom(Зміни маштабу по скролу)
      }}
      // options={{ gestureHandling: "greedy" }} //Якщо забрати, то не буде ScrollZoom(Зміни маштабу по скролу)
    >
      <Marker
        title="Магазин 'Станіславський2' вул.Тихого,2"
        // label="Тихого"//Працює
        position={{ lat: 49.03847985, lng: 24.35112655 }}
        showInfo="true" ////не працює
        InfoWindow="InfoWindow Магазин 'Станіславський2'" //не працює
        onClick={onClickMarker1} //
        // onClick={() => onMarkerClick(marker)}
        name="Oxford"
        slug="oxford"
        // animation="DROP"//не праює Капля-Падає зверху вниз при аершому встановленні
        animation="BOUNCE" //не працює підстрибує поки animation !=="null"
      />
      <Marker
        id="2"
        onClick={onClickMarker2}
        title="Павільйон 'Продукти 6*6' вул.Б.Хмельницького,2"
        position={{ lat: 49.04028737, lng: 24.35388654 }}
      />
      <Marker
        id="3"
        onClick={onClickMarker3}
        title="Магазин 'Продукти' вул.Пушкіна,2"
        position={{ lat: 49.03597241, lng: 24.36406016 }}
      />
      <Marker
        id="4"
        onClick={onClickMarker4}
        title="Магазин 'Дворик' вул.Л.Українки,2"
        position={{ lat: 49.03143197, lng: 24.36044455 }}
      />
      <Marker
        id="5"
        onClick={onClickMarker5}
        title="Магазин 'Тютюн' вул.Дзвонарська,2"
        position={{ lat: 49.02460823, lng: 24.36434448 }}
      />
      <Marker
        id="6"
        onClick={onClickMarker6}
        title="Павільйон '5*5' вул.Винниченка,2"
        position={{ lat: 49.02272274, lng: 24.36296582 }}
      />
      <Marker
        id="7"
        onClick={onClickMarker7}
        title="Магазин 'Станіславський' вул.С.Бандери,2"
        position={{ lat: 49.02268756, lng: 24.37012732 }}
      />
    </GoogleMap>
  ))
);

{
  /* <MarkerWithLabel
    key={marker.id}
    position={{ lat: marker.latitude, lng: marker.longitude }}
    labelAnchor={new google.maps.Point(0, 0)}
    onMouseOver={() => props.onMarkerMouseover(marker) }
    onMouseOut={() => props.onMarkerMouseout(marker)}
    onClick={() => props.onMarkerClick(marker)}
  >
    <div style={{color: 'red', display: 'none', font: 'Hobo Std'}}>{marker.name}</div>
  </MarkerWithLabel> */
}

export default function GoogleMaps() {
  return (
    <RegularMap
      // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4W0-r41G_TRnTU9fwoyI1kwGponlvlJc"
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBg9GjxyvRbNqKgltcsPSdwttcog3fKe_0"
      loadingElement={<div style={{ height: "100%" }} />}
      containerElement={<div style={{ height: "600px" }} />}
      mapElement={<div style={{ height: "100%" }} />}
    />
  );
}

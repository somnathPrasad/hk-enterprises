import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 22.245991798449783,
        lng: 84.80720072505429,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: "DEMO_MAP_ID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
      const marker = new AdvancedMarkerElement({ map, position });
    };
    initMap();
  }, []);

  return <div style={{ height: "300px" }} ref={mapRef} />;
}

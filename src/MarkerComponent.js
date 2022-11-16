import React from "react";
import { Marker, useMap } from "react-leaflet";

export default function MarkerComponent(props) {
    const map = useMap();

    return (
        <div>
            <Marker
                position={props.position}
                eventHandlers={{
                    click: (e) => {
                        map.flyTo(e.latlng, 15);
                        console.log("found it on click")
                    },
                    
                }}
            ></Marker>
        </div>
    );
}
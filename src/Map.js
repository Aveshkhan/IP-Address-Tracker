import React, { useEffect } from 'react'
import { MapContainer, TileLayer, useMap, ZoomControl } from "react-leaflet";
import MarkerComponent from './MarkerComponent';

const MapMethod = (props) => {
    const map = useMap()
    

    useEffect(() => {
        if (props.position.length) {
            map.flyTo(props.position, 12)
        }
    })

}

const Map = (props) => {
    const position = [props.lat, props.long];
    console.log("defaultPosition ===>" + position)



    return (
        <>
            <MapContainer
                center={position}
                zoom={position ? 2 : 8}
                minZoom={1}
                style={{ width: '100%', height: '65vh', zIndex: '-1', position: 'absolute', top: '35vh' }}

            >
                <MarkerComponent position={position} />
                <MapMethod position={position} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="bottomright" />
            </MapContainer>
        </>
    )
}

export default Map
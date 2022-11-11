import React from 'react'
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import MarkerComponent from './MarkerComponent';

const Map = (props) => {
    // const map = useMap()
    const position = [props.lat, props.long];
    console.log("defaultPosition ===>" + position)

    return (
            <MapContainer
                center={position}
                zoom={position ? 2 : 8}
                minZoom={1}
                style={{ width: '100%', height: '65vh', zIndex: '-1', position: 'absolute', top: '35vh' }}
                
            >
                <MarkerComponent position={position}/>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ZoomControl position="bottomright" />
            </MapContainer>
        )
}

export default Map
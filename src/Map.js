import React from 'react'
import { MapContainer, TileLayer, Marker } from "react-leaflet";


const Map = () => {
    const defaultPosition = [19.285789, 72.869247]; 

    return (
        <div className="map__container">
            <MapContainer
                center={defaultPosition}
                zoom={13}
                style={{ width: '100%', height: '65vh', zIndex: '-1', position: 'absolute', top: '35vh' }}
            >
            <Marker
            position={defaultPosition}
          >
          </Marker>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>)
}

export default Map
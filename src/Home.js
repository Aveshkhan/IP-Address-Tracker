import React from 'react'
import axios from 'axios'
import Map from './Map';

import searchArrow from "./assets/images/icon-arrow.svg"
import { useRef, useState } from 'react';
import { useMap } from 'react-leaflet';
const Home = () => {

    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [ip, setIp] = useState("192.212.174")
    const [location, setLocation] = useState("Location")
    const [timeZone, setTimeZone] = useState("Timezone")
    const [isp, setIsp] = useState("ISP")
    const IPGeo_URL = "https://api.ipgeolocation.io/ipgeo"
    const IpAddress = useRef();
    // const map = useMap()                .

    const getCurrentLocationByIp = () => {

        console.log(IpAddress.current.value)
        axios.get(IPGeo_URL, {
            params: {
                apiKey: '72fd666d64b84036acc3280006b501bb',
                ip: IpAddress.current.value
            }
        }).then((response) => {
            console.log(response)
            setLatitude(response.data.latitude)
            setLongitude(response.data.longitude)
            setIp(response.data.ip)
            setLocation(response.data.country_name)
            setTimeZone(response.data.time_zone.offset)
            setIsp(response.data.isp)
            console.log(ip, location, timeZone, isp)
        })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="background">
                    <div className="row mt-5 flex-column justify-content-center align-items-center header">
                        <div className="col-10 col-sm-10 col-lg-6 col-xs-10 col-md-6 ipInput">
                            <h2 className='text-center text-light fw-bold mb-4'>IP Address Tracker</h2>
                            <div className="input-group mb-3">
                                <input ref={IpAddress} type="text" className="form-control" placeholder="Search for any public IP address" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button onClick={getCurrentLocationByIp} className="btn btn-dark center" type="button" id="button-addon2"><img className='mb-1' src={searchArrow} alt="search" /></button>
                            </div>
                        </div>
                        <div className="card p-4 col-10 col-sm-10 col-lg-8 col-xs-10 col-md-8">
                            <div className="row details">
                                <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-12 border-end detail">
                                    <p className='mb-0 fw-bold fs-7 text-secondary mb-1'>IP ADDRESS</p>
                                    <h3 className='fs-4'>{ip}</h3>
                                </div>
                                <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-12 border-end detail">
                                    <p className='mb-0 fw-bold fs-7 text-secondary mb-1'>LOCATION</p>
                                    <h3 className='fs-4'>{location}</h3>
                                </div>
                                <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-12 border-end detail">
                                    <p className='mb-0 fw-bold fs-7 text-secondary mb-1'>TIMEZONE</p>
                                    <h3 className='fs-4'>UTC {timeZone}</h3>
                                </div>
                                <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-12 detail">
                                    <p className='mb-0 fw-bold fs-7 text-secondary mb-1'>ISP</p>
                                    <h3 className='fs-4'>{isp}</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Map lat={latitude} long={longitude} />
        </>
    )
}

export default Home
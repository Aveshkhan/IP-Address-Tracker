import './App.css';
import axios from 'axios'
import Map from './Map';

import searchArrow from "./assets/images/icon-arrow.svg"

function App() {

  const IPGeo_URL = "https://api.ipgeolocation.io/ipgeo"

  const getCurrentLocationByIp = () => {
    let config = {
      apiKey : '72fd666d64b84036acc3280006b501bb',
      ipAddress : '192.168.1.44'
    }

    axios.get(IPGeo_URL, config).then((response) => {
      console.log(response)
    })
  }

  return (
    <>
      <div className="container-fluid">
        <div className="background">
          <div className="row mt-5 flex-column justify-content-center align-items-center">
            <div className="col-10 col-sm-10 col-lg-6 col-xs-10 col-md-6">
              <h2 className='text-center text-light fw-bold mb-4'>IP Address Tracker</h2>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search for any IP address or domain" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button onClick={getCurrentLocationByIp} className="btn btn-dark center" type="button" id="button-addon2"><img className='mb-1' src={searchArrow} alt="search" /></button>
              </div>
            </div>
            <div className="card p-4 col-10 col-sm-10 col-lg-8 col-xs-10 col-md-8">
              <div className="row">
                <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-12 border-end">
                  <p className='mb-0 fw-bold fs-7 text-secondary mb-1'>IP ADDRESS</p>
                  <h3>192.168.1.44</h3>
                </div>
                <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-12 border-end">
                  <p className='mb-0 fw-bold fs-7 text-secondary mb-1'>IP ADDRESS</p>
                  <h3>192.168.1.44</h3>
                </div>
                <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-12 border-end">
                  <p className='mb-0 fw-bold fs-7 text-secondary mb-1'>IP ADDRESS</p>
                  <h3>192.168.1.44</h3>
                </div>
                <div className="col-12 col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <p className='mb-0 fw-bold fs-7 text-secondary mb-1'>IP ADDRESS</p>
                  <h3>192.168.1.44</h3>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Map />
    </>
  );
}

export default App;

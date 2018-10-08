import React, {Component} from 'react'
import axios from 'axios'

class SendRec extends Component {
  state = {
    data: [],

    SenArea: [],
    RecArea: [],
    SendGeoMarket: [],
    RecGeoMarket: [],
    Segment: [],
    SendCountry: [],
    RecCountry: [],
  }

  componentDidMount() {
    axios.get('/iCharge').then(res => {
      const data = res.data
      console.log(data)
      const info = data.filter(res => res.Area).map(res => res.Area)

      console.log(info)
      this.setState({
        data: [...res.data],
        SenArea: [...info],
        RecArea: [...info],
      })
    })
    this.genSegments()
  }

  genArea = () => {
    const data = this.state.data
    const value = document.querySelector('#senArea').value
    const Geo = data
      .filter(res => res.Area === value)
      .map(geo => geo.Geomarket)
      .map(loc => loc)

    this.setState({
      SendGeoMarket: [...Geo[0]],
    })

    this.genSenCountry()
  }

  genRecArea = () => {
    const data = this.state.data
    const value = document.querySelector('#recArea').value
    const Geo = data
      .filter(res => res.Area === value)
      .map(geo => geo.Geomarket)
      .map(loc => loc)

    this.setState({
      RecGeoMarket: [...Geo[0]],
    })

    this.genRecCountry()
  }

  genSenCountry = () => {
    const data = this.state.data
    const value = document.querySelector('#senArea').value
    const Country = data
      .filter(res => res.Area === value)
      .map(geo => geo.Country)
      .map(loc => loc)

    this.setState({
      SendCountry: [...Country[0]],
    })
  }

  genRecCountry = () => {
    const data = this.state.data
    const value = document.querySelector('#recArea').value
    const Country = data
      .filter(res => res.Area === value)
      .map(geo => geo.Country)
      .map(loc => loc)

    this.setState({
      RecCountry: [...Country[0]],
    })
  }

  genSegments = () => {
    axios.get('/segment').then(res => {
      console.log(res)
      const data = res.data
      const segment = data.filter(res => res.Seg).map(res => res.Seg)
      this.setState({
        Segment: [...segment[0]],
      })
    })
  }

  render() {
    return (
      <div className="form-row">
        <div className="col-md-6">
          <h3>Sending Location</h3>
          <div className="form-group">
            <label htmlFor="">Area</label>
            <select
              name="senArea"
              className="form-control"
              id="senArea"
              onChange={e => this.genArea()}
            >
              {this.state.SenArea.map((loc, i) => {
                return <option key={i}>{loc}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">GeoMarket</label>
            <select name="" className="form-control" id="senGeo">
              {this.state.SendGeoMarket.map((loc, i) => {
                return <option key={i}>{loc}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Segment</label>
            <select name="" className="form-control" id="sendSeg">
              {this.state.Segment.map((loc, i) => {
                return <option key={i}>{loc}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Country</label>
            <select name="" className="form-control" id="">
              {this.state.SendCountry.map((loc, i) => {
                return <option key={i}>{loc}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Company</label>
            <input type="text" className="form-control" />
          </div>
          <br />
          <button className="btn btn-primary">Validate</button>
        </div>

        <div className="col-md-6">
          <h3>Receiving Location</h3>
          <div className="form-group">
            <label htmlFor="">Area</label>
            <select
              name="recArea"
              className="form-control"
              id="recArea"
              onChange={() => this.genRecArea()}
            >
              {this.state.RecArea.map((loc, i) => {
                return <option key={i}>{loc}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">GeoMarket</label>
            <select name="" className="form-control" id="recGeo">
              {this.state.RecGeoMarket.map((loc, i) => {
                return <option key={i}>{loc}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Segment</label>
            <select name="" className="form-control" id="recSegment">
              {this.state.Segment.map((loc, i) => {
                return <option key={i}>{loc}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Country</label>
            <select name="" className="form-control" id="recCountry">
              {this.state.RecCountry.map((loc, i) => {
                return <option key={i}>{loc}</option>
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Company</label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    )
  }
}

export default SendRec

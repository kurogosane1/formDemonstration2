import React, {Component} from 'react'

//components
import SendRec from './formChildren/sendrec'
import Contacts from './formChildren/contacts'

// stylesheets
import './form.css'
import CostCenter from './formChildren/costcenter'
import UploadItems from './uploaditems';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  selectOption(e) {
    const result = e.target.value
    console.log(result)
    if (result === 'OFS' || result === 'NONOFSFMT' || result === 'INV') {
      document.querySelector('#refid').classList.add('visible')
      document.querySelector('#tranid').classList.add('visible')
      document.querySelector('#refer').classList.add('export')
      document.querySelector('#refer').classList.remove('visible')
    } else {
      document.querySelector('#refid').classList.remove('visible')
      document.querySelector('#tranid').classList.remove('visible')
      document.querySelector('#refer').classList.remove('export')
      document.querySelector('#refer').classList.add('visible')
    }
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <div className="form-group">
          <label htmlFor="typeOfCharge"> Select the type of FMT </label>
          <select
            name="FMTtype"
            id=""
            className="form-control"
            onChange={e => this.selectOption(e)}
          >
            <option value=""> </option>
            <option value="OFS"> Field Material Transfer </option>
            <option value="NONOFSFMT">Field Material Transfer Non - OFS</option>
            <option value="INV"> Inventory </option>
            <option value="Recharge"> Personal Recharge </option>
            <option value="Other"> Recharge </option>
          </select>
        </div>
        <br />
        <div className="form-group export" id="refid">
          <label htmlFor=""> Reference Number </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group export" id="tranid">
          <label htmlFor=""> Transaction Id </label>
          <input type="text" className="form-control" />
        </div>
        <br />
        <div className="form-group visible" id="refer">
          <label htmlFor="reference">Original Reference</label>
          <input type="text" className="form-control" id="reference" />
        </div>
        <div className="form-group" id="">
          <label htmlFor="description"> Description</label>
          <input type="text" className="form-control" id="description" />
        </div>
        <div className="form-group">
          <Contacts />
        </div>
        <br />
        <div className="form-group">
          <SendRec />
        </div>
        
          <CostCenter />
      
      </div>
      <br/>
        <UploadItems/>
      </React.Fragment>

    )
  }
}

export default Form

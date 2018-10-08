import React, {Component, Fragment} from 'react'

class CostCenter extends Component {
  constructor(props) {
    super(props);
    this.CostCenters = [];
    this.state = {
      AU: null,
      AC: null,
      Account: null,
      isitOFS: false,
      isitNonOFS: false,
      Description: null,
      Item: null,
      amount: null,
      clicked: false,
    };
  }

  handleSubmit = function(event) {
    event.preventDefault()
    const data = this.state
    console.log(data)
    const app = this.CostCenters
    if (app.length > 0) {
      app.push(data)
      // app.map((data,i) => {
      //  <div className="form-row">
      //    <div className="form-row">
      //      <div className="form-group col-md-3">
      //        <label htmlFor="">Item Description</label><input type="text" className="form-control" id="itemdescription"/>
      //      </div>
      //    </div>
      //  </div>
      // })
    }

    //   const done = app.map(data => {
    //     <div>
    //       <div className="form-row">
    //         <div className="form-group col-md-3">
    //           <label>Item Description</label>
    //           <input
    //             type="Text"
    //             className="form-control"
    //             id="itemdescription"
    //             placeholder="Item Description"
    //             value={data.Item}
    //           />
    //         </div>
    //         <div className="form-group col-md-3">
    //           <label>Description</label>
    //           <input
    //             type="Text"
    //             className="form-control"
    //             id="Description"
    //             placeholder="Description"
    //             value={data.Description}
    //           />
    //         </div>
    //         <div className="form-group col-md-2">
    //           <label>Accounting Unit</label>
    //           <input
    //             type="Text"
    //             className="form-control"
    //             id="AU"
    //             placeholder="Accounting Unit"
    //             value={data.AU}
    //           />
    //         </div>
    //         <div className="form-group col-md-3">
    //           <label>Activity</label>
    //           <input
    //             type="Text"
    //             className="form-control"
    //             id="AC"
    //             placeholder="Activity"
    //             value={data.AC}
    //           />
    //         </div>
    //       </div>
    //       <div className="form-row">
    //         <div className="form-group col-md-3">
    //           <label>Amount</label>
    //           <input
    //             type="number"
    //             className="form-control"
    //             id="AC"
    //             placeholder="Amount"
    //             value={data.amount}
    //           />
    //           <span className="input-group-btn">
    //             <button className="btn delete hidden" type="submit">
    //               <i className="fas fa-arrow-circle-down" />
    //             </button>
    //             <button className="btn edit hidden" type="submit">
    //               <i className="fas fa-arrow-circle-down" />
    //             </button>
    //             <button className="btn duplicate hidden" type="submit">
    //               <i className="fas fa-arrow-circle-down" />
    //             </button>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Item Description</label>
          <input
            name="Item"
            type="Text"
            className="form-control"
            id="itemdescription"
            placeholder="Item Description"
            onChange={e => this.handleChange(e)}
          />

          <label>Description</label>
          <input
            name="Description"
            type="Text"
            className="form-control"
            id="Description"
            placeholder="Description"
            onChange={e => this.handleChange(e)}
          />

          <label>Accounting Unit</label>
          <input
            name="AU"
            type="Text"
            className="form-control"
            id="AU"
            placeholder="Accounting Unit"
            onChange={e => this.handleChange(e)}
          />

          <label>Account</label>
          <input
            name="Account"
            type="Text"
            className="form-control"
            id="AC"
            placeholder="Account"
            onChange={e => this.handleChange(e)}
          />

          <label>Activity</label>
          <input
            name="AC"
            type="Text"
            className="form-control"
            id="AC"
            placeholder="Activity"
            onChange={e => this.handleChange(e)}
          />

          <label>Amount</label>
          <input
            name="amount"
            type="number"
            className="form-control"
            id="amount"
            placeholder="Amount"
            onChange={e => this.handleChange(e)}
          />

          <button type="submit" className="btn">
            Submit
          </button>

          {/* This is where the things would show up */}
          {/* <div className="form-row">
          <div className="form-group col-md-3">
            <label>Item Description</label>
            <input
              type="Text"
              className="form-control"
              id="itemdescription"
              placeholder="Item Description"
              value={this.state.Item}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Description</label>
            <input
              type="Text"
              className="form-control"
              id="Description"
              placeholder="Description"
              value={this.state.Description}
            />
          </div>
          <div className="form-group col-md-2">
            <label>Accounting Unit</label>
            <input
              type="Text"
              className="form-control"
              id="AU"
              placeholder="Accounting Unit"
              value={this.state.AU}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Activity</label>
            <input
              type="Text"
              className="form-control"
              id="AC"
              placeholder="Activity"
              value={this.state.AC}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Amount</label>
            <input
              type="number"
              className="form-control"
              id="AC"
              placeholder="Amount"
              value={this.state.amount}
            />
            <span className="input-group-btn">
              <button className="btn delete hidden" type="submit">
                <i className="fas fa-arrow-circle-down" />
              </button>
              <button className="btn edit hidden" type="submit">
                <i className="fas fa-arrow-circle-down" />
              </button>
              <button className="btn duplicate hidden" type="submit">
                <i className="fas fa-arrow-circle-down" />
              </button>
            </span>
          </div> */}
          {/* </div> */}
        </form>

        <div className="render">
          {this.CostCenters.map((data, i) => {
            <div className="form-row">
              <div className="form-group col-md-3">
                <label>Item Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="itemdescription"
                >
                  {data.Item}
                </input>
              </div>
            </div>
          })}
        </div>
      </Fragment>
    );
  }
}

export default CostCenter

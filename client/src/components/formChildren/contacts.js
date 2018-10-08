import React, { Component } from 'react'

class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = { 
            Group: []
         };

        this.addGroup = React.createRef();
    }
   
    


    render() { 
        return ( 
        <div>
             <div className="form-row">
                <div className="col-md-6">
                    <h5>Sending Team</h5>
                    <div className="form-group">
                        <label htmlFor="SendMang">Sending Manager</label>
                        <input type="text" className="form-control" id="SendMang"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="SendFA">Sending Business Analyst</label>
                        <input type="text" className="form-control" id="SendFA"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="SendFALead">Sending Business Analyst Lead</label>
                        <input type="text" className="form-control" id="SendFALead"/>
                    </div>
                </div>
                <div className="col-md-6">
                <h5>Receiving Team</h5>
                    <div className="form-group">
                        <label htmlFor="RecMang">Receiving Manager</label>
                        <input type="text" className="form-control" id="RecMang"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="RecFA">Receiving Business Analyst</label>
                        <input type="text" className="form-control" id="RecFA"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="RecFALead">Receiving Business Analyst Lead</label>
                        <input type="text" className="form-control" id="RecFALead"/>
                    </div>
                </div>

                <button className="btn btn-primary">Validate</button>

            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="">Add Additional Group</label>
                <input className="form-control" name="addGroup" ref={this.addGroup} type="text"/>
                <button className="fas fa-download"></button>
            </div>
        </div>           
         );
    }
}
 
export default Contacts;
import React, {Component} from 'react';
class UploadItems extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div>
                <h2>Upload documents</h2>
            </div>
            <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
              />
              <label className="custom-file-label">
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="inputGroupFileAddon04"
              >
                Button
              </button>
            </div>
          </div>
            </React.Fragment>
         );
    }
}
 
export default UploadItems;
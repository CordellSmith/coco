import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <div id="myFooter" className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity"></i>
          <i className="fa fa-snapchat w3-hover-opacity"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity"></i>
          <i className="fa fa-twitter w3-hover-opacity"></i>
          <i className="fa fa-linkedin w3-hover-opacity"></i>
          <p className="w3-medium">Socials</p>
        </div>
      </div>
    )
}
}

export default Footer;
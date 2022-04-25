import React, { Component } from "react";

class Homepage extends Component {

  render() {
    return (
      <div>
        <div className="Header">
          <div style="float:right">
            <h1 className="HeaderText">Greg Edmondson</h1>
            <h2 className="HeaderSubtext">Bilingual Network Engineer</h2>
            <h3 className="HeaderSubtext">Tokyo, Japan</h3>
          </div>    
          <div style="float:left">
            <img className="profile" width="125vw" border-radius="25px" src="https://amplify-react-draw-devo-04151-deployment.s3.ap-northeast-1.amazonaws.com/cowboy.JPG" />
          </div>  
        </div>
       </div>
     );
  }
}

export default Homepage

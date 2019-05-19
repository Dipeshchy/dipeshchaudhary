import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div className="card mt-5">
        <h3 className="m-auto card-header pt-3" style={{color:'orange'}}>Contact</h3>
        <div className="card-body">
           
            <div className="row">
            <ul style={{ listStyle: "none" }} className="col-md-2 ml-5">
                  <li>
                    <a href="#">Permanent Address</a>
                  </li>
                  <li>
                    <a href="#">Current Address</a>
                  </li>
                  <li>
                    <a href="#">Email</a>
                  </li>
                  <li>
                    <a href="#">Mobile</a>
                  </li>
                
                </ul>
                <ul style={{ listStyle: "none" }} className="col-md-3">
                  <li>
                    <a href="#">Lahan-11, Siraha</a>
                  </li>
                  <li>
                    <a href="#">Imadol, Laitpur</a>
                  </li>
                  <li>
                    <a href="#">
                      dipeshchaudhary5@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#">+977 9842458893</a>
                  </li>
                </ul>
            </div>
           
        </div>
      </div>
    )
  }
}

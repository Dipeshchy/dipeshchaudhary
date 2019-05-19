import React, { Component } from "react";

export default class Skill extends Component {
  render() {
    return (
      <div className="card mt-5">
        <h3 className="pt-3 card-header m-auto" style={{color:'orange'}}>My Skills</h3>
        <div className="card-body">
          <div className="row">
            <div className="col-md-10">
              <div className="mt-2 ml-3">
                <h4>Java <i className="fab fa-java"></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    90%
                  </div>
                </div>
              </div>
              <div className="mt-2 ml-3">
                <h4>React <i className="fab fa-react"></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    80%
                  </div>
                </div>
              </div>
              <div className="mt-2 ml-3">
                <h4>PHP/MYSQL <i className="fab fa-php"></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "87%" }}
                    aria-valuenow="87"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    87%
                  </div>
                </div>
              </div>
              <div className="mt-2 ml-3">
                <h4>Laravel <i className="fab fa-laravel"></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "78%" }}
                    aria-valuenow="78"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    78%
                  </div>
                </div>
              </div>
              <div className="mt-2 ml-3">
                <h4>Bootstrap <i className="fab fa-bootstrap"></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "93%" }}
                    aria-valuenow="93"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    93%
                  </div>
                </div>
              </div>
              <div className="mt-2 ml-3">
                <h4>Javascript <i className="fab fa-js"></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    70%
                  </div>
                </div>
              </div>
              <div className="mt-2 ml-3">
                <h4>HTML5 <i className="fab fa-html5"></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    95%
                  </div>
                </div>
              </div>
              <div className="mt-2 ml-3">
                <h4>GIT <i className="fab fa-git"></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    60%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div className="card mt-5">
        <h3 className="pt-3 m-auto card-header" style={{color:'orange'}}>My Education</h3>
        <div className="card-body">
            <div className="row">
                <div className="col-md-10">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h5 className="text-primary">
                                Secondary
                            </h5>
                            <span>1997-2011</span>
                            <h5 className="text-secondary">Depot Higher Secondary School,Dharan</h5>
                            <p>SLC,87.75 percentage</p>
                        </li>
                        <li className="list-group-item mt-2">
                            <h5 className="text-primary">
                                Higher Secondary
                            </h5>
                            <span>2011-2013</span>
                            <h5 className="text-secondary">Depot Higher Secondary School,Dharan</h5>
                            <p>+2 Science,78 percentage</p>
                        </li>
                        <li className="list-group-item mt-2">
                            <h5 className="text-primary">
                                Bachelor
                            </h5>
                            <span>2015-2019</span>
                            <h5 className="text-secondary">Nepal College of Information Technology,Balkumari,Lalitpur</h5>
                            <span>Pokhara University</span>
                            <p>Bachelor of Computer Engineering</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

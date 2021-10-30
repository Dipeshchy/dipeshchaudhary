import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div className="card mt-5">
        <h3 className="pt-3 m-auto">Education</h3>
        <div className="card-body">
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                    <li className="list-group-item mt-2">
                            <h5 className="text-primary">
                                Master
                            </h5>
                            <span>2021-Running</span>
                            <h5 className="text-secondary">Fulda University of Applied Sciences,Fulda, Hessen Germany</h5>
                            
                            <p>MSc Global Software Development</p>
                        </li>
                    <li className="list-group-item mt-2">
                            <h5 className="text-primary">
                                Bachelor
                            </h5>
                            <span>2015-2019</span>
                            <h5 className="text-secondary">Nepal College of Information Technology</h5>
                            <span>Pokhara University , Nepal</span>
                            <p>Bachelor of Computer Engineering, 3.37 CGPA(1,9 German Grade)</p>
                        </li>
                        <li className="list-group-item mt-2">
                            <h5 className="text-primary">
                                Higher Secondary (Class 12)
                            </h5>
                            <span>2011-2013</span>
                            <h5 className="text-secondary">Depot Higher Secondary School,Nepal</h5>
                            <p>+2 Science,78 percentage</p>
                        </li>
                        <li className="list-group-item">
                            <h5 className="text-primary">
                                Secondary(Class 10)
                            </h5>
                            <span>1997-2011</span>
                            <h5 className="text-secondary">Depot Higher Secondary School</h5>
                            <p>SLC,87.75 percentage</p>
                        </li>
                       
                        
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

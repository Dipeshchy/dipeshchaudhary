import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="card mt-4 pt-3 pr-3 pl-3">
        <div className="row">
          <div className="col-md-4">
            <img 
            style={{
              height: "380px"
            }}
            className="rounded float-left"
            src={require("../images/photo.jpg")} alt="me dipesh" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3>
                Hi I'm <span style={{ color: "orange" }}>Dipesh Chaudhary</span>
              </h3>
              <h4>Computer Engineer,Software Developer</h4>
              <p>
                My name is Dipesh Chaudhary, 27 years tech enthusiast, wanderer,
                student of MSc Global Software Development at Fulda University of 
                Applied Sciences.
               
              </p>
              <div className="row">
              <ul class="list-group list-group-flush">
              <li class="list-group-item">Email: dipeshchaudhary5@gmail.com / dipesh.chaudhary@informatik.hs-fulda.de</li>
              <li class="list-group-item">Phone: +49-01749235734 / 01630196917</li>
  <li class="list-group-item">Address: Wiesenmuehlenstr 3, Room no.3413, 36037 Fulda Germany</li>
  
  <li class="list-group-item">DOB : 22.10.1994</li>
  <li class="list-group-item">Nationality : Nepali</li>
  <li class="list-group-item">Languages : Nepali(Mother Tongue), English(C1), German(B1)</li>
  
</ul>

               
              </div>
              <ul
                style={{ listStyle: "none", height: "100px", marginTop: "20px" }}
                className="row"
              >
                {/* <li className="col-md-3">
                  <a
                    href="https://www.facebook.com/dipesh.chaudhary.3914"
                    target="_blank"
                  >
                    <i class="fab fa-facebook" />
                  </a>
                </li> */}
                <li className="col-md-4">
                  <a
                  style={{ textDecoration: "none" }}
                    href="https://www.xing.com/profile/Dipesh_Chaudhary/cv"
                    target="_blank"
                  >
                    <i class="fab fa-3x fa-xing" />
                  </a>
                </li>
                <li className="col-md-4">
                  <a
                    href="https://www.linkedin.com/in/dipesh-chaudhary-26407011a/"
                    target="_blank"
                  >
                    <i class="fab fa-3x fa-linkedin" />
                  </a>
                </li>
                
                {/* <li className="col-md-3">
                  <a href="https://twitter.com/Dipeshchy10" target="_blank">
                    <i class="fab fa-3x fa-twitter" />
                  </a>
                </li> */}
                <li className="col-md-4">
                  <a href="https://github.com/Dipeshchy" target="_blank">
                    <i class="fab fa-3x fa-github" />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

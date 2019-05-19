import React, { Component } from "react";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="card mt-5 pt-3 pr-3 pl-3">
        <div className="row">
          <div className="col-md-4">
            <img src={require("../images/dipesh.jpg")} alt="me dipesh" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3>
                Hi I'm <span style={{ color: "orange" }}>Dipesh Chaudhary</span>
              </h3>
              <h4>Computer Engineer,Software Developer</h4>
              <p>
                My name is Dipesh Chaudhary. I am 24 years old. I am final year
                student of Computer Engineering at Nepal College of Information
                Technology. I have knowledge of software development and web
                development. I am a tech enthusiast person. I have experiece
                working with PHP(Laravel), Java(Spring,Grails), Javascript
                (React,Angular),Bootstrap. Talking about my personal life,I love
                reading novels.Harry Potter is the best literature art that I am
                attached to most.I am big admirer of AR Rahman. I love listening
                to his Tamils hits.
              </p>
              <div className="row">
                <ul style={{ listStyle: "none" }} className="col-md-4">
                  <li>
                    <a href="#">Age</a>
                  </li>
                  <li>
                    <a href="#">Nationality</a>
                  </li>
                  <li>
                    <a href="#">DOB</a>
                  </li>
                  <li>
                    <a href="#">Permanent Address</a>
                  </li>
                  <li>
                    <a href="#">Current Address</a>
                  </li>
                  <li>
                    <a href="#">Mobile</a>
                  </li>
                  <li>
                    <a href="#">Email</a>
                  </li>
                </ul>
                <ul style={{ listStyle: "none" }} className="col-md-5">
                  <li>
                    <a href="#">24</a>
                  </li>
                  <li>
                    <a href="#">Nepali</a>
                  </li>
                  <li>
                    <a href="#">
                      October 22<sup>nd</sup> 1994
                    </a>
                  </li>
                  <li>
                    <a href="#">Lahan-11,Siraha</a>
                  </li>
                  <li>
                    <a href="#">Imadol,Lalitpur</a>
                  </li>
                  <li>
                    <a href="#">+977 9842458893</a>
                  </li>
                  <li>
                    <a href="#">dipeshchaudhary5@gmail.com</a>
                  </li>
                </ul>
              </div>
              <ul
                style={{ listStyle: "none", height: "100px" }}
                className="row"
              >
                <li className="col-md-3">
                  <a
                    href="https://www.facebook.com/dipesh.chaudhary.3914"
                    target="_blank"
                  >
                    <i class="fab fa-facebook" />
                  </a>
                </li>
                <li className="col-md-3">
                  <a href="https://twitter.com/Dipeshchy10" target="_blank">
                    <i class="fab fa-twitter" />
                  </a>
                </li>
                <li className="col-md-3">
                  <a href="https://github.com/Dipeshchy" target="_blank">
                    <i class="fab fa-github" />
                  </a>
                </li>
                <li className="col-md-3">
                  <a
                    href="https://www.linkedin.com/in/dipesh-chaudhary-26407011a/"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin" />
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

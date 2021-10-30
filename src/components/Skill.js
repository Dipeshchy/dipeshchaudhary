import React, { Component } from "react";
import SkillOne from "./SkillOne";

export default class Skill extends Component {
  render() {
    return (
      <div className="card mt-5">
        <h3 className="pt-3 m-auto">Skills</h3>
        <div className="card-body">
          <div className="row">
            <div className="col-md-10">
            <SkillOne skillIcon="react" skillName="Javascript(React,Node)" skillValue="80" />
            <SkillOne skillIcon="java" skillName="Java" skillValue="60" />
            <SkillOne skillIcon="docker" skillName="Docker" skillValue="80" />
              {/* <SkillOne skillIcon="php" skillName="PHP" skillValue="50" /> */}
              
              <SkillOne skillIcon="bootstrap" skillName="Bootstrap" skillValue="65" />
              <SkillOne skillIcon="html5" skillName="HTML5" skillValue="60" />
              
              <SkillOne skillIcon="git-square" skillName="GIT" skillValue="50" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

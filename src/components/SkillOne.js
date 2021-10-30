import React from "react"

export default function SkillOne({
  skillIcon, skillName, skillValue
}){
  return (
   
              <div className="mt-2 ml-3">
                <h4>{skillName} <i className={`fab fa-${skillIcon}`}></i> </h4>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skillValue}%` }}
                    aria-valuenow={skillValue}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skillValue}%
                  </div>
                </div>
              </div>
  )
}
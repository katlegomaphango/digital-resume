import React from 'react'

const Competencies = () => {
  return (
    <div className='competencies'>
      <div className="proficiency">
        <h2 className="title">
          Proficiency
        </h2>
        <div className="proficiency_body">
          <div>Beginner {'=>'} Intermediate</div>
          <div className="proficiency_tools">
            <div className="proficiency-tool">
              JavaScript <div className="proficiency_bar proficiency_bar-JS"></div>
            </div>
            <div className="proficiency-tool">
              Node <div className="proficiency_bar proficiency_bar-NODE"></div>
            </div>
            <div className="proficiency-tool">
              React <div className="proficiency_bar proficiency_bar-REACT"></div>
            </div>
            <div className="proficiency-tool">
              C# <div className="proficiency_bar proficiency_bar-CS"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">Skills</h2>
        <div className="skills_container">
          <p>Web Development</p>
          <p>Team Collaboration</p>
          <p>Agile</p>
          <p>Problem Solving</p>
          <p>Git and Version Control</p>
          <p>Software Development</p>
          <p>Function Programming</p>
          <p>Object Oriented Programming</p>
          <p>RESTful Apis</p>
        </div>
      </div>
    </div>
  )
}

export default Competencies
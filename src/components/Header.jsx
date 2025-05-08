import React from 'react'

const Header = () => {
  return (
    <>
    <div className="header-section">
      {/* <div className="img-div"> */}
        <img src="/public/profile-img.png" alt="profile image" />
      {/* </div> */}
      <div className="statement-div">
        <h1 className="statement-title">Katlego Maphango</h1>
        <div className="statement-objective">
        Detail-oriented full-stack web developer with practical experience from the Umuzi
Programme and various professional and academic projects. Proficient in
JavaScript, React, and C#, with a focus on building scalable, user-friendly
applications. Experienced in agile teamwork and adapting to new technologies.
{/* I am a passionate and dedicated software developer with a strong foundation in JavaScript and React.  */}
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
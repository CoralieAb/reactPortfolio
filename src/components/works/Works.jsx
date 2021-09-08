import React from 'react'
import "./works.scss"

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/img/coding/black-coding.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum error excepturi.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/img/sango.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
